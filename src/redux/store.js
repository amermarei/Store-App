import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import mediaReducer from "./mediaSlice"
export let store = configureStore(
    {
        reducer: {
            product: mediaReducer,
            cart: cartReducer
        }
    }
)