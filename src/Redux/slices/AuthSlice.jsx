import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: '',
}


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        //Get Token
        setToken: (state, action) => {
            state.token = action.payload
        },
    }
})

//Export the actions
export const {setToken} = authSlice.actions;

//Export the reducer
export default authSlice.reducer;