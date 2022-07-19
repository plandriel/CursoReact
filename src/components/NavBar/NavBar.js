
import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png"
import "./Styles.css"
import CartWidget from "../CartWidget/CartWidget"
import { Products } from "../Products/Products";
//import loader from '../../assets/loader.gif'



const categories = [
    {
        id: 1,
        path: '/',
        name: 'Home',
    },
    {
        id: 2,
        path: '/category/Servidores',
        name: 'Servidores',
    },
    {
        id: 3,
        path: '/category/Monitores',
        name: 'Monitores',
    },
    {
        id: 4,
        path: '/category/Almacenamiento',
        name: 'Almacenamiento',
    },
];


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
                        {categories.map((category) => (
                            <Link to={category.path} key={category.id}>{category.name}</Link>
                        ))}
                        {/* <Link to="/productos">Productos</Link> */}
                        <Link to="/cart"><CartWidget /></Link>
                    </ul>
                    </div>
                </div>
            </nav>
            <div className="textos">
            <h1 className="animate__fadeInRight">PergaminoIT</h1>
            <h2 className="animate__fadeInRight">Tienda Online</h2>
        </div>
        </header>
    )
}


export default NavBar;