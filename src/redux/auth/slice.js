import { createSlice } from "@reduxjs/toolkit";
import { userRegister, logInUser, refreshUser, logOutUser } from "./operations";
import { INITIAL_STATE } from "../initialState";

const authSlice = createSlice({
  name: "authSlice",
  initialState: INITIAL_STATE.auth,

  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(userRegister.rejected, (state) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.token = null;
        state.user = { name: null, email: null };
      })
      .addCase(logInUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(logInUser.rejected, (state) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.token = null;
        state.user = { name: null, email: null };
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.token = null;
        state.user = { name: null, email: null };
      })
      .addCase(logOutUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(logOutUser.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addCase(logOutUser.rejected, (state) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.token = null;
      });
  },
});

export const authReducer = authSlice.reducer;
