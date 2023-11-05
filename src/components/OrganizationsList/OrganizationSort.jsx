import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortByRating } from "../../store/reports/reportsSlice"; // Import getReports from the slice
import { getReports } from "../../store/reports/reportsActions";

const OrganizationSort = () => {
  const { sortByRating } = useSelector((state) => state.reports);
  const [sortBy, setSortBy] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSortByRating(sortBy));
    dispatch(getReports());
    console.log("a");
  }, [sortBy]);

  useEffect(() => {
    if (!sortByRating) {
      setSortBy("");
    }
  }, [sortByRating]);

  return (
    <select
      className="relative w-50 border border-gray-500 rounded p-2.5"
      onChange={(e) => {
        setSortBy(e.target.value);
      }}
      value={sortBy}
    >
      <option value="">Без сортировки</option>
      <option value="asc">По убыванию</option>
      <option value="desc">По возрастанию</option>
    </select>
  );
};

export default OrganizationSort;
