import Toaster from "../../../Shared/Toaster";
import axiosInstance from "../../interceptor";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllAssignedVehiclesByTechnician = createAsyncThunk(
  "getAllAssignedVehiclesByTechnician",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(apiEndpoint);
      return response.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.data?.message);
      return thunkAPI.rejectWithValue({ statusCode: error.response.status });
    }
  }
);

export const updateVehicleStatusByTechnician = createAsyncThunk(
  "updateVehicleStatusByTechnician",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.put(apiEndpoint, requestData);
      Toaster.success(response?.data?.message);
      return response.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.data?.message);
      return thunkAPI.rejectWithValue({ statusCode: error.response.status });
    }
  }
);
