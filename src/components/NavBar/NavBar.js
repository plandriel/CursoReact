
import React from "react";
import logo from "../../assets/logo.png"
import "./Styles.css"
import CartWidget from "../CartWidget/CartWidget"
import ListaProductos from "../ListaProductos/ListaProductos";




const NavBar = () => {
    return (
        <header>
            <nav id="nav" className="nav1">
                <div className="contenedor-nav">
                    <div className="logo">
                        <img src={logo} alt="Logo PergaminoIT" />
                    </div>
                    <div className="enlaces" id="enlaces">
                            <ul>
                                <il><a href="/">Inicio</a></il>
                                <il><a href="/">Nosotros</a></il>
                                <il><a href="/">Productos</a></il>
                                <CartWidget />
                            </ul>  
                    </div>
                </div>
            </nav>
            

            <div class="textos">
            <h1 class="animate__fadeInRight">PergaminoIT</h1>
            <h2 class="animate__fadeInRight">Tienda Online</h2>
        </div>
        </header>
    )
}


export default NavBar;