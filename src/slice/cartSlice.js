import { createSlice } from "@reduxjs/toolkit";


const initialState =  {
    cartItems : JSON.parse(localStorage.getItem("mobilehub")) || []
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
                state.cartItems.push({...pid, quantity : 1});
            }
            localStorage.setItem('mobilehub' , JSON.stringify(state.cartItems));
        }
        
    }
})

export const { addtoCart } = cartSlice.actions;
export default cartSlice.reducer;

