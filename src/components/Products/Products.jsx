import React from 'react'
import "./styles.css"
import { Link } from 'react-router-dom';
import ItemListContainer from "../ItemListContainer/ItemListContainer";



const categories = [
    {
        id: 1,
        path: '/category/Servidores',
        name: 'Servidores',
    },
    {
        id: 2,
        path: '/category/Monitores',
        name: 'Monitores',
    },
    {
        id: 3,
        path: '/category/Almacenamiento',
        name: 'Almacenamiento',
    },
    {
        id: 4,
        path: '/category/Electronica',
        name: 'Electronica',
    },
];

export const Products = () => {



    return (
        <div className='pageProducts'>
            <div className='categoryProducts'>
                <div className="navCategory1">
                    <div className="contenedor-nav-products">
                        <div className="enlacesCategory" id="enlaces">
                            <ul>
                                {categories.map((category) => (
                                    <Link to={category.path} key={category.id}>{category.name}</Link>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ItemListContainer />
            </div>
        </div>
    )
} 
