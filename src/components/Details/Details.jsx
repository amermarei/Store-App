
import React, { useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../redux/cartSlice';
import { fetchApi } from "../../redux/mediaSlice";
export default function Details() {
    let { id } = useParams();
    let { product } = useSelector((state) => state.product);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchApi({ id, type: "" }));
    }, [])

    return (
        <Fragment>
            <div className='container mt-5 pt-5'>
                {product.id !== undefined ? <div className='row pt-5 gx-4 '>
                    <div className='col-md-4 '>
                        <img src={product.image}
                            className="w-75  rounded shadow api-img"
                            alt=""
                        />
                    </div>
                    <div className='col-md-8 '>
                        <h4 className='mb-4 h1 text-black mb-5'>{product.title}</h4>
                        <h5 className='text-secondary fw-bold lh-lg my-3'><span className='fs-4 text-black'>Description </span> : {product.description}</h5>
                        <h5 className='text-secondary fw-bold lh-lg my-3'><span className='fs-4 text-black'>Category </span> : {product.category}</h5>
                        <h4 className=' fw-bold lh-lg my-3'>price : <span className='text-warning'>{product.price} $</span></h4>
                        <button className="btn btn-warning" onClick={() => dispatch(addToCart(product))}>Add To Cart <i className="fa-solid fa-cart-shopping"></i> </button>
                    </div>
                </div> : <div className="vh-100 d-flex justify-content-center align-items-center">
                    <i className="fas fa-spinner text-black fa-spin fa-4x"></i>
                </div>}
            </div>
        </Fragment>
    )
}

