import { createSlice } from "@reduxjs/toolkit";


const initialState =  {
    cartItems : JSON.parse(localStorage.getItem("cartItems")) || []
}
const cartSlice =  createSlice({
    name : 'cart',
    initialState,
    reducers : {
         addtoCart(state, action) {

            const existingItem = state.cartItems;
            const item = action.payload;

            const product = existingItem.filter(pro => pro.id === item);

            state.cartItems = [...existingItem, item];

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        }
    }
})

export const { addtoCart } = cartSlice.actions;
export default cartSlice.reducer;

