import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchPosts = createAsyncThunk ("posts/fetchPosts",async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
})



const postSlice = createSlice({
    name:"posts",
    initialState:{
        post: [],
        isLoading: false,
        error: null
    },
    extraReducers:
        (builder)=>{
            builder.addCase(fetchPosts.pending,(state)=>{
                state.isLoading= true;
            })
            builder.addCase(fetchPosts.fulfilled,(state,action)=>{
                state.isLoading= false;
                state.post = action.payload;
                state.error = null;
            })
            builder.addCase(fetchPosts.rejected,(state,action)=>{
                state.isLoading= false;
                state.post = [];
                state.error = action.error.message;
            })
    }
})

export default postSlice.reducer;