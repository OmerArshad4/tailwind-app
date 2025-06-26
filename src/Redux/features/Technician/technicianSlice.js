import { createSlice } from "@reduxjs/toolkit";
import {
  updateVehicleStatusByTechnician,
  getAllAssignedVehiclesByTechnician,
} from "./technicianApi";

export const technicianSlice = createSlice({
  name: "technicianSlice",
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
      .addCase(getAllAssignedVehiclesByTechnician.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getAllAssignedVehiclesByTechnician.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(getAllAssignedVehiclesByTechnician.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(updateVehicleStatusByTechnician.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(updateVehicleStatusByTechnician.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(updateVehicleStatusByTechnician.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export default technicianSlice.reducer;
