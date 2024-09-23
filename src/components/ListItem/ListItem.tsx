import { FC } from 'react';
import { IngredientsType } from '../../shared/types';
import styles from './ListItem.module.css';
import { capitalizeFirstLetter } from '../../shared/functions';
import { TrashCan } from './TrashCan';

type TListItemProps = {
  product: IngredientsType,
  onClick: () => void
}

export const ListItem: FC<TListItemProps> = ({ product, onClick }) => {
  return (
    <li className={styles.listItem}>
      <span>{capitalizeFirstLetter(product.title)}</span>
      {/* TODO: bin icon */}
      <button className={styles.listItemBtn} type="button" onClick={onClick}>
        <TrashCan />
      </button>
    </li>
  )
}