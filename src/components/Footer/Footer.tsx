import { MenuIcon } from './svgs/MenuIcon';
import { FridgeIcon } from './svgs/FridgeIcon';
import { ListIcon } from './svgs/ListIcon';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../shared/constants';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <nav className={styles.footer}>
      <Link to={ROUTES.menu} className={styles.footerLink}><MenuIcon />Меню</Link>
      <Link to={ROUTES.ingredients} className={styles.footerLink}><FridgeIcon />Холодильник</Link>
      <Link to={ROUTES.shoppingList} className={styles.footerLink}><ListIcon />Список</Link>
    </nav>
  )
}