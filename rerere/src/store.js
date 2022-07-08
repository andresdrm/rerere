import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import cartSlice from "./Slices/cartSlice";
import userSlice from "./Slices/userSlice";
import homeSlice from "./Slices/homeSlice";
import productSlice from "./Slices/productSlice";

const reducers = combineReducers({
  user: userSlice,
  cart: cartSlice,
  home: homeSlice,
  product: productSlice,
});

const rootPersistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(rootPersistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
