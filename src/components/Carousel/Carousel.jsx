import React, { Fragment } from 'react'
import background1 from "../../assests/background-1.webp";
import background2 from "../../assests/background-2.webp";
import background3 from "../../assests/background-3.jpg";
export default function Carousel() {
    return (
        <Fragment>
            <div id="carouselExampleControls" className="carousel slide mt-5 pt-4" data-bs-ride="carousel">
                <div className="carousel-inner position-relative">
                    <div className="carousel-item active">
                        <img src={background1} className="d-block w-100 carous" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={background2} className="d-block w-100 carous " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={background3} className="d-block w-100 carous" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </Fragment>
    )
}
