import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import  formReducer from "./sliceForm";
import filterReducer from "./sliceFilter";
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER } from 'redux-persist'

const persistCongig = {
    key: "contacts",
    storage,
    blacklist: ["filter"]
}

const reducer = combineReducers({
    contacts: formReducer,
    filter: filterReducer
})

const persistedReducer= persistReducer(persistCongig, reducer)

export const store = configureStore({
    reducer: persistedReducer,
middleware: getDefaultMiddleware({serializableCheck:{ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]}})})

export const persistor = persistStore(store)




