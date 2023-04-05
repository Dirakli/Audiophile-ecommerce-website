import { createSlice } from "@reduxjs/toolkit"

const handleChange = createSlice({
    name: "data",
    initialState: {
        value: '',
    },
    reducers: {
        updateFunction(state, action) {
            state.value = action.payload
        },
    }
})

export const {updateFunction} = handleChange.actions;
export default handleChange.reducer;