import { createSlice } from "@reduxjs/toolkit";
import { getTenders, getCategories, getOneTender } from "./tendersActions";

const tendersSlice = createSlice({
  name: "tenders",
  initialState: {
    loading: false,
    products: [],
    oneProduct: null,
    currentPage: 1,
    totalPages: 1,
    currentCategory: "",
    search: "",
    categories: [],
  },
  reducers: {
    clearOneTenderState: (state) => {
      state.oneProduct = null;
    },
    changePage: (state, action) => {
      state.currentPage = action.payload.page;
    },
    changeCategory: (state, action) => {
      if (action.payload.category === "all") {
        state.currentCategory = "";
      } else {
        state.currentCategory = action.payload.category;
      }
      state.currentPage = 1;
    },
    setSearchVal: (state, action) => {
      state.search = action.payload.search;
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTenders.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTenders.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.data;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getTenders.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getOneTender.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneTender.fulfilled, (state, action) => {
        state.loading = false;
        state.oneProduct = action.payload;
      })
      .addCase(getOneTender.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  },
});

export const { clearOneTenderState, changePage, setSearchVal, changeCategory } =
  tendersSlice.actions;
export default tendersSlice.reducer;
