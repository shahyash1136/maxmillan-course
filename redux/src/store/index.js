import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Reducers/counterReducer";
import authSlice from "../Reducers/authReducer";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
