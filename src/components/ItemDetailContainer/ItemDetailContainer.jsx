import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProd } from '../../mocks/fakeApi'
import ItemDetail from '../ItemDetail/ItemDetail';
import loader from '../../assets/loader.gif'
import { db } from "../../firebase/firebase"
import { doc, getDoc, collection } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);

        const productsCollection = collection(db, 'productos');
        const refDoc = doc(productsCollection,id)
        
        getDoc(refDoc)
            .then(result => {
                setProduct({
                    id: result.id,
                    ...result.data(),
                })
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });

        // getProd(id)
        //     .then((res) => {
        //         setProduct(res);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })
        //     .finally(() => {
        //         setLoading(false);
        //     }); 
    }, [id]
    );

    return (
        <div className='d-flex align-items-center justify-content-center'>
            {loading ? (
                <img  src={loader} alt="Loader gif" />
            ) : (
                <>
                    <ItemDetail product={product} />
                </>
            )}
        </div>
    );
};

export default ItemDetailContainer;
