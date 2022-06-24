import React, { useState } from "react";
import "./styles.css"

import { Card } from '../Cards/Card'


const ItemListContainer = ({greeting}) => {

    const [contador, setContador] = useState(0);

    const sumarCarrito = () => {

        setContador(contador + 1)
    }




    return (
        <div className="landing">
            <div className='row justify-content-between m-5'>
                <div className="col-3">
                    <Card stock={10} nombreProducto='Servidor 1'/>
                </div>
                <div className="col-3">
                    <Card stock={5} nombreProducto='Servidor 2' />
                </div>
                <div className="col-3">
                    <Card stock={6} nombreProducto='Servidor 3' />
                </div>
            </div>
            </div>
    )
}

export default ItemListContainer;