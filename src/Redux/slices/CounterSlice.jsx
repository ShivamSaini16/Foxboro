// import { createSlice } from "@reduxjs/toolkit";

// export const CartSlice = createSlice({
//     name: "cart",
//     initialState: {
//         items: []
//     },
//     reducers: {
//         add: (state, action) => { 
//             state.push(action.payload);
//         },
//         remove: (state, action) => {
//            return state.filter((item) => item.id !== action.payload);
//         }
//     }
// });

// // Export the actions
// export const { add, remove } = CartSlice.actions;

// // Export the reducer (This is crucial)
// export default CartSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [] // items array to hold cart items
    },
    reducers: {
        add: (state, action) => { 
            state.items.push(action.payload); // Push item to items array
        },
        remove: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload); // Filter out the item from items array
        }
    }
});

// Export the actions
export const { add, remove } = CartSlice.actions;

// Export the reducer
export default CartSlice.reducer;
