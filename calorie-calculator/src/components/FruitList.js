import React, { useContext } from "react";
import { FruitContext } from "../contexts/FruitContext";
import FruitDetail from "./FruitDetail";
import CalCalculate from "./CalCalculate";

const FruitList = () => {
    const { fruits } = useContext(FruitContext);
    return fruits.length ? (
        <div className="fruit-list">
            <ul>
                {
                    fruits.map(fruit => {
                        return (<FruitDetail fruit={fruit} key={fruit.id} />)
                    })
                }
            </ul>
            <CalCalculate />
        </div>
    ) : (
        <div className="empty">You have no fruits to calculate !</div>
    )
    // return fruits.length ? (
    //     <div className="fruit-list">
    //         <ul>
    //             {fruits.map(fruit => {
    //                 return (<FruitDetail fruit={fruit} key={fruit.id} />)
    //             })}
    //         </ul>
    //     </div>
    // ) : (
    //     <div className="empty">
    //         <p>You have no fruit</p>
    //     </div>
    // );
}

export default FruitList;