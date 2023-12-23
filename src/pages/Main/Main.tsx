import { Link } from 'react-router-dom';
import styles from './Main.module.css';
import cn from 'classnames'
import { byingList, dishes, urls } from '../../essentials/constants';
import Carousel from '../../components/Carousel';
import { useState } from 'react';
import { DayMenuType } from '../../essentials/types';

const Main = () => {
    const [menu, setMenu] = useState<DayMenuType[]>([]);

    const handleCreateMenu = () => {
        setMenu([
            {
                "breakfast": dishes.breakfast[0].dish,
                "lunch": dishes.lunch[0].dish,
                "dinner": dishes.dinner[0].dish,
            },
        ]);
    }

    return (
        <section className="container">
            <h2>Меню</h2>
            <Carousel menu={menu} />
            <button type="button" className={cn(`button ${styles.eatBtn}`)} onClick={handleCreateMenu}>Что будем есть?</button>
            <h2>Список покупок</h2>
            <ul className={cn(`list ${styles.scrollByingList}`)}>
                {
                    byingList.map((product, index) => (
                        <li className="list__item" key={product + index}>{product}</li>
                    ))
                }
            </ul>
            <Link to={urls.ingredients} className="button">Что в холодильнике?</Link>
        </section>
    )
}

export default Main;