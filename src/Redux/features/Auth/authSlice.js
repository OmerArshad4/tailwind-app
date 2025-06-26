import { createSlice } from "@reduxjs/toolkit";
import {
  login,
  forgotPassword,
  setNewPassword,
  verifyEmailOtp,
} from "./authApi";

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    email: "",
    user: null,
    token: null,
    error: null,
    success: null,
    loading: "idle",
  },
  reducers: {
    customLogout: (state) => {
      console.log("Custom logout");
      state.email = "";
      state.user = null;
      state.token = null;
      state.success = null;
      state.loading = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.token = action?.payload?.data?.accessToken;
        state.user = action?.payload?.data?.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = "failed";
      })
      .addCase(forgotPassword.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(forgotPassword.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(verifyEmailOtp.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(verifyEmailOtp.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(verifyEmailOtp.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(setNewPassword.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(setNewPassword.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(setNewPassword.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export const { customLogout } = authSlice.actions;

export default authSlice.reducer;
