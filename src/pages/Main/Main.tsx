import { Link } from 'react-router-dom';
import styles from './Main.module.css';
import cn from 'classnames'
import Carousel from '../../components/Carousel';
import { useEffect, useState } from 'react';
import { DayMenu } from '../../shared/types';
import { getMenuFromBase, fetchShoppingList, setMenuToBase, setShoppingListToBase } from '../../shared/api';
import { generateMeal } from '../../shared/functions';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';

const Main = () => {
    // const [menu, setMenu] = useState<DayMenu[]>([]);
    // const [shoppingList, setShoppingList] = useState<string[]>([]);
    const { shoppingList } = useSelector((state: RootState) => state.shoppingSlice)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchShoppingList());
        // setMenu(getMenuFromBase);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // TODO: think how to keep and save menu – what day, what slot, etc.
    const handleCreateMenu = () => {
        const { menu, whatToBuy } = generateMeal();

        // setMenu([menu]);
        setMenuToBase([menu])

        const newShoppingList = Array.from(new Set([...shoppingList, ...whatToBuy]))
        // setShoppingList([...newShoppingList]);
        // setShoppingListToBase([...newShoppingList]);
    }

    return (
        <section className="container">
            <h2>Меню</h2>
            {/* <Carousel menu={menu} /> */}
            <button type="button" className={cn(`button ${styles.eatBtn}`)} onClick={handleCreateMenu}>Что будем есть?</button>
            <h2>Список покупок</h2>
            <ul className={cn(`list ${styles.scrollByingList}`)}>
                {
                    shoppingList?.map((product, index) => (
                        <li className="list__item" key={index}>{product.title}</li>
                    ))
                }
            </ul>
            <Link to='/ingredients' className="button">Что в холодильнике?</Link>
        </section>
    )
}

export default Main;