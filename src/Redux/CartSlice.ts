'use client'
import { createSlice } from "@reduxjs/toolkit"

const initialState: {
    cartItems: {
        name: string;
        quantity: number;
        slug: string;
        src: string;
        price: number;
        category: string;
        details: string;
        care: string[];
    }[], amount: number, total: number, ReduxUser: { name:string, email:string, image:string  } 
} = {
    cartItems: [],
    amount: 0,
    total: 0,
    ReduxUser: {
        name: "",
        email: "",
        image: ""
    },
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            let [item, n] = action.payload;
            n = n < 1 ? 1 : n
            // console.log(n);
            // console.log(item.slug);
            const product = state.cartItems.find((p) => p.slug === item.slug /*|| console.log(p.slug,item.slug) */);
            // console.log(product);
            // state.cartItems.push({ ...action.payload, quantity: action.payload.quantity + 1 })
            product ? state.cartItems[state.cartItems.indexOf(product)] = { ...item, quantity: product.quantity + n } : state.cartItems.push({ ...item, quantity: n })
            // console.log(state.cartItems.map(i => i.slug));
            //  console.log(action.payload);
        },
        remove(state, action) {
            const product = state.cartItems.find((p) => p.slug === action.payload.slug);
            // state.cartItems.push({ ...action.payload, quantity: action.payload.quantity + 1 })
            product && product.quantity>1 ? state.cartItems[state.cartItems.indexOf(product)] = { ...action.payload, quantity: product.quantity - 1 } :  0
            // console.log(state.cartItems.map(i => i.quantity));
            //  console.log(action.payload);
        },
        clear(state, action) {
            const itemId = action.payload.slug;
            state.cartItems = state.cartItems.filter((item) => item.slug !== itemId);
        },
        caltotal(state) {
            let amount = 0
            let total = 0
            state.cartItems.forEach((item) => {
                amount += item.quantity
                total += item.quantity * item.price
            })
            state.amount = amount;
            state.total = total;
        },
        addUser(state,action) {
            state.ReduxUser = action.payload
            // console.log(state.ReduxUser);
        }
        
    }
})

export const { add, clear, remove, caltotal, addUser } = cartSlice.actions;
export default cartSlice.reducer;