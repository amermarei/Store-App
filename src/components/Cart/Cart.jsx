import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, removeFromCart } from '../../redux/cartSlice';
export default function Cart() {
    let cart = useSelector(state => state.cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    let dispatch = useDispatch();
    let totalPrice = cart.reduce((acc, prod) => {
        acc += prod.price * prod.quantity;
        return acc
    }, 0)
    return (
        <Fragment>
            <div className='container my-5 py-5'>
                <h2 className='h1 fw-bold my-5'>Your Cart {cart.length > 0 ? <span className='fs-5 text-danger fw-lighter'>({cart.length} items)</span> : "Is Empty"}</h2>
                <button className='btn btn-danger' onClick={() => dispatch(clearCart(cart))}>Clear Cart</button>
                <h4 className='mt-4'>Total Price : <span className='text-danger'>{totalPrice.toFixed(2)} $</span></h4>
                <table className="table table-striped  table-bordered py-5 my-5">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Category</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Image</th>
                            <th scope="col">Remove Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(prod => {
                            return <Fragment key={prod.id}>
                                <tr className=''>
                                    <td className='text-warning'>{prod.id}</td>
                                    <td>{prod.title}</td>
                                    <td className='text-danger'>{prod.price} $</td>
                                    <td >{prod.category}</td>
                                    <td>{prod.quantity}</td>
                                    <td><img src={prod.image} alt="" className='cart-image'></img></td>
                                    <td><button className='btn btn-danger' onClick={() => dispatch(removeFromCart(prod))}>Remove</button></td>
                                </tr>
                            </Fragment>
                        })}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

