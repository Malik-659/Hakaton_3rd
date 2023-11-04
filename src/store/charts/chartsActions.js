import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CHARTS_API } from "../../helpers/const";

export const getCharts = createAsyncThunk("charts/getCharts", async () => {
  const { data } = await axios.get(CHARTS_API);
  return data;
});
