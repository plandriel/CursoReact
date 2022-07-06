import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ product }) => {
    return (
        <div className="detail">
            <div className="card align-items-center w-50 mb-5 producto">
            <img src={product.image} alt={product.title} width="400" />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <ItemCount stock={product.stock} initial={1} />
                    <a href="/" className="btn btn-primary">Agregar al carrito</a>
                </div>
            </div>
        </div>


    );
};

export default ItemDetail;