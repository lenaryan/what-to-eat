import { Link } from "react-router-dom";
import { urls } from "../../shared/constants";
import { useEffect, useState } from "react";
import cn from 'classnames';
import styles from './Ingredients.module.css';
import { getIngredientsFromBase, setIngredientsToBase } from "../../shared/api";

const Ingredients = () => {
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [isRepeating, setIsRepeating] = useState(false);

    useEffect(() => {
        setIngredients(getIngredientsFromBase);
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const product = (e.currentTarget.add.value).toLowerCase();
        if (!product) return;

        const isRepeatedConst = ingredients.includes(product);
        if (isRepeatedConst) {
            setIsRepeating(isRepeatedConst);
        } else {
            if (isRepeatedConst !== isRepeating) setIsRepeating(isRepeatedConst);
            e.currentTarget.add.value = "";
            setIngredients([...ingredients, product]);
        }
    }

    const handleDelete = (product: string) => {
        const newIngr = ingredients.filter(item => item !== product);
        setIngredients(newIngr);
    }

    const handleSaveIngredients = () => {
        setIngredientsToBase(ingredients);
    }

    // TODO: undo button?
    return (
        <section className="container">
            <h1>Что в холодильнике?</h1>
            <ul className={cn(`list ${styles.listStyle}`)}>
                {
                    ingredients.map(product => (
                        <li className="list__item" key={product}>
                            <div className={styles.ingredient}>
                                <span>{product}</span>
                                <button className={styles.ingredientBtn} type="button" onClick={() => handleDelete(product)}>&times;</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input name="add" type="text" className={styles.formInput} aria-label="что ещё?" placeholder="что ещё?" />
                <button className={styles.formBtn} type="submit" aria-label="Добавить">&#10003;</button>
                {isRepeating && <p className={styles.isRepeating}>продукт уже есть в списке</p>}
            </form>
            <Link to={urls.main} className="button" onClick={handleSaveIngredients}>Сохранить</Link>
        </section>
    )
}

export default Ingredients;