import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../features/counter/counterSlice";
import postReducer from "../features/posts/postSlice";

const store =configureStore({
    reducer:{
        counter:countReducer,
        post:postReducer,
    }
});
export default store;