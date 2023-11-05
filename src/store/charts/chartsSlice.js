import { createSlice } from "@reduxjs/toolkit";
import { getCharts, getOneChart } from "./chartsActions";

const chartsSlice = createSlice({
  name: "charts",
  initialState: {
    loading: false,
    charts: [],
    oneChart: []
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
      })
      .addCase(getOneChart, (state, action)=>{
        state.loading = false;
        state.oneChart = action.payload.data;
      })
  },
});

export default chartsSlice.reducer;
