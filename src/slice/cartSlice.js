import { createSlice } from "@reduxjs/toolkit";


const initialState =  {
    cartItems : [] || JSON.parse(localStorage.getItem("cartItems"))
}
const cartSlice =  createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addtoCart(state, action){
            const existingItem = state.cartItems;
            const item = action.payload;

            const product = existingItem.filter(pro => pro.id === item);

            localStorage.setItem("cartItems", JSON.stringify(product));

        }
    }
})

export const { addtoCart } = cartSlice.actions;
export default cartSlice.reducer;

