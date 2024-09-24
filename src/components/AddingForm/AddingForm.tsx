import { useState } from "react";
import { isRepeatingItem } from "../../shared/functions";
import styles from './AddingForm.module.css';
import { Button } from "../Button";
import { addIngredientToBase } from "../../shared/api";
import { addIngredientToList } from "../../redux/ingredientsSlice";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";

export const AddingForm = () => {
  const [isRepeating, setIsRepeating] = useState(false);
  const { ingredients } = useSelector((state: RootState) => state.ingredientsSlice);
  const dispatch = useDispatch<AppDispatch>()
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const product = e.currentTarget.add.value;
    if (!product) return;

    const isRepeatedConst = isRepeatingItem(ingredients, product);
    if (isRepeatedConst) {
        setIsRepeating(isRepeatedConst);
    } else {
        if (isRepeatedConst !== isRepeating) setIsRepeating(isRepeatedConst);
        e.currentTarget.add.value = "";
        dispatch(addIngredientToList({ id: ingredients.length, title: product}));
        addIngredientToBase(product);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="add" className={styles.formLabel}>Добавить в список:</label>
      <input id="add" name="add" type="text" className={styles.formInput} placeholder="Что добавить?" />
      <Button size="s" className={styles.formBtn}>Добавить</Button>
      {isRepeating && <p className={styles.isRepeating}>продукт уже есть в списке</p>}
    </form>
  )
}