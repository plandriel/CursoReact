
import React from "react";
import logo from "../../assets/logo.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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
                                {/* <il><a href="#">Clientes</a></il> */}
                                {/* <il><a href="#">Contacto</a></il> */}
                                <CartWidget />
                            </ul>  
                    </div>
                    {/* <div class="icono" id="open">
                        <span>&#9776;</span>
                    </div> */}
                </div>
            </nav>
            
            {/* <div class="carrito"> <ShoppingCartIcon color="success" sx={{ fontSize: 50 }} />
            </div> */}
            <div class="textos">
            <h1 class="animate__fadeInRight">PergaminoIT</h1>
            <h2 class="animate__fadeInRight">Tienda Online</h2>
        </div>
        </header>
    )
}

const ItemListContainer = () => {
    <>
        <ListaProductos />
    </>
    
}

export default NavBar;