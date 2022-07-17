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
        <div class="container" >
            <div class="wrapper wrapper-content animated fadeInRight">
                <div class="row">
                    <div class="col-md-9">
                        <div class="ibox">
                            <div class="ibox-title">
                                <span class="pull-right">(<strong>{products.qty}</strong>) Productos</span>
                                <h5>Productos en el carrito</h5>
                            </div>
                            {products.map(product => 
                                                <div class="ibox-content" key={product.id}>
                                                    <div class="table-responsive">
                                                        <table class="table shoping-cart-table">
                                                            <tbody>
                                                            <tr>
                                                                <td width="90">
                                                                    <div class="cart-product-imitation">
                                                                    </div>
                                                                </td>
                                                                <td class="desc">
                                                                    <h3>
                                                                    <Link to="/" class="text-navy">
                                                                        {product.title}
                                                                    </Link>
                                                                    </h3>
                                                                    <p class="small">
                                                                    {product.description}
                                                                    </p>
                                                                    <dl class="small m-b-none">
                                                                        <dt>{product.description}</dt>
                                                                        <dd>{product.description}</dd>
                                                                    </dl>
                                
                                                                    <div class="m-t-sm">
                                                                        <button class="text-muted" onClick={()=>deleteProduct(product.id)}><i class="fa fa-trash" ></i> Borrar del carrito</button>
                                                                    </div>
                                                                </td>
                                
                                                                <td>
                                                                </td>
                                                                <td >
                                                                <h5>Cantidad: {product.qty}</h5>
{/*                                                                 
                                                                    <input type="text" class="form-control" placeholder={product.qty}></input> */}
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
                            <div class="ibox-content">
                                <button class="btn btn-primary pull-right"><i class="fa fa fa-shopping-cart"></i> Finalizar compra</button>
                                <Link to='/'><p class="btn btn-white"><i class="fa fa-arrow-left"></i> Continuar comprando</p></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="ibox">
                            <div class="ibox-title">
                                <h5>Total en el carrito</h5>
                            </div>
                            <div class="ibox-content">
                                <span>
                                    Total
                                </span>
                                <h2 class="font-bold">
                                $ {calcularTotal()}
                                </h2>
            
                                <hr />
                                <span class="text-muted small">
                                    *Solo envios en Argentina
                                </span>
                                <div class="m-t-sm">
                                    <div class="btn-group">
                                    <Link to="/cart" class="btn btn-primary btn-sm"><i class="fa fa-shopping-cart"></i> Pagar</Link>
                                    <Link to="/" class="btn btn-white btn-sm"> Cancelar</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

            
                        <div class="ibox">
                            <div class="ibox-title">
                                <h5>Soporte</h5>
                            </div>
                            <div class="ibox-content text-center">
                                <h3><i class="fa fa-phone"></i> +43 100 783 001</h3>
                                <span class="small">
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