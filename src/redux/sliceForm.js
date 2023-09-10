import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        addContact:(state, action)=> (
            [...state, action.payload]
        ),
        delContact: (state, action) => (
            state.filter(contact => contact.id !== action.payload)
        )
    }
})

export const { addContact,delContact } = formSlice.actions;
export default formSlice.reducer;