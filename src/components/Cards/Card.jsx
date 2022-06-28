import React from 'react';
// import imagenProducto from '../../assets/servidorHP.png'
import { useCard } from '../hooks/useCard'
import "./styles.css"

export const Card = ({product}) => {
    const { handleValue, amount } = useCard(product.stock)

    return (
        <section className="card text-white bg-dark mb-3 m-1">
            <h3 className="card-header text-center">{product.name}</h3>
            <img className='img-fluid' src={product.img} alt="Imagen Producto" />
            <div className='card-body'>
                <h5 className="card-body text-center">
                    {product.name}
                </h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item bg-secondary rounded-top text-white">· {product.description}</li>
                    <li class="list-group-item bg-secondary text-white">· Caracteristica 2</li>
                    <li class="list-group-item bg-secondary rounded-bottom text-white">· Caracteristica 3</li>
                </ul>
                <p className="card-text">
                    Descripción de Producto
                </p>
            </div>
            <div className='d-flex flex-row p-3 align-items-center display-10 justify-content-between text-white'>
                <button className="btn btn-danger p-5 fw-bold display-3" onClick={()=>handleValue(-1)}>-</button>
                <div className='display-6'>{amount}</div>
                <button className="btn btn-success p-5 fw-bold display-3" onClick={()=>handleValue(+1)}>+</button>
            </div>
            <div className='text-sm text-center'>Stock disponible: {product.stock}</div>
            <button className='btn btn-success p-2 m-2'>Agregar al carrito</button>
        </section>
    )
}
