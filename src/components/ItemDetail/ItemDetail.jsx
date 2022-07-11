import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../Context/CartContext';

const ItemDetail = ({ product }) => {

    const [compraFin, setCompraFin] = useState(false)
    const { addProduct } = useContext(cartContext);

    const onAdd = (count) =>{
        // console.log("onAdd");
        setCompraFin(true)
        addProduct({...product, qty: count});
    }
    return (
        <div className="detail">
            <div className="card align-items-center w-50 mb-5 producto">
            <img src={product.image} alt={product.title} width="400" />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    {compraFin
                        ? <Link to="/cart">
                            <button className='btn btn-primary'>Finalizar compra</button>
                        </Link>
                        : <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />}
                    {/* <ItemCount stock={product.stock} initial={1} /> 
                    <button className="btn btn-primary">Agregar cantidad</button>*/}
                </div>
            </div>
        </div>


    );
};

export default ItemDetail;