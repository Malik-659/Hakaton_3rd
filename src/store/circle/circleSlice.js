import { createSlice } from "@reduxjs/toolkit";
import { filterCircle, getCircle } from "./circleAction";

const circleSlice = createSlice({
  name: "circles",
  initialState: {
    loading: false,
    circle: [],
    filterCir: [],
    oneCircle: null,
    status: "",
  },
  reducers: {},
  extraReducers: (builders) => {
    builders
      .addCase(getCircle.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCircle.fulfilled, (state, action) => {
        state.loading = false;
        state.circle = action.payload;
        // console.log(state.circle);
      })
      .addCase(getCircle.rejected, (state) => {
        state.loading = false;
        state.status = "error";
      })
      .addCase(filterCircle.fulfilled, (state, action) => {
        state.loading = false;
        state.filterCir = action.payload;
      });
  },
});

export default circleSlice.reducer;
