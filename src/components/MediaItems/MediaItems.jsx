import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../redux/cartSlice';
import Carousel from '../Carousel/Carousel';
export default function MediaItems() {
    const category = [
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
    ];
    let { product } = useSelector((state) => state.product);
    const [filter, setFilter] = useState("");
    let dispatch = useDispatch();
    let filteration = (name) => {
        setFilter(name);
    };
    return (
        <Fragment>
            <Carousel />
            <div className="container">
                <div className="header d-flex align-items-center justify-content-between">
                    <h2 className="text-center fw-bold py-5">Products</h2>
                    <input className="form-control me-2 w-50" type="search" placeholder="Search Product" aria-label="Search" onChange={(e) => filteration(e.target.value)} />
                    <div className="dropdown">
                        <button className="btn btn-outline-success fw-bold" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-solid fa-filter me-1"></i>  Filter
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><Link className="dropdown-item my-2" to="/">All</Link></li>
                            {category.map((cat, index) => <li key={index}><Link className="dropdown-item my-2" to={`/category/${cat}`}>{cat}</Link></li>)}
                        </ul>
                    </div>
                </div>
                {product.length > 0 ? <div className="row g-4 pb-5">
                    {product.filter((e) => e.title.includes(filter)).map(prod => {
                        return (
                            <Fragment key={prod.id}>
                                <div className="col-md-4">
                                    <div className="card shadow  text-center fw-bolder">
                                        <div className="card-body">
                                            <h5 className="card-title py-3 mb-4 ">{prod.title.length >= 20 ? prod.title.split(" ").slice(0, 3).join(" ") : prod.title}</h5>
                                            <img src={prod.image} className=" card-img" alt="" />
                                            <h5 className="card-title  mt-4 fw-bold text-danger">{prod.price} $</h5>
                                            <p className=" text-start fw-lighter mt-3">{prod.description.toLowerCase().slice(0, 40)}...</p>
                                            <Link to={`/details/${prod.id}`} className="btn btn-primary me-5">More Details</Link>
                                            <button className="btn btn-warning" onClick={() => dispatch(addToCart(prod))}>Add To Cart <i className="fa-solid fa-cart-shopping"></i> </button>
                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                        )
                    })}
                </div> : <div className="vh-100 d-flex justify-content-center align-items-center">
                    <i className="fas fa-spinner text-black fa-spin fa-4x"></i>
                </div>}
            </div>
        </Fragment>
    )
}
