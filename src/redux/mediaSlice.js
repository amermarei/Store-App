import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export let fetchApi = createAsyncThunk("mediaSlice/fetchApi", async ({ id, type }) => {
    let { data } = await axios.get(`https://fakestoreapi.com/products/${id}/${type}`);
    return data;
})

let initialState = { product: [] }
let mediaSlice = createSlice({
    name: "product",
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchApi.fulfilled, (state, action) => {
            state.product = action.payload;
        })
    },

})
export default mediaSlice.reducer;