import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,actions)=>{
            
                state.items.push(actions.payload);
        },
        removeItems:(state,actions)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
        state.items=[];
    }
}
});
export const { addItem , removeItems , clearCart } = cartSlice.actions;
export default cartSlice.reducer;