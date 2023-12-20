import styles from './Main.module.css';
import cn from 'classnames'

const Main = () => {
    return (
        <section className={cn(`container ${styles.relative}`)}>
            <h2>Меню</h2>
            <p>карусель</p>
            <button type="button" className={cn(`button ${styles.eatBtn}`)}>Что будем есть?</button>
            <h2>Список покупок</h2>
            <ul className="list">
                <li className="list__item">мюсли</li>
                <li className="list__item">котлеты</li>
                <li className="list__item">оливки</li>
                <li className="list__item">лук</li>
                <li className="list__item">помидоры</li>
                <li className="list__item">попить</li>
            </ul>
            <a href="#" className={cn(`button ${styles.fixedBtn}`)}>Что в холодильнике?</a>
        </section>
    )
}

export default Main;