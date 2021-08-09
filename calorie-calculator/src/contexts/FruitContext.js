import React, { createContext, useEffect, useReducer } from "react";
import { nanoid } from "nanoid";
import { fruitReducer } from "../reducers/fruitReducer";

export const FruitContext = createContext();

// Always name component with uppercase
const FruitContextProvider = (props) => {
    // const [fruits, setFruits] = useState([
    //     { name: "Apple", cal: 52, id: nanoid() },
    //     { name: "Banana", cal: 89, id: nanoid() }
    // ]);

    // const addFruit = (name, cal) => {
    //     // setFruits([...fruits, {name: fruit, cal: cal}])
    //     // note: if key & val(parameter) the same name we can just write 1 like beblow
    //     setFruits([...fruits, { name, cal, id: nanoid() }])
    // };

    // const removeFruit = (id) => {
    //     setFruits(fruits.filter(fruit => fruit.id !== id));
    // };

    const [fruits, dispatch] = useReducer(fruitReducer, [
        { name: "Apple", cal: 52, id: nanoid() },
        { name: "Banana", cal: 89, id: nanoid() }
    ], () => {
        const localData = localStorage.getItem("fruits");
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem("fruits", JSON.stringify(fruits))
    }, [fruits]);

    return (
        // <FruitContext.Provider value={{ fruits, addFruit, removeFruit }}>
        <FruitContext.Provider value={{ fruits, dispatch }}>
            {props.children}
        </FruitContext.Provider>
    );
}

export default FruitContextProvider;