import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"counter",
    initialState:{
        value:0,
    },
    reducers:{
        Increment:(state,action)=>{
            state.value +=action.payload;
        },
        Decrement:(state,action)=>{
            state.value -=action.payload;
        },
        Reset:(state, action)=>{
            state.value =0;
        }
    }
});
export const {Increment, Decrement, Reset}=counterSlice.actions;
export default counterSlice.reducer;