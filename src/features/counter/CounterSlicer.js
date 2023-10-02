import { createSlice } from '@reduxjs/toolkit'

const counterSlicer =createSlice({
    name: "counter",
    initialState : {
        count: 0
    },

    reducers: {
        increment : (state)=>{
            state.count = state.count + 1
        },
        decrement : (state)=>{
            state.count = state.count>0? state.count -1 :0;
        },
        reset : (state)=>{
            state.count = 0
        }
    }

})


export const {increment,decrement,reset}= counterSlicer.actions
export default counterSlicer.reducer;