import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContactThunk, getContactsThunk, delContactThunk } from './thunk';
import * as sevices from './services';
// import { getContacts } from 'api/apiContacts';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const {
  handleFulfilled,
  handleAddFulfilled,
  handleDelFulfilled,
  handlePending,
  handleRejected,
  thunkTypesArr,
} = sevices;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilled)
      .addCase(addContactThunk.fulfilled, handleAddFulfilled)
      .addCase(delContactThunk.fulfilled, handleDelFulfilled)
      .addMatcher(isAnyOf(...thunkTypesArr('pending')), handlePending)
      .addMatcher(isAnyOf(...thunkTypesArr('rejected')), handleRejected);
  },
});

export default contactsSlice.reducer;

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     pending(state, action) {
//       state.isLoading = true;
//     },
//     fulfilled(state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     rejected(state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const fetchContacts = () => {
//   return async dispatch => {
//     try {
//       // Индикатор загрузки
//       dispatch(contactsSlice.actions.pending());
//       // HTTP-запрос
//       const data = await getContacts();

//       // Обработка данных
//       dispatch(contactsSlice.actions.fulfilled(data));
//     } catch (e) {
//       console.log(e);
//       // Обработка ошибки
//       dispatch(contactsSlice.actions.error(e));
//     }
//   };
// };
// export const addContactFetch = () => {

//   }
