import { configureStore } from "@reduxjs/toolkit";
import CounterSlicer from "./CounterSlicer";
import postSlice from "../todos/postSlice";

const store = configureStore ({ reducer: {counter: CounterSlicer, posts : postSlice }})

export default store;