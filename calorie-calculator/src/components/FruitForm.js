import { useState, useContext } from "react";
import { FruitContext } from "../contexts/FruitContext";

const FruitForm = () => {
    // const { addFruit } = useContext(FruitContext);
    const { dispatch } = useContext(FruitContext);
    const [name, setName] = useState("");
    const [cal, setCal] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmit(true)
        if (name && cal) {
            setIsEmpty(true)
            // addFruit(name, cal);
            dispatch({
                type: "ADD_FRUIT", fruit: {
                    name, cal
                }
            })
        }
        setName("")
        setCal("")
        setTimeout(() => {
            setIsSubmit(false)
            setIsEmpty(false)
        }, 1200)
    }
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Type your fruit ..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Calorie ..."
                    value={cal}
                    onChange={(e) => setCal(e.target.value)}
                />
                <button type="submit" className="add-btn">
                    {isSubmit && isEmpty ? "Submited" : "Add"}
                </button>
            </form>
        </div>
    );
}

export default FruitForm;