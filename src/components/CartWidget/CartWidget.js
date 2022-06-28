import React from "react";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Styles.css"
import shopcart from "../../assets/cartshop.png"




function totalcarrito(){
}

const CartWidget = () => {
    return (
        <il className="cart-btn"> 
            <div onClick={totalcarrito}>
                <img src={shopcart} alt="Icono carrito" className="cart-widget" /> <span>4</span>
            </div>
            {/* <p>4</p> */}
            
            
        </il>
    )
}

export default CartWidget;
