import { useContext } from "react";
import { FruitContext } from "../contexts/FruitContext";

const FruitDetail = ({ fruit }) => {
    const { dispatch } = useContext(FruitContext)
    return (
        <li onClick={() => dispatch({ type: "REMOVE_FRUIT", id: fruit.id })}>
            <div className="fruit">{fruit.name}</div>
            <div className="fruit-cal">{fruit.cal} <small>cal</small></div>
        </li>
    );
}

export default FruitDetail;