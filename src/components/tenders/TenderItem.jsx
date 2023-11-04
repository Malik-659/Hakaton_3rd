import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

const TenderItem = ({ tender }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="flip-up"
      data-aos-duration="1000"
      style={{
        padding: "10px",
        display: "flex",
        border: "1px solid purple",
        borderRadius: "5px",
        backgroundColor: "#f3e7ff",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <p>Код тендера: {tender.code}</p>
        <p>Организация: {tender.org}</p>
        <p>Локация: {tender.location}</p>
        <p>Сумма: {tender.sum}</p>
        <p>Тип тендера: {tender.type}</p>
      </div>
      <div style={{ position: "absolute", bottom: "10px ", right: "10px" }}>
        <button
          onClick={() => {
            navigate(`tenders/${tender.id}`);
          }}
        >
          Подробнее...
        </button>
      </div>
    </div>
  );
};

export default TenderItem;
