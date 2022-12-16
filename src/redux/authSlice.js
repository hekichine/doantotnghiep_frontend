import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      currentData: null,
      loading: false,
    },
    logout: {
      loading: false,
    },
  },
  reducers: {
    loginStart: (state) => {
      state.login.currentData = null;
      state.login.loading = true;
    },
    loginSuccess: (state, action) => {
      state.login.currentData = action.payload;
      state.login.loading = false;
    },
    loginFaild: (state) => {
      state.login.currentData = null;
      state.login.loading = false;
    },
    logoutStart: (state) => {
      state.logout.loading = true;
    },
    logoutSuccess: (state) => {
      state.logout.loading = false;
      state.login.currentData = null;
    },
  },
});
const { reducer, actions } = authSlice;
export const {
  loginSuccess,
  loginStart,
  loginFaild,
  logoutStart,
  logoutSuccess,
} = actions;
export default reducer;
