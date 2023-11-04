import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  createTender,
  getCategories,
} from "../../store/tenders/tendersActions";

const CreateTender = () => {
  const { categories } = useSelector((state) => state.tenders);

  const [tender, setTender] = useState({
    code: "",
    org: "",
    location: "",
    sum: 0,
    type: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div>
      <input
        type="text"
        placeholder="Код тендера"
        onChange={(e) => setTender({ ...tender, code: e.target.value })}
      />
      <input
        type="text"
        placeholder="Организация"
        onChange={(e) => setTender({ ...tender, org: e.target.value })}
      />
      <input
        type="text"
        placeholder="Локация"
        onChange={(e) => setTender({ ...tender, location: e.target.value })}
      />
      <input
        type="number"
        placeholder="Сумма"
        onChange={(e) => setTender({ ...tender, sum: e.target.value })}
      />
      <select onChange={(e) => setTender({ ...tender, type: e.target.value })}>
        <option disabled>Выберите тип тендера</option>
        {categories.map((category) => (
          <option value={category}>{category}</option>
        ))}
      </select>
      <button
        onClick={() => {
          dispatch(createTender({ tender }));
          navigate("/tenders");
        }}
      >
        Добавить
      </button>
    </div>
  );
};

export default CreateTender;
