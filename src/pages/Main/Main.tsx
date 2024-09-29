import styles from './Main.module.css';
import { useEffect, useState } from 'react';
import { DayMenu } from '../../shared/types';
import { addShoppingItemToBase, fetchIngredients, getMenuFromBase, setMenuToBase } from '../../shared/api';
import { generateMeal } from '../../shared/functions';
import { Button } from '../../components/Button';
import klosh from '../../assets/images/klosh.png';
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { Menu } from '../../components/Menu';
import { WhatToBuy } from '../../components/WhatToBuy';

const Main = () => {
    const [menu, setMenu] = useState<DayMenu>({});
    const [whatToBuy, setWhatToBuy] = useState<string[]>([]);
    const { ingredients } = useSelector((state: RootState) => state.ingredientsSlice);
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {        
        if (!ingredients.length) {
            dispatch(fetchIngredients());
        }
    }, []);

    // TODO: think how to keep and save menu – what day, what slot, etc.
    const handleCreateMenu = () => {
        console.log('ingredients in handleCreateMenu', ingredients);
        
        if (!ingredients) return;

        const { menu, whatToBuy: whatToBuyList } = generateMeal(ingredients);

        console.log('menu', menu);
        console.log('what to buy', whatToBuyList);
        
        // setMenu([menu]);
        // setMenuToBase([menu])
        setMenu(menu);
        setWhatToBuy(whatToBuyList);
        // const newShoppingList = Array.from(new Set([...shoppingList, ...whatToBuy]))
        // setShoppingList([...newShoppingList]);
        // setShoppingListToBase([...newShoppingList]);

        // whatToBuy.forEach((item) => {
        //     addShoppingItemToBase(item);
        // })
    }

    return (
        <section className="container">
            <h1>Меню</h1>
            {
                Object.entries(menu).length ? (
                    <div className={styles.menuWrap}>
                        <Menu menu={menu} />
                        {
                            (whatToBuy.length) && (
                                <WhatToBuy list={whatToBuy} />
                            )
                        }
                    </div>
                ) : (
                    <>
                        <div className={styles.intro}>
                            <img src={klosh} alt='' width="62px" height="42px" />
                            <p className={styles.introText}>Составьте варианты меню на&nbsp;день из&nbsp;имеющихся продуктов</p>
                        </div>
                        <Button onClick={handleCreateMenu}>Составить меню</Button>
                    </>
                )
            }
        </section>
    )
}

export default Main;