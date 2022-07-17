import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'
import "./styles.css"
import shopcart from "../../assets/cartshop.png"
import { cartContext } from '../Context/CartContext';
import { useState, useContext } from 'react';

export const Card = ({product}) => {

    const [compraFin, setCompraFin] = useState(false)
    const { addProduct } = useContext(cartContext);

    const onAdd = (count) =>{
        // console.log("onAdd");
        setCompraFin(true)
        addProduct({...product, qty: count});
    }
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
                                    <div className="wcf-right"><Link to="/cart" href="/" className="buy-btn"><img src={shopcart} alt="Icono carrito" className="img-fluid" /></Link></div>
                                </div>
                                {/* ItemCount SE ENCARGA DE VALIDAR EL STOCK Y DE VER LA CANTIDAD DE PRODUCTOS QUE ENVIA LA CARD*/}
                                {/* <ItemCount stock={product.stock} initial={1} /> */}
                                
                                {/* TERNARIO PARA CAMBIAR DE BOTON A FINALIZAR */}
                                {compraFin
                                ? <Link to="/cart">
                                    <button className='btn btn-primary'>Finalizar compra</button>
                                </Link>
                                : <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />}
                                {/* LINK LLEVA A UN DETALLE MAS EXTENSO DEL PRODUCTO */}
                                <Link to={`/detail/${product.id}`}><div className="detail text-center">Ver detalles</div></Link>
                                <div className='text-sm text-center'>Stock disponible: {product.stock}</div>
                            </div>
                        </div>
                    </div>
        
    )
}
