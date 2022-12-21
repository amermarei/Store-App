import { createSlice } from "@reduxjs/toolkit";
let savedItems = localStorage.getItem("item") !== null ? JSON.parse(localStorage.getItem("item")) : [];
export let cartSlice = createSlice({
    name: "cartSlice",
    initialState: savedItems,
    reducers: {
        addToCart: (state, action) => {
            const findProd = state.find(e => e.id === action.payload.id);
            if (findProd) {
                findProd.quantity += 1;
            } else {
                const productClone = { ...action.payload, quantity: 1 }
                state.push(productClone);
            }
            localStorage.setItem('item', JSON.stringify(state));
        },
        removeFromCart: (state, action) => {
            localStorage.setItem('item', JSON.stringify(state.filter(e => e.id !== action.payload.id)));
            return state.filter(e => e.id !== action.payload.id)
        },
        clearCart: (state, action) => {
            localStorage.clear();
            return [];
        },
    }

})

export let { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer;