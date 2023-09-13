import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContactThunk, getContactsThunk, delContactThunk } from './thunk';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => (state.isLoading = true);
const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handleAddFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = state.items.push(action.payload);
};
const handleDelFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = state.items.filter(el => el.id !== action.payload);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilled)
      .addCase(addContactThunk.fulfilled, handleAddFulfilled)
      .addCase(delContactThunk.fulfilled, handleDelFulfilled)
      .addMatcher(
        isAnyOf(
          getContactsThunk.pending,
          addContactThunk.pending,
          delContactThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getContactsThunk.rejected,
          addContactThunk.rejected,
          delContactThunk.rejected
        ),
        handleRejected
      );
  },
});

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
