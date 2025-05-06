import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/ProductReducer";
import { errorReducer } from "./reducers/errorReducer";
import { cartReducer } from "./reducers/cartReducer";

// This will load cart items from local storage to redux at the application start
const cartItems = localStorage.getItem("cartItems") 
? JSON.parse(localStorage.getItem("cartItems")) : [];

const initialState = {
    carts: {cart: cartItems },
};


export const store = configureStore({
    reducer: {
        products: productReducer,
        errors: errorReducer,
        carts: cartReducer,
    },
    preloadedState: initialState,
    
});

export default store;

