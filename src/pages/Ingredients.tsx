import { Link } from "react-router-dom";
import { urls } from "../constants";
import { useState } from "react";

const Ingredients = () => {
    const ingredientsList = [
        'огурцы',
        'сметана',
        'растительное масло',
        'кетчуп',
        'молоко',
        'листовой салат',
        'замороженная смесь',
        'мороженое'
    ]

    const [ingredients, setIngredients] = useState(ingredientsList);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submit', e.currentTarget.add.value);
    }

    const handleDelete = (product: string) => {
        console.log('product', product);
        
        const newIngr = ingredients.filter(item => item !== product);
        console.log('new', newIngr);
        
        setIngredients(newIngr);
        console.log('ingr', ingredients);
        
    }

    // TODO: undo button?
    return (
        <section className="container relativeContainer">
            <h1>Что в холодильнике?</h1>
            <ul className="list">
                {
                    ingredients.map(product => (
                        <li className="list__item" key={product}>
                            <span>{product}</span>
                            <button type="button" onClick={() => handleDelete(product)}>&times;</button>
                        </li>
                    ))
                }
            </ul>
            <form onSubmit={handleSubmit}>
                <input name="add" type="text" aria-label="что ещё?" placeholder="что ещё?" />
                <button type="submit" aria-label="Добавить"></button>
            </form>
            <Link to={urls.main} className="button fixedBtn">Сохранить</Link>
        </section>
    )
}

export default Ingredients;