import { useContext } from "react";
import { FruitContext } from "../contexts/FruitContext";

const CalCalculate = () => {
    const { fruits } = useContext(FruitContext);
    return (
        <div className="total">
            <div>Total Calorie:</div>
            <div className="calc">
                {
                    fruits.reduce((sum, val) => {
                        return sum += parseInt(val.cal);
                    }, 0)
                }
                <small> cal</small>
            </div>
        </div>
    );
}

export default CalCalculate;