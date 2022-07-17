import React, { useContext } from "react";
import "./Styles.css"
import shopcart from "../../assets/cartshop.png"
import { cartContext } from "../Context/CartContext";

function totalcarrito(){
}

const CartWidget = () => {

    const {qtyProducts} = useContext(cartContext)

    return (
        <ul className="cart-btn"> 
            <div className="d-flex" onClick={totalcarrito}>
                <img src={shopcart} alt="Icono carrito" className="cart-widget" /> <p>{qtyProducts}</p>
            </div>
        </ul>
    )
}

export default CartWidget;
