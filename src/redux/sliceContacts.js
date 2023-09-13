import {createSlice } from '@reduxjs/toolkit'
import { addContactThunk, getContactsThunk, delContactThunk } from './thunk';

const initialState = {
    items: [],
    isLoading: false,
    error: null
};

const handlePending = (state) => state.isLoading = true;
const handleFulfilled = (state, action) => {
          state.isLoading = false;
            state.error = null;
            state.items = action.payload
}
const handleError = (state, action) => 
            {
            state.isLoading = false;
            state.error = action.payload;
}
const handleAddFulfilled = (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items = state.items.push(action.payload)
}
const handleDelFulfilled = (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items = state.items.filter((el) => el.id!==action.payload)
        }
  
const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: builder => {
        builder.addCase(getContactsThunk.pending, handlePending)
            .addCase(getContactsThunk.fulfilled, handleFulfilled)
            .addCase(getContactsThunk.error, handleError)
            .addCase(addContactThunk.pending, handlePending)
            .addCase(addContactThunk.fulfilled, handleAddFulfilled)
            .addCase(addContactThunk.error, handleError)
            .addCase(delContactThunk.pending, handlePending)
            .addCase(delContactThunk.fulfilled, handleDelFulfilled)
            .addCase(delContactThunk.error, handleError)
    }
})

export default contactsSlice.reducer;

// export const fetchContacts = () =>  {return async (dispatch) => 
//   {try {
//     // Индикатор загрузки
//     dispatch(contactsSlice.actions.pending());
//     // HTTP-запрос
//     const data = await getContacts();
      
//     // Обработка данных
//     dispatch(contactsSlice.actions.fulfilled(data));
//   } catch (e) {
//       console.log(e);
//     // Обработка ошибки
//     dispatch(contactsSlice.actions.error(e));
//     }
// }
// }
// export const addContactFetch = () => {
      
//   }

