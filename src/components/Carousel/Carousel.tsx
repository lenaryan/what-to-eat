import { days, menu } from "../../constants";
import styles from './Carousel.module.css';

const Carousel = () => {
    return (
        <>
            <ul className={styles.carousel}>
                {
                    menu.map((day, index) => (
                        <li className={styles.slideItem}>
                            <article className={styles.slide}>
                                <h3>{days[index]}</h3>
                                <div className={styles.slidePlate}>
                                    <li className={styles.menuDish}>
                                        <span>☕</span>
                                        {day.breakfast}
                                    </li>
                                    <li className={styles.menuDish}>
                                        <span>🍜</span>
                                        {day.lunch}
                                    </li>
                                    <li className={styles.menuDish}>
                                        <span>🥗</span>
                                        {day.dinner}
                                    </li>
                                </div>
                            </article>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Carousel;