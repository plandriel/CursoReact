import React from 'react';
import { useCard } from '../hooks/useCard'
import "./styles.css"
import shopcart from "../../assets/cartshop.png"

export const Card = ({product}) => {
    const { handleValue, amount } = useCard(product.stock)

    return (

                    <div className="col-md-3">
                        <div className="wsk-cp-product">
                            <div className="wsk-cp-img">
                                <img src={product.image} alt="Product" className="img-responsive" />
                            </div>
                            <div className="wsk-cp-text">
                                <div className="category">
                                    <span>{product.category}</span>
                                </div>
                                <div className="title-product">
                                    <h3>{product.title}</h3>
                                </div>
                                <div className="description-prod">
                                    <p>{product.description}</p>
                                </div>
                                <div className="card-footer">
                                    <div className="wcf-left"><span className="price">${product.price}</span></div>
                                    <div className="wcf-right"><a href="/" className="buy-btn"><img src={shopcart} alt="Icono carrito" className="img-fluid" /></a></div>
                                </div>
                                <div className='d-flex flex-row p-2 align-items-center display-10 justify-content-between text-white'>
                                    <button className="btn btn-danger p-2 fw-bold display-3" onClick={()=>handleValue(-1)}>-</button>
                                <div className='display-6 text-secondary'>{amount}</div>
                                    <button className="btn btn-success p-2 fw-bold display-3" onClick={()=>handleValue(+1)}>+</button>
                                </div>
                                <div className='text-sm text-center'>Stock disponible: {product.stock}</div>
                            </div>
                        </div>
                    </div>
        
    )
}
