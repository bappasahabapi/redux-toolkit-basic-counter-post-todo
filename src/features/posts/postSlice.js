import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    isLoading:false,
    posts:[],
    error:null
}

export const fetchPosts=createAsyncThunk("posts/fetchPosts", async()=>{

    // const url = "https://jsonplaceholder.typicode.com/posts";
    const url = "https://jsonplaceholder.typicode.com/posts?_limit=8";
    
    const response =await axios.get(url);
    return response.data;
});

const postSlice =createSlice({
    name:"posts",
    initialState:initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(fetchPosts.pending,(state)=>{
            state.isLoading=true
        });
       builder.addCase(fetchPosts.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.posts=action.payload;
            state.error=null;
        });
        builder.addCase(fetchPosts.rejected,(state, action)=>{
            state.isLoading=false;
            state.posts=[];
            state.error=action.error.message;
        })

    }
});

export default postSlice.reducer;