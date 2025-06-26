import { createSlice } from "@reduxjs/toolkit";

import {
  getAllParts,
  getTimePeriodByAdmin,
  addNewVehicleByAdmin,
  updateVehicleByAdmin,
  deleteVehicleByAdmin,
  getAllVehiclesByAdmin,
  addNewTechnicianByAdmin,
  updateTechnicianByAdmin,
  deleteTechnicianByAdmin,
  updateTimePeriodByAdmin,
  getAllTechniciansByAdmin,
  getDashboardStatsByAdmin,
  readPdfFileForAutoFilling,
  getAllDeliveredVehiclesByAdmin,
  getVehicleDetailsByVinNumberByAdmin,
} from "./adminApi";

export const adminSlice = createSlice({
  name: "adminSlice",
  initialState: {
    email: "",
    user: null,
    token: null,
    error: null,
    success: null,
    loading: "idle",
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTechniciansByAdmin.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getAllTechniciansByAdmin.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(getAllTechniciansByAdmin.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(addNewTechnicianByAdmin.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(addNewTechnicianByAdmin.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(addNewTechnicianByAdmin.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(updateTechnicianByAdmin.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(updateTechnicianByAdmin.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(updateTechnicianByAdmin.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(deleteTechnicianByAdmin.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(deleteTechnicianByAdmin.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(deleteTechnicianByAdmin.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(getAllVehiclesByAdmin.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getAllVehiclesByAdmin.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(getAllVehiclesByAdmin.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(addNewVehicleByAdmin.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(addNewVehicleByAdmin.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(addNewVehicleByAdmin.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(getVehicleDetailsByVinNumberByAdmin.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getVehicleDetailsByVinNumberByAdmin.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(getVehicleDetailsByVinNumberByAdmin.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(updateVehicleByAdmin.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(updateVehicleByAdmin.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(updateVehicleByAdmin.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(deleteVehicleByAdmin.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(deleteVehicleByAdmin.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(deleteVehicleByAdmin.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(updateTimePeriodByAdmin.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(updateTimePeriodByAdmin.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(updateTimePeriodByAdmin.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(getTimePeriodByAdmin.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getTimePeriodByAdmin.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(getTimePeriodByAdmin.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(getDashboardStatsByAdmin.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getDashboardStatsByAdmin.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(getDashboardStatsByAdmin.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(getAllDeliveredVehiclesByAdmin.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getAllDeliveredVehiclesByAdmin.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(getAllDeliveredVehiclesByAdmin.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(readPdfFileForAutoFilling.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(readPdfFileForAutoFilling.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(readPdfFileForAutoFilling.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(getAllParts.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getAllParts.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(getAllParts.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export default adminSlice.reducer;
