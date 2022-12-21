import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import App from "./App";
import "./index.css";
import Cart from "./components/Cart/Cart";
import Details from "./components/Details/Details";
import Categories from "./components/Category/Categories";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import NotFound from "./components/notFound/NotFound";
import Home from "./components/Home/Home";
import { Provider } from "react-redux";
import { store } from "./redux/store";
let routers = createBrowserRouter([
  {
    path: "/", element: <Layout />, children: [
      { path: "home", element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: "Details/:id", element: <Details /> },
      { path: "category/:type", element: <Categories /> },
      { path: "*", element: <NotFound /> },
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routers} />
    </Provider>
  </React.StrictMode>
);

