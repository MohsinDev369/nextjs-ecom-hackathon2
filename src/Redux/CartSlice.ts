'use client'
import { createSlice } from "@reduxjs/toolkit"

const initialState: {
    cartItems: {
        namee: string;
        quantity: number;
        slug: string;
        src: string;
        price: string;
        category: string;
        details: string;
        care: string[];
    }[], amount: number, total: number, isLoading: boolean
} = {
    cartItems: [],
    amount: 4,
    total: 0,
    isLoading: true,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            const product = state.cartItems.find((p) => p.slug === action.payload.slug);
            product ? state.cartItems[state.cartItems.indexOf(product)] = { ...action.payload, quantity: product.quantity +1 } : state.cartItems.push(action.payload) 
            // console.log(state.cartItems.map(i => i.quantity));
        },
        remove(state, action) {
            const itemId = action.payload.slug;
            state.cartItems = state.cartItems.filter((item) => item.slug !== itemId);
        }
        
    }
})

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;