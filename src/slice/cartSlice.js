import { createSlice } from "@reduxjs/toolkit";


const initialState =  {
    cartItems : JSON.parse(localStorage.getItem("cartItems")) || []
}
const cartSlice =  createSlice({
    name : 'cart',
    initialState,
    reducers : {
         addtoCart(state, action) {

            const item = action.payload;
            const existingItem = state.cartItems.find(i => i.id === item.id);
            if(existingItem)
            {
                existingItem.quantity += 1;
            }
            else
            {
                state.cartItems.push({...item, quantity : 1});
            }

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))

        }
    }
})

export const { addtoCart } = cartSlice.actions;
export default cartSlice.reducer;

