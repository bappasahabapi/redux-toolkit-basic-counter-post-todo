import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    todos:[],
    isLoading:false,
    error:null
}


export const fetchTodos=createAsyncThunk("todos/fetchTodos", async()=>{

    // const url = "https://jsonplaceholder.typicode.com/posts";
    const url = "https://jsonplaceholder.typicode.com/todos?_limit=4";
    
    const response =await axios.get(url);
    return response.data;
});

const todoSlice =createSlice({
    name:"todos",
    initialState:initialState,
    
    extraReducer:(builder)=>{
        builder
        .addCase(fetchTodos.pending,(state)=>{
            state.isLoading=true
        });
       builder.addCase(fetchTodos.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.todos=action.payload;
            state.error=null;
        });
        builder.addCase(fetchTodos.rejected,(state, action)=>{
            state.isLoading=false;
            state.todos=[];
            state.error=action.error.message;
        })
    }
    
})
export default todoSlice.reducer;