import Toaster from "../../../Shared/Toaster";
import axiosInstance from "../../interceptor";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "login",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      Toaster.success(response?.data?.message);
      return response.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.data?.message);
      return thunkAPI.rejectWithValue({ statusCode: error.response.status });
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "forgotPassword",
  async ({ apiEndpoint, requestData, email }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      Toaster.success(response?.data?.message);
    } catch (error) {
      Toaster.error(error?.response?.data?.data?.message);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const verifyEmailOtp = createAsyncThunk(
  "verifyEmailOtp",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      Toaster.success(response?.data?.message);
    } catch (error) {
      Toaster.error(error?.response?.data?.data?.message);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const setNewPassword = createAsyncThunk(
  "setNewPassword",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      Toaster.success(response?.data?.message);
    } catch (error) {
      Toaster.error(error?.response?.data?.data?.message);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

