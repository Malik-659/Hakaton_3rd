import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Stack } from "@mui/material";
import { Pagination } from "@mui/material";
import { getTenders } from "../../store/tenders/tendersActions";
import { changePage } from "../../store/tenders/tendersSlice";

export default function PaginationControlled() {
  const { currentPage, totalPages } = useSelector((state) => state.tenders);
  const dispatch = useDispatch();

  const handleChange = (event, value) => {
    dispatch(changePage({ page: value }));
    dispatch(getTenders());
  };
  return (
    <Stack sx={{ marginTop: "0" }} className="pagination">
      <Pagination
        className="paginationBody"
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
      />
    </Stack>
  );
}
