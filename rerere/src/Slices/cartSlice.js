import { createSlice, current } from "@reduxjs/toolkit";

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
           
            console.log("State products antes", current(state.products));
            
            if(state.products.filter(e => e.id === action.payload.id).length === 0){
                state.products.push(action.payload);
            }
                  
            
            console.log("State products después",current(state.products));
        },
        removeItem: (state, action) => {
            state.countOfItems--;
           
            state.products = state.products.filter(e => e.id !== action.payload.id);
            
        },
        
    }
});

export const { addItem, removeItem, init} = cartSlice.actions;

export default cartSlice.reducer;
