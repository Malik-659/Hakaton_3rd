import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getTotalPages } from "../../helpers/function";
import { TENDERS_API } from "../../helpers/const";

export const getTenders = createAsyncThunk(
  "tenders/getTenders",
  async (_, { getState }) => {
    const { currentPage, currentCategory, search } = getState().tenders;
    const categoryAndSearchParams = `q=${search}${
      currentCategory && `&type=${currentCategory}`
    }`;
    const pagesLimitParams = `?_page=${currentPage}&_limit=8`;
    const totalPages = await getTotalPages(
      `${TENDERS_API}?${categoryAndSearchParams}`
    );

    const { data } = await axios.get(
      `${TENDERS_API}${pagesLimitParams}&${categoryAndSearchParams}`
    );
    return { data, totalPages };
  }
);

export const getOneTender = createAsyncThunk(
  "tenders/getOneTender",
  async ({ id }) => {
    const { data } = await axios.get(`${TENDERS_API}/${id}`);
    return data;
  }
);

export const createTender = createAsyncThunk(
  "tenders/createTender",
  async ({ tender }, { dispatch }) => {
    await axios.post(TENDERS_API, tender);
    dispatch(getTenders());
  }
);

export const getCategories = createAsyncThunk(
  "tenders/getCategories",
  async () => {
    const { data } = await axios.get(TENDERS_API);
    const uniqueCategories = new Set(data.map((tender) => tender.type));
    const categories = [];
    for (let i of uniqueCategories) {
      categories.push(i);
    }
    return categories;
  }
);
