import { FC } from "react";
import styles from './Button.module.css';
import cn from 'classnames';

type TButtonProps = {
  size?: 's' | 'm',
  variant?: 'filled' | 'outline',
  children: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string;
}

export const Button: FC<TButtonProps> = ({ size, variant, children, onClick, className }: TButtonProps) => {
 return (
  <button
    className={cn([size === 's' ? styles.small : styles.medium, variant === 'outline' ? styles.outline : styles.filled, className])}
    onClick={onClick}
  >
    {children}
  </button>
 )
}