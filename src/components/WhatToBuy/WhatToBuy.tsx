import styles from './WhatToBuy.module.css';
import { ArrowIcon } from './ArrowIcon';
import { useState } from 'react';
import { capitalizeFirstLetter } from '../../shared/functions';

export const WhatToBuy = ({ list }: { list: string[] }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <details className={styles.details}>
      <summary className={styles.legend} onClick={() => setIsDetailsOpen(prev => !prev)}>
        <ArrowIcon className={isDetailsOpen ? styles.arrowOpen : styles.arrowClose} />
        Недостающие продукты
      </summary>
      <ul className={styles.list}>
        {
          list?.map((item: string) => <li className={styles.item}>{capitalizeFirstLetter(item)}</li>)
        }
      </ul>
    </details>
  )
}