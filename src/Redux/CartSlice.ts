'use client'
import { createSlice } from "@reduxjs/toolkit"

const initialState: {
    cartItems: {
        namee: string;
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
            state.cartItems.push(action.payload)    
        },
        remove(state, action) {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.slug !== itemId);
        }
    }
})

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;