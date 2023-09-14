import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contactsReducer from './sliceContacts';
import filterReducer from './sliceFilter';

const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: reducer,
});

// export const persistor = persistStore(store)
