import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/CounterSlice"; // Use the default reducer export

const store = configureStore({
    reducer: {
        cart: cartReducer // This must reference the reducer
    },
});

export default store;

