import { createSlice } from "@reduxjs/toolkit";

const InitialGlobalVars = {
    user: null
}

const globalVariables = createSlice({
    name: "globalVariables",
    initialState: InitialGlobalVars,
    reducers: {
        changeUser(state){
            state.user = false
        }
    }
})

export const globalVarActions = globalVariables.actions;

export default globalVariables.reducer