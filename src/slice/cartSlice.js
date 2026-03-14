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
        },
        updatequan(state,action){
            const {pid, change} = action.payload;
            const existingItem = state.cartItems.find( i => i.id === pid);

            if(existingItem)
            {
                existingItem.quantity += change;

                if(existingItem.quantity <= 1)
                {
                    existingItem.quantity = 1;
                }
            }
            localStorage.setItem('mobilehub', JSON.stringify(state.cartItems));

        },
        removecart(state,action){
            
        }
        
    }
})

export const { addtoCart,updatequan } = cartSlice.actions;
export default cartSlice.reducer;

