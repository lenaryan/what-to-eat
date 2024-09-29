import { MEAL_NAME } from "../../shared/constants"
import { capitalizeFirstLetter } from "../../shared/functions"
import { DayMenu } from "../../shared/types"
import styles from './Menu.module.css'

export const Menu = ({ menu }: { menu: DayMenu }) => {
  return (
    <div className={styles.mealWrap}>
      {Object.entries(menu).map(([key, value]) => (
        <>
          <h2 className={styles.meal}>{MEAL_NAME[key].title}</h2>
          <div className={styles.mealItem}><div className={styles.icon}>{MEAL_NAME[key].icon()}</div>{capitalizeFirstLetter(value)}</div>
        </>
      ))}
    </div>
  )
}