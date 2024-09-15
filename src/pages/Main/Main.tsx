import styles from './Main.module.css';
import { useEffect, useState } from 'react';
import { DayMenu } from '../../shared/types';
import { getMenuFromBase, setMenuToBase } from '../../shared/api';
import { generateMeal } from '../../shared/functions';
import { Button } from '../../components/Button';
import klosh from '../../assets/images/klosh.png';

const Main = () => {
    const [menu, setMenu] = useState<DayMenu[]>([]);

    useEffect(() => {
        setMenu(getMenuFromBase);
    }, []);

    // TODO: think how to keep and save menu – what day, what slot, etc.
    const handleCreateMenu = () => {
        const { menu, whatToBuy } = generateMeal();

        setMenu([menu]);
        setMenuToBase([menu])

        // const newShoppingList = Array.from(new Set([...shoppingList, ...whatToBuy]))
        // setShoppingList([...newShoppingList]);
        // setShoppingListToBase([...newShoppingList]);
    }

    return (
        <section className="container">
            <h1>Меню</h1>
            <div className={styles.intro}>
                <img src={klosh} alt='' width="62px" height="42px" />
                <p className={styles.introText}>Составьте варианты меню на&nbsp;день из&nbsp;имеющихся продуктов</p>
            </div>
            <Button onClick={handleCreateMenu}>Составить меню</Button>
        </section>
    )
}

export default Main;