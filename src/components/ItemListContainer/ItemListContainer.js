import React, { useEffect, useState } from "react";
import "./styles.css"
import ItemList from '../ItemList/ItemList'
import { getData } from '../../mocks/fakeApi'
import loader from '../../assets/loader.gif'

// import { Card } from '../Cards/Card' //CARD DE CADA PRODUCTO


const ItemListContainer = ({greeting}) => {

    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getData
        .then((res) => setProductList(res), console.log("test"))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return (
        <div className="landing">
            {loading ? <img  src={loader} alt="Loader gif" /> : <ItemList productList={productList} /> }
            {/* <ItemList productList={productList} /> */}
        </div>
    )
}

export default ItemListContainer;