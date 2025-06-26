import Toaster from "../../../Shared/Toaster";
import axiosInstance from "../../interceptor";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllTechniciansByAdmin = createAsyncThunk(
  "getAllTechniciansByAdmin",
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

export const addNewTechnicianByAdmin = createAsyncThunk(
  "addNewTechnicianByAdmin",
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

export const updateTechnicianByAdmin = createAsyncThunk(
  "updateTechnicianByAdmin",
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

export const deleteTechnicianByAdmin = createAsyncThunk(
  "deleteTechnicianByAdmin",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.delete(apiEndpoint);
      Toaster.success(response?.data?.message);
      return response.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.data?.message);
      return thunkAPI.rejectWithValue({ statusCode: error.response.status });
    }
  }
);

export const getAllVehiclesByAdmin = createAsyncThunk(
  "getAllVehiclesByAdmin",
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

export const addNewVehicleByAdmin = createAsyncThunk(
  "addNewVehicleByAdmin",
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

export const getVehicleDetailsByVinNumberByAdmin = createAsyncThunk(
  "getVehicleDetailsByVinNumberByAdmin",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(apiEndpoint);
      Toaster.success(response?.data?.message);
      return response.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.data?.message);
      return thunkAPI.rejectWithValue({ statusCode: error.response.status });
    }
  }
);

export const updateVehicleByAdmin = createAsyncThunk(
  "updateVehicleByAdmin",
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

export const deleteVehicleByAdmin = createAsyncThunk(
  "deleteVehicleByAdmin",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.delete(apiEndpoint);
      Toaster.success(response?.data?.message);
      return response.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.data?.message);
      return thunkAPI.rejectWithValue({ statusCode: error.response.status });
    }
  }
);

export const updateTimePeriodByAdmin = createAsyncThunk(
  "updateTimePeriodByAdmin",
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

export const getTimePeriodByAdmin = createAsyncThunk(
  "getTimePeriodByAdmin",
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

export const getDashboardStatsByAdmin = createAsyncThunk(
  "getDashboardStatsByAdmin",
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

export const getAllDeliveredVehiclesByAdmin = createAsyncThunk(
  "getAllDeliveredVehiclesByAdmin",
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

export const readPdfFileForAutoFilling = createAsyncThunk(
  "readPdfFileForAutoFilling",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      Toaster.success(response?.data?.message);
      return response.data;
    } catch (error) {
      console.log(error);
      Toaster.error(error?.message);
      return thunkAPI.rejectWithValue({ statusCode: error.response.status });
    }
  }
);

export const getAllParts = createAsyncThunk(
  "getAllParts",
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