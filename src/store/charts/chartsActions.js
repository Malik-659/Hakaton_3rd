import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CIRCLE_API } from "../../helpers/const";

export const getCharts = createAsyncThunk("charts/getCharts", async () => {
  const { data } = await axios.get(CIRCLE_API);
  return data;
});

export const getOneChart = createAsyncThunk(
  "charts/getOneChart",
  async (countre, { dispatch }) => {
    try {
      const data = await dispatch(getCharts());
      const res = data.payload.filter((item) => item.countre === countre);

      console.log(res);
      return res;
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
      throw error;
    }
  }
);
