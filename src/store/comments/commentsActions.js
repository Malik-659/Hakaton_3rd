
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import _ from "lodash";
import { COMMENT_API } from "../../helpers/const";

export const getComments = createAsyncThunk(
  "comments/getComments",
  async () => {
    const { data } = await axios.get(COMMENT_API);
    return data;
  }
);

export const postComment = createAsyncThunk(
  "comments/postComment",
  async (comObj, { dispatch }) => {
    await axios.post(COMMENT_API, comObj);
    dispatch(getComments());
  }
);


