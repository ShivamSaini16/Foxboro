import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [] // items array to hold cart items
  },
  reducers: {
    // Add item to cart
    add: (state, action) => {
      // Check if item already exists
      const existingItem = state.items.find(item => item._id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if item exists
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add new item with quantity 1
      }
    },
    // Remove item from cart
    remove: (state, action) => {
      state.items = state.items.filter(item => item._id !== action.payload); // Filter out the item
    },
    // Increase item quantity
    increase: (state, action) => {
      const item = state.items.find(item => item._id === action.payload);
      if (item) {
        item.quantity += 1; // Increment quantity
      }
    },
    // Decrease item quantity
    decrease: (state, action) => {
      const item = state.items.find(item => item._id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1; // Decrement quantity if it's greater than 1
      }
    }
  }
});

const initialSearch={
  value:"",
}

const searchSlice=createSlice({
  name:'search',
  initialState:initialSearch,
  reducers:{
    setSearchValue:(state,action)=>{
      state.value=action.payload;
    }
  }
});

export const {setSearchValue}=searchSlice.actions;
export const searchReducer=searchSlice.reducer;
// Export the actions
export const { add, remove, increase, decrease } = CartSlice.actions;

// Export the reducer
export default CartSlice.reducer;
