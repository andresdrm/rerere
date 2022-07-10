import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        countOfItems: 0,
        products: [],
    },
    reducers: {
        init: (state) => {
            state.products = [];
        },
        addItem: (state, action) => {
            state.countOfItems++;
           
            
            if(state.products.filter(e => e.id === action.payload.id).length === 0){
                state.products.push(action.payload);
            }
                  
            
        },
        removeItem: (state, action) => {
            state.countOfItems--;
           
            state.products = state.products.filter(e => e.id !== action.payload.id);
            
        },
        
    }
});

export const { addItem, removeItem, init} = cartSlice.actions;

export default cartSlice.reducer;
