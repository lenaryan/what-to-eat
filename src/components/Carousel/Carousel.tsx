import { days } from "../../shared/constants";
import { CarouselProps } from "../../shared/types";
import styles from './Carousel.module.css';

// TODO: loader?
export const Carousel = ({ menu }: CarouselProps) => {
    return (
        <>
            { 
                !!menu?.length && <ul className={styles.carousel}>
                {
                    menu.map((day, index) => (
                        <li className={styles.slideItem} key={`${day}${index}`}>
                            <article className={styles.slide}>
                                <h3>{days[index]}</h3>
                                <div className={styles.slidePlate}>
                                    <li className={styles.menuDish}>
                                        <span>☕</span>
                                        {day.breakfast}
                                    </li>
                                    <li className={styles.menuDish}>
                                        <span>🫕</span>
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
            }
        </>
    )
}