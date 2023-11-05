import { createSlice } from "@reduxjs/toolkit";
import { getCharts } from "./chartsActions";

const chartsSlice = createSlice({
  name: "charts",
  initialState: {
    loading: false,
    charts: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCharts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCharts.fulfilled, (state, action) => {
        state.loading = false;
        state.charts = action.payload;
      })
      .addCase(getCharts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default chartsSlice.reducer;
