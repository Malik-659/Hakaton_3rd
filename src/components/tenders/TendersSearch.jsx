import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchVal } from "../../store/tenders/tendersSlice";
import { getTenders } from "../../store/tenders/tendersActions";

const TendersSearch = () => {
  const { search } = useSelector((state) => state.tenders);

  const [searchValue, setSearchValue] = useState(search);
  const dispatch = useDispatch();

  useEffect(() => {
    setSearchValue(search);
  }, [search]);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Поиск..."
          className="search--input bg-white border-2 rounded border-gray-950 w-56 h-12"
          onChange={(e) => {
            setSearchValue(e.target.value);
            dispatch(setSearchVal({ search: e.target.value }));
            dispatch(getTenders());
          }}
          value={searchValue}
        />
      </div>
    </div>
  );
};

export default TendersSearch;
