import { useState } from 'react'
import "./styles.css"

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial);

    const add = () => {
        stock !== count && setCount(count + 1);
    };

    const substract = () => {
        initial !== count && setCount(count - 1);
    };

    const handlerClickAddtoCart = () => {
        onAdd(count);
    }
    return (
        
        <div className="count">
            <div className="buttons">
                <button onClick={substract}>-</button>
                <p>{count}</p>
                <button onClick={add}>+</button>
            </div>
            <button className='btn btn-primary' onClick={()=> handlerClickAddtoCart()}>Agregar</button>
        </div>
    );
};

export default ItemCount;