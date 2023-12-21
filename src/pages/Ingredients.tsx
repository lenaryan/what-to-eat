import { Link } from "react-router-dom";
import { urls } from "../constants";

const Ingredients = () => {
    return (
        <section className="container relativeContainer">
            <h1>Что в холодильнике?</h1>
            <Link to={urls.main} className="button fixedBtn">Сохранить</Link>
        </section>
    )
}

export default Ingredients;