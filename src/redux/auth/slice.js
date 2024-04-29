import { createSlice } from "@reduxjs/toolkit";
import { userRegister, logInUser } from "./operations";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (builder) => {
    builder
      // .addCase(userRegister.pending, (state) => {
      //   state.isRefreshing = true;
      // })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        // state.isRefreshing = false;
      })
      .addCase(userRegister.rejected, (state) => {
        // state.isRefreshing = false;
        state.isLoggedIn = false;
        state.token = null;
        state.user = { name: null, email: null };
      })
      // .addCase(logInUser.pending, (state) => {
      //   state.isRefreshing = true;
      // })
      .addCase(logInUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        // state.isRefreshing = false;
      })
      .addCase(logInUser.rejected, (state) => {
        // state.isRefreshing = false;
        state.isLoggedIn = false;
        state.token = null;
        state.user = { name: null, email: null };
      });
    // .addCase()
    // .addCase()
    // .addCase()
    // .addCase()
    // .addCase();
  },
});

export const authReducer = authSlice.reducer;
