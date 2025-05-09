import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/ProductReducer";
import { errorReducer } from "./reducers/errorReducer";
import { cartReducer } from "./reducers/cartReducer";
import { authReducer } from "./reducers/authReducer";

// This will load cart items from local storage to redux at the application start
const cartItems = localStorage.getItem("cartItems") 
            ? JSON.parse(localStorage.getItem("cartItems")) : [];

// Loading user from local storage
const user = localStorage.getItem("auth") 
            ? JSON.parse(localStorage.getItem("auth")) : [];

const initialState = {
    carts: {cart: cartItems },
    auth: {user: user},
};





export const store = configureStore({
    reducer: {
        products: productReducer,
        errors: errorReducer,
        carts: cartReducer,
        auth: authReducer,
    },
    preloadedState: initialState,
    
});

export default store;

