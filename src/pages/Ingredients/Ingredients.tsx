import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import cn from 'classnames';
import styles from './Ingredients.module.css';
import { fetchIngredients, setIngredientsToBase } from "../../shared/api";
import { IngredientsType } from "../../shared/types";

const Ingredients = () => {
    const [ingredients, setIngredients] = useState<IngredientsType[]>([]);
    const [isRepeating, setIsRepeating] = useState(false);

    useEffect(() => {
        fetchIngredients(setIngredients);
        setIngredients(ingredients);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const product = (e.currentTarget.add.value).toLowerCase();
        if (!product) return;

        // TODO: добавлять продукт сразу в базу
        const isRepeatedConst = ingredients.includes(product);
        if (isRepeatedConst) {
            setIsRepeating(isRepeatedConst);
        } else {
            if (isRepeatedConst !== isRepeating) setIsRepeating(isRepeatedConst);
            e.currentTarget.add.value = "";
            setIngredients([...ingredients, product]);
        }
    }

    const handleDelete = (product: IngredientsType) => {
        // TODO: сразу удалять из базы
        const newIngr = ingredients.filter(item => item.title !== product.title);
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
                        <li className="list__item" key={product.id}>
                            <div className={styles.ingredient}>
                                <span>{product.title}</span>
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
            {/* TODO: переименовать кнопку? */}
            <Link to='/' className="button" onClick={handleSaveIngredients}>Сохранить</Link>
        </section>
    )
}

export default Ingredients;