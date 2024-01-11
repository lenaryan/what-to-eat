import { Link } from 'react-router-dom';
import styles from './Main.module.css';
import cn from 'classnames'
import Carousel from '../../components/Carousel';
import { useEffect } from 'react';
import { fetchShoppingList, setMenuToBase, setShoppingListToBase, fetchIngredients, fetchMenu } from '../../shared/api';
import { generateMeal } from '../../shared/functions';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { setShoppingList } from '../../redux/shoppingSlice';
import { setMenu } from '../../redux/menuSlice';

const Main = () => {
    const { menu } = useSelector((state: RootState) => state.menuSlice);
    const { ingredients } = useSelector((state: RootState) => state.ingredientsSlice);
    const { shoppingList } = useSelector((state: RootState) => state.shoppingSlice)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchMenu());
        dispatch(fetchIngredients());
        dispatch(fetchShoppingList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // TODO: think how to keep and save menu – what day, what slot, etc.
    const handleCreateMenu = () => {
        const { menu, whatToBuy } = generateMeal(ingredients);
        const newShoppingList = Array.from(new Set([...shoppingList, ...whatToBuy]))

        dispatch(setMenu([menu]));
        setMenuToBase([menu])
        dispatch(setShoppingList(newShoppingList));
        setShoppingListToBase([...newShoppingList]);
    }

    return (
        <section className="container">
            <h2>Меню</h2>
            <Carousel menu={menu} />
            <button type="button" className={cn(`button ${styles.eatBtn}`)} onClick={handleCreateMenu}>Что будем есть?</button>
            <h2>Список покупок</h2>
            <ul className={cn(`list ${styles.scrollByingList}`)}>
                {
                    shoppingList?.map((product, index) => (
                        <li className="list__item" key={index}>{product}</li>
                    ))
                }
            </ul>
            <Link to='/ingredients' className="button">Что в холодильнике?</Link>
        </section>
    )
}

export default Main;