import { createSlice } from '@reduxjs/toolkit'

const counterSlicer =createSlice({
    name: "counter",
    initialState : {
        count: 10
    },

    reducers: {
        increment : (state)=>{
            state.count = state.count + 5
        },
        decrement : (state)=>{
            state.count = state.count>0? state.count -2 :0;
        },
        reset : (state)=>{
            state.count =10
        }
    }

})


export const {increment,decrement,reset}= counterSlicer.actions
export default counterSlicer.reducer;