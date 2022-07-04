import React from "react";
import "./Style.css"
import { Card } from "../Cards/Card"
// import ItemListContainer from "../ItemListContainer/ItemListContainer";

const ItemList = ({productList}) => {

    return (

        // <div>
        // {productList.map((product)=><Card key={product.id} product={product} />)}
        // </div>
        
        <div className="container">
                <div className="row">
                    {productList.map((product)=><Card key={product.id} product={product} />)}
                </div>
        </div>
        
    )
}

export default ItemList;