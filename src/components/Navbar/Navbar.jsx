import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../../assests/shopping-trolley.png";
import cartImage from "../../assests/cart.png";
import { useSelector } from "react-redux";
export default function Navbar() {
  let cart = useSelector((state) => state.cart);
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light shadow fixed-top  bg-white">
        <div className="container">
          <Link
            className="navbar-brand fw-bold d-flex align-items-center fw-bold fs-3"
            to=""
          >
            <img src={logo} className="logo me-2 mb-2 " alt="logo"></img> Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse ms-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <Link className="nav-link" aria-current="page" to="">
                  Home
                </Link>
              </li>
              <li className="nav-item me-3 ">
                <Link className="nav-link cart" aria-current="page" to="cart">
                  Cart <img style={{ width: "20px" }} src={cartImage} className=" me-2 mb-2 " alt="logo"></img>
                  {cart.length > 0 ? <span>{cart.length}</span> : ""}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
