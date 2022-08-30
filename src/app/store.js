import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../features/counter/counterSlice";
import postReducer from "../features/posts/postSlice";
import todoReducer from "../features/todos/todoSlice";

const store =configureStore({
    reducer:{
        counter:countReducer,
        post:postReducer,
        todo:todoReducer,
    }
});
export default store;