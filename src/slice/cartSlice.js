import { createSlice } from "@reduxjs/toolkit";


const initialState =  {
    cartItems : JSON.parse(localStorage.getItem("cartItems")) || []
}
const cartSlice =  createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addtoCart(state , action){
            const pid = action.payload;
            const existingItem = state.cartItems.find( i => i.id === pid.id);

            if(existingItem){
                existingItem.quantity += 1;
            }
            else
            {
                state.cartItems.push({...state, quantity : 1});
            }
            localStorage.setItem('cartItem' , JSON.stringify(state.cartItems));
        }
        
    }
})

export const { addtoCart } = cartSlice.actions;
export default cartSlice.reducer;

