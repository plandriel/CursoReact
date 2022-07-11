import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'
import "./styles.css"
import shopcart from "../../assets/cartshop.png"

export const Card = ({product}) => {

    

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
                                    <Link to="/cart"><div className="wcf-right"><a href="/" className="buy-btn"><img src={shopcart} alt="Icono carrito" className="img-fluid" /></a></div></Link>
                                </div>
                                {/* ItemCount SE ENCARGA DE VALIDAR EL STOCK Y DE VER LA CANTIDAD DE PRODUCTOS QUE ENVIA LA CARD*/}
                                <ItemCount stock={product.stock} initial={1} />
                                {/* LINK LLEVA A UN DETALLE MAS EXTENSO DEL PRODUCTO */}
                                <Link to={`/detail/${product.id}`}><div className="detail text-center">Ver detalles</div></Link>
                                <div className='text-sm text-center'>Stock disponible: {product.stock}</div>
                            </div>
                        </div>
                    </div>
        
    )
}
