import { createSlice } from "@reduxjs/toolkit";
import { getReports } from "./reportsActions";
const reportsSlice = createSlice({
  name: "reports",
  initialState: {
    loading: false,
    reports: [],
    search: "",
    sumRange: "",
    sortByRating: "",
  },
  reducers: {
    setSearchVal: (state, action) => {
      state.search = action.payload.search;
    },
    clearAllFilters: (state) => {
      state.search = "";
      state.sumRange = "";
    },
    setSortByRating: (state, action) => {
      try {
        if (!action.payload) {
          state.sortByRating = "";
        } else {
          state.sortByRating = `&_sort=Sum&_order=${action.payload}`;
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReports.pending, (state) => {
        state.loading = true;
      })
      .addCase(getReports.fulfilled, (state, action) => {
        state.loading = false;
        state.reports = action.payload.data;
      })
      .addCase(getReports.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setSearchVal, setSortByRating, clearAllFilters } =
  reportsSlice.actions;
export default reportsSlice.reducer;
