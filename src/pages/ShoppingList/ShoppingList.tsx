import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { fetchShoppingList } from "../../shared/api";
import { ListItem } from "../../components/ListItem";
import { removeIngredientFromList } from "../../redux/ingredientsSlice";
import { AddingForm } from "../../components/AddingForm";
import styles from './ShoppingList.module.css';

export const ShoppingList = () => {
  const { shoppingList } = useSelector((state: RootState) => state.shoppingListSlice);
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
      dispatch(fetchShoppingList());
  }, []);

  const handleDelete = (product: string) => {
    dispatch(removeIngredientFromList(product));
    // deleteIngredientFromBase(product);
  }

  return (
    <section className="container">
      <h1>Список покупок</h1>
      <ul className={styles.listStyle}>
        {
          shoppingList?.map(product => (
            <ListItem key={product.id} product={product} onClick={() => handleDelete(product.title)} />
          ))
        }
      </ul>
      <AddingForm />
    </section>
  )
}