import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import storage from "redux-persist/lib/storage";
import authSlice from "./features/Auth/authSlice.js";
import adminSlice from "./features/Admin/adminSlice.js";
import { persistStore, persistReducer } from "redux-persist";
import technicianSlice from "./features/Technician/technicianSlice.js";
const persistConfig = {
  storage,
  version: 1,
  key: "root",
};
const rootReducer = combineReducers({
  user: authSlice,
  adminSlice: adminSlice,
  technicianSlice: technicianSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore(
  { reducer: persistedReducer },
  applyMiddleware(thunk)
);

export const persistor = persistStore(store);
