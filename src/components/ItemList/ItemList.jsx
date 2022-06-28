import React from "react";
import "./Style.css"
import { Card } from "../Cards/Card"
// import ItemListContainer from "../ItemListContainer/ItemListContainer";

const ItemList = ({productList}) => {

    return (

        // <div>
        // {productList.map((product)=><Card key={product.id} product={product} />)}
        // </div>
        
        <div className='itemList'>
            {productList.map((product)=><Card key={product.id} product={product} />)}
        </div>
        
    )
}

export default ItemList;