import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getTenders } from "../../store/tenders/tendersActions";
import { changeCategory } from "../../store/tenders/tendersSlice";

const TendersFilter = () => {
  const { categories, currentCategory } = useSelector((state) => state.tenders);
  const [category, setCategory] = useState("Все");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    dispatch(changeCategory({ category }));
    dispatch(getTenders());
  }, [category]);

  useEffect(() => {
    if (!currentCategory) {
      setCategory("Все");
    }
  }, [currentCategory]);

  return (
    <div>
      <div>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Все">Все</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TendersFilter;
