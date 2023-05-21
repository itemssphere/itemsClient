import { configureStore } from "@reduxjs/toolkit";
import globalVariables from "./globalVariables";

const store = configureStore({
    reducer:{
        globalVariables
    }
})

export default store