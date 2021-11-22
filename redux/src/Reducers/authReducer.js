import { createSlice } from "@reduxjs/toolkit";

const initalAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initalAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authAction = authSlice.actions;

export default authSlice;