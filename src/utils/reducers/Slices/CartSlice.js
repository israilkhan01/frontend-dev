import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name: 'CartSlice',
    initialState:{
        items:[]
    },
    reducers:{
        addItems:function(state,action){
           state.items.push(action.payload) ;
        }
    }
});

console.log("Cart Slice--",CartSlice)
export const {addItems} = CartSlice.actions
export default CartSlice.reducer;