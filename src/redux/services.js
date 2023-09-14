export const handlePending = (state, _) => {
  state.isLoading = true;
};
export const handleFulfilled = (state, { payload }) => ({
  ...state,
  contacts: [...payload],
  isLoading: false,
  error: null,
});
export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
export const handleAddFulfilled = (state, { payload }) => ({
  ...state,
  contacts: [...state.contacts, payload],
  error: null,
});
export const handleDelFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.contacts = state.contacts.filter(el => el.id !== action.payload);
};
