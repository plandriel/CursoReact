import React from "react";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Styles.css"
import shopcart from "../../assets/cartshop.png"

function totalcarrito(){
    console.log("boton carrito");
}

const CartWidget = () => {
    return (
        <il className="cart-btn"> 
            <button onClick={totalcarrito}>
                <img src={shopcart} alt="Icono carrito" className="cart-widget" />
                <p>4</p>
            </button>
            
            
        </il>
    )
}

export default CartWidget;
