import { Link } from "react-router-dom";
import { urls } from "../constants";

const Ingredients = () => {
    return (
        <>
            Ingredients
            <Link to={urls.main} className="button">Сохранить</Link>
        </>
    )
}

export default Ingredients;