import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { REPORT_API } from "../../helpers/const";

export const getReports = createAsyncThunk(
  "reports/getReports",
  async (_, { getState }) => {
    const { search, sortByRating } = getState().reports;
    const searchParams = `?q=${search}`;
    const { data } = await axios.get(
      `${REPORT_API}${searchParams}${sortByRating}`
    );
    return { data };
  }
);
