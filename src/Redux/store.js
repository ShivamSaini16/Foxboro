import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/CounterSlice"; // Use the default reducer export
import authReducer from './slices/AuthSlice';
import { searchReducer } from "./slices/CounterSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,// This must reference the reducer
        auth:authReducer,
        search:searchReducer,
    },

});

export default store;

