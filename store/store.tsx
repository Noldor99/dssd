import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./slice/todoSlice";

const rootReducer = combineReducers({
  todo: todoReducer,

});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
