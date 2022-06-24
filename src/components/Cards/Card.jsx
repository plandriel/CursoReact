import React from 'react';
import imagenProducto from '../../assets/servidorHP.png'
import { useCard } from '../hooks/useCard'
import "./styles.css"

export const Card = ({stock,nombreProducto}) => {
    const { handleValue, amount } = useCard(stock)

    return (
        <section className="card text-white bg-dark mb-3">
            <h3 className="card-header text-center">{nombreProducto}</h3>
            <img className='img-fluid' src={imagenProducto} alt="Imagen Producto" />
            <div className='card-body'>
                <h5 className="card-body text-center">
                    {nombreProducto}
                </h5>
                <p className="card-text">
                    Descripción de Producto
                </p>
            </div>
            <div className='d-flex flex-row p-3 align-items-center display-10 justify-content-between text-white'>
                <button className="btn btn-danger p-5 fw-bold display-3" onClick={()=>handleValue(-1)}>-</button>
                <div className='display-6'>{amount}</div>
                <button className="btn btn-success p-5 fw-bold display-3" onClick={()=>handleValue(+1)}>+</button>
            </div>
            <div className='text-sm text-center'>Stock disponible: {stock}</div>
            <button className='btn btn-success p-2 m-2'>Agregar al carrito</button>
        </section>
    )
}
