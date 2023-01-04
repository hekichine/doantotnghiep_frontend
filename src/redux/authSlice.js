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
    register: {
      loading: false,
      currentData: null,
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
    registerStart: (state) => {
      state.register.loading = true;
      state.register.currentData = null;
    },
    registerSuccess: (state, action) => {
      state.register.loading = false;
      state.register.currentData = action.payload;
    },
    registerFaild: (state) => {
      state.register.loading = false;
      state.register.currentData = null;
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
  registerStart,
  registerSuccess,
  registerFaild,
} = actions;
export default reducer;
