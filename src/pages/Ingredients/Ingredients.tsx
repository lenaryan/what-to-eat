import { useEffect } from "react";
import styles from './Ingredients.module.css';
import { fetchIngredients } from "../../shared/api";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { removeIngredientFromList } from "../../redux/ingredientsSlice";
import { ListItem } from "../../components/ListItem";
import { AddingForm } from "../../components/AddingForm";

const Ingredients = () => {
    const { ingredients } = useSelector((state: RootState) => state.ingredientsSlice);
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchIngredients());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // TODO: move to shared?
    const handleDelete = (product: string) => {
        dispatch(removeIngredientFromList(product));
        // TODO: do an alert asking for delete
        // deleteIngredientFromBase(product);
    }

    return (
        <section className="container">
            <h1>Холодильник</h1>
            <ul className={styles.listStyle}>
                {
                    ingredients?.map(product => (
                        <ListItem key={product.id} product={product} onClick={() => handleDelete(product.title)} />
                    ))
                }
            </ul>
            <AddingForm />
        </section>
    )
}

export default Ingredients;