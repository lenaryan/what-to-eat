import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import cn from 'classnames';
import styles from './Ingredients.module.css';
import { deleteIngredientFromBase, fetchIngredients, setIngredientToBase } from "../../shared/api";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { addIngredientToList, removeIngredientFromList } from "../../redux/ingredientsSlice";
import { isRepeatingItem } from "../../shared/functions";

const Ingredients = () => {
    const { ingredients } = useSelector((state: RootState) => state.ingredientsSlice);
    const dispatch = useDispatch<AppDispatch>()
    const [isRepeating, setIsRepeating] = useState(false);

    useEffect(() => {
        dispatch(fetchIngredients());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const product = (e.currentTarget.add.value).toLowerCase();
        if (!product) return;

        const isRepeatedConst = isRepeatingItem(ingredients, product);
        if (isRepeatedConst) {
            setIsRepeating(isRepeatedConst);
        } else {
            if (isRepeatedConst !== isRepeating) setIsRepeating(isRepeatedConst);
            e.currentTarget.add.value = "";
            dispatch(addIngredientToList(product));
            setIngredientToBase(product);
        }
    }

    const handleDelete = (product: string) => {
        dispatch(removeIngredientFromList(product));
        deleteIngredientFromBase(product);
    }

    return (
        <section className="container">
            <h1>Что в холодильнике?</h1>
            <ul className={cn(`list ${styles.listStyle}`)}>
                {
                    ingredients.map((product, index) => (
                        <li className="list__item" key={index}>
                            <div className={styles.ingredient}>
                                <span>{product}</span>
                                <button className={styles.ingredientBtn} type="button" onClick={() => handleDelete(product)}>&times;</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <form className={styles.form} onSubmit={handleSubmit}>
                {/* TODO: datalist with chosing from list of constants? */}
                <input name="add" type="text" className={styles.formInput} aria-label="что ещё?" placeholder="что ещё?" />
                <button className={styles.formBtn} type="submit" aria-label="Добавить">&#10003;</button>
                {isRepeating && <p className={styles.isRepeating}>продукт уже есть в списке</p>}
            </form>
            <Link to='/' className="button">Назад</Link>
        </section>
    )
}

export default Ingredients;