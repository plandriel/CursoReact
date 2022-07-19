import React, { useEffect, useState } from "react";
import "./styles.css"
import ItemList from '../ItemList/ItemList'
import loader from '../../assets/loader.gif'
import { useParams } from 'react-router-dom';
import { getProds } from '../../mocks/fakeApi';
import { db } from "../../firebase/firebase"
import {getDocs, collection, query, where} from "firebase/firestore"

const ItemListContainer = ({greeting}) => {
    
    const [productList, setProductList] = useState([])

    // ESTADO INICIAL DEL LOADER EN VERDADERO
    const [loading, setLoading] = useState(true)

    // PARAMETRO PARA ENCONTRAR LA CATEGORIA DE LOS PRODUCTOS Y PODER FILTRARLOS
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);

        //const productsCollection = collection(db, 'productos');
        //const q = query(productsCollection, where('category','==', categoryId))
        const q = categoryId
            ? query(collection(db, 'productos'), where('category', '==', categoryId))
            : collection(db, 'productos');

        getDocs(q)
            .then(result => {
                const lista = result.docs.map(product =>{
                    return {
                        id: product.id,
                        ...product.data()
                    }
                })
                setProductList(lista)
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
        }, [categoryId]);
    

        // EN CASO DE USAR UNA API EXTERNA, SE USA DE LA SIGUIENTE MANERA (FETCH):
        // const URL = categoryId
        //     ? `https://fakestoreapi.com/products/category/${categoryId}`
        //     : 'https://fakestoreapi.com/products';

        // //'https://fakestoreapi.com/products';

        // fetch(URL)
        //     .then((res) => res.json())
        //     .then((json) => setProductList(json))
        //     .finally(() => {
        //         setLoading(false);
        //     });

        // USO DEL THEN PARA OBTENER LA PROMESTA "GETPRODS" Y REALIZAR THEN, CATCH Y FINALLY EN CASO DE ERROR.
        
        // uso de API local
    //     getProds(categoryId)
    //         .then((res) => {
    //             setProductList(res);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    //         .finally(() => {
    //             setLoading(false);
    //         });
    // }, [categoryId]);

    // USEEFFECT SI SE USA FETCH PARA OBTENER LOS DATOS
    // useEffect(()=>{
    //     // fetch('https://fakestoreapi.com/products')
    //     //     .then(res=>res.json())
    //     //     .then(data=>setProductList(data))
    //     //     .catch(err=>console.log(err))
    //     //     .finally(()=>setLoading(false))
    //     getData
    //     .then((res) => setProductList(res))
    //     .catch((error)=> console.log(error))
    //     .finally(()=> setLoading(false))
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // },[])
    
    return (
        <div className="landing d-flex align-items-center justify-content-center">
            {/* SE REALIZA UN TERNARIO PARA COLOCAR UN LOADER Y QUE LA VISTA AL USUARIO SEA MAS AMIGABLE */}
            {loading ? <img src={loader} alt="Loader gif" /> : <ItemList productList={productList} /> }
        </div>
    )
}

export default ItemListContainer