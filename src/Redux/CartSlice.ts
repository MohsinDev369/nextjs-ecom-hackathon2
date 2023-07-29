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
            // state.cartItems.push({ ...action.payload, quantity: action.payload.quantity + 1 })
            product ? state.cartItems[state.cartItems.indexOf(product)] = { ...action.payload, quantity: product.quantity + 1 } : state.cartItems.push({ ...action.payload, quantity: action.payload.quantity + 1 })
            // console.log(state.cartItems.map(i => i.quantity));
            //  console.log(action.payload);
        },
        clear(state, action) {
            const itemId = action.payload.slug;
            state.cartItems = state.cartItems.filter((item) => item.slug !== itemId);
        }
        
    }
})

export const { add, clear } = cartSlice.actions;
export default cartSlice.reducer;