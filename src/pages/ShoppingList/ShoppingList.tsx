import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { fetchShoppingList } from "../../shared/api";

export const ShoppingList = () => {
  const { shoppingList } = useSelector((state: RootState) => state.shoppingListSlice);
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
      dispatch(fetchShoppingList());
  }, []);

  return (
    <section className="container">
      <h1>Список покупок</h1>
      <ul>
        {
          shoppingList?.map((product, index) => (
            <li className="list__item" key={product.title + index}>{product.title}</li>
          ))
        }
      </ul>
    </section>
  )
}