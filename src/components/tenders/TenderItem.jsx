import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const TenderItem = ({ tender }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h4>Код тендера: {tender.code}</h4>
        <p>Организация: {tender.org}</p>
        <span>Локация: {tender.location}</span>
        <p>Сумма: {tender.sum}</p>
        <p>Тип тендера: {tender.type}</p>
      </div>
      <button
        onClick={() => {
          navigate(`tenders/${tender.id}`);
        }}
      >
        Подробнее...
      </button>
    </div>
  );
};

export default TenderItem;
