import { Link } from 'react-router-dom';
import styles from './Main.module.css';
import cn from 'classnames'
import { urls } from '../../constants';
import Carousel from '../../components/Carousel';

const byingList = ["мюсли", "котлеты", "оливки", "лук", "помидоры", "попить"]

const Main = () => {
    return (
        <section className="container relativeContainer">
            <h2>Меню</h2>
            <Carousel />
            <button type="button" className={cn(`button ${styles.eatBtn}`)}>Что будем есть?</button>
            <h2>Список покупок</h2>
            <ul className={cn(`list ${styles.scrollByingList}`)}>
                {
                    byingList.map(product => (
                        <li className="list__item" key={product}>{product}</li>
                    ))
                }
            </ul>
            <Link to={urls.ingredients} className="button fixedBtn">Что в холодильнике?</Link>
        </section>
    )
}

export default Main;