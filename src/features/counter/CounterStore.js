import { configureStore } from "@reduxjs/toolkit";
import CounterSlicer from "./CounterSlicer";

const store = configureStore ({ reducer: CounterSlicer })

export default store;