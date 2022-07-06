import { useState } from 'react'
import "./styles.css"

const ItemCount = ({ initial, stock }) => {
    const [count, setCount] = useState(initial);

    const add = () => {
        stock !== count && setCount(count + 1);
    };

    const substract = () => {
        initial !== count && setCount(count - 1);
    };
    return (
        
        <div className="count">
            <div className="buttons">
                <button onClick={substract}>-</button>
                <p>{count}</p>
                <button onClick={add}>+</button>
            </div>
        </div>
    );
};

export default ItemCount;