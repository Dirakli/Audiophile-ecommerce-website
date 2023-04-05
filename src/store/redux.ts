import { configureStore } from "@reduxjs/toolkit";
import info from "./handleChange";

const store = configureStore({
    reducer: {
        name: info
    }
})

export default store;