import React, { useContext } from 'react';
import { cartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { products, deleteProduct, calcularTotal } = useContext(cartContext);
    // const [compraFin, setCompraFin] = useState(false)

    // const onAdd = (count) =>{
    //     console.log("onAdd");
    //     setCompraFin(true)
    //     addProduct({...products, qty: count});
    // }

    if (products.length === 0) {
        return (
            <div className="carritoVacio d-flex flex-column flex-wrap justify-content-center align-items-center">
                <h2 className='p-2'>No hay nada por aca </h2>
                <h4 className='p-2'> ve al Home para sumar productos a tu carrito!</h4>
                <Link to='/'><button className='btn btn-primary'>HOME</button></Link>
            </div>
    )}

    return (
        <>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
        <div className="container" >
            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="row">
                    <div className="col-md-9">
                        <div className="ibox">
                            <div className="ibox-title">
                                {/* <span className="pull-right">(<strong>{products.count}</strong>) Productos</span> */}
                                <h5>Productos en el carrito</h5>
                            </div>
                            {products.map(product => 
                                                <div className="ibox-content" key={product.id}>
                                                    <div className="table-responsive">
                                                        <table className="table shoping-cart-table">
                                                            <tbody>
                                                            <tr>
                                                                <td width="90">
                                                                    <div className="cart-product-imitation">
                                                                    </div>
                                                                </td>
                                                                <td className="desc">
                                                                    <h3>
                                                                    <Link to="/" className="text-navy">
                                                                        {product.title}
                                                                    </Link>
                                                                    </h3>
                                                                    <p className="small">
                                                                    {product.description}
                                                                    </p>
                                                                    <dl className="small m-b-none">
                                                                        <dt>{product.description}</dt>
                                                                        <dd>{product.description}</dd>
                                                                    </dl>
                                
                                                                    <div className="m-t-sm">
                                                                        <button className="text-muted" onClick={()=>deleteProduct(product.id)}><i className="fa fa-trash" ></i> Borrar del carrito</button>
                                                                    </div>
                                                                </td>
                                
                                                                <td>
                                                                </td>
                                                                <td >
                                                                <h5>Cantidad: {product.qty}</h5>
{/*                                                                 
                                                                    <input type="text" className="form-control" placeholder={product.qty}></input> */}
                                                                </td>
                                                                <td>
                                                                    <h4>
                                                                        {/* ${product.price} */}
                                                                    </h4>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                
                            )}
                            <div className="ibox-content">
                                <button className="btn btn-primary pull-right"><i className="fa fa fa-shopping-cart"></i> Finalizar compra</button>
                                <Link to='/'><p className="btn btn-white"><i className="fa fa-arrow-left"></i> Continuar comprando</p></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="ibox">
                            <div className="ibox-title">
                                <h5>Total en el carrito</h5>
                            </div>
                            <div className="ibox-content">
                                <span>
                                    Total
                                </span>
                                <h2 className="font-bold">
                                $ {calcularTotal()}
                                </h2>
            
                                <hr />
                                <span className="text-muted small">
                                    *Solo envios en Argentina
                                </span>
                                <div className="m-t-sm">
                                    <div className="btn-group">
                                    <Link to="/cart" className="btn btn-primary btn-sm"><i className="fa fa-shopping-cart"></i> Pagar</Link>
                                    <Link to="/" className="btn btn-white btn-sm"> Cancelar</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

            
                        <div className="ibox">
                            <div className="ibox-title">
                                <h5>Soporte</h5>
                            </div>
                            <div className="ibox-content text-center">
                                <h3><i className="fa fa-phone"></i> +43 100 783 001</h3>
                                <span className="small">
                                    Estamos las 24hs disponibles
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    
        )
};

export default Cart