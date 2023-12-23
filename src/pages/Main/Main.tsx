import { Link } from 'react-router-dom';
import styles from './Main.module.css';
import cn from 'classnames'
import { dishes, urls } from '../../shared/constants';
import Carousel from '../../components/Carousel';
import { useEffect, useState } from 'react';
import { DayMenu } from '../../shared/types';
import { getMenuFromBase, getShoppingListFromBase, setMenuToBase } from '../../shared/api';

const Main = () => {
    const [menu, setMenu] = useState<DayMenu[]>([]);
    const [shoppingList, setShoppingList] = useState<string[]>([]);

    useEffect(() => {
        setShoppingList(getShoppingListFromBase);
        setMenu(getMenuFromBase);
    }, []);

    // TODO: think how to keep and save menu – what day, what slot, etc.
    const handleCreateMenu = () => {
        setMenu([
            {
                "breakfast": dishes.breakfastList[0].dish,
                "lunch": dishes.lunchList[0].dish,
                "dinner": dishes.dinnerList[0].dish,
            },
        ]);
        setMenuToBase(menu);
    }

    // const setMeal = (day: keyof typeof days, meal: string, dish: string) => {
    
    // };

    return (
        <section className="container">
            <h2>Меню</h2>
            <Carousel menu={menu} />
            <button type="button" className={cn(`button ${styles.eatBtn}`)} onClick={handleCreateMenu}>Что будем есть?</button>
            <h2>Список покупок</h2>
            <ul className={cn(`list ${styles.scrollByingList}`)}>
                {
                    shoppingList?.map((product, index) => (
                        <li className="list__item" key={product + index}>{product}</li>
                    ))
                }
            </ul>
            <Link to={urls.ingredients} className="button">Что в холодильнике?</Link>
        </section>
    )
}

export default Main;