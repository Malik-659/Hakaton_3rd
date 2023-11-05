import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import TendersModal from "./TendersModal";

const TenderItem = ({ tender }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);

  const toggleMenu = () => {
    setModal(!modal);
  };

  function closeModal() {
    setModal(false);
  }

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="flip-left"
      data-aos-duration="2000"
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
        <p>Дата добавления: {tender.adding_date} </p>
        <p>Дата окончания: {tender.data_end} </p>
        <p>Продукт: {tender.product} </p>
        <p>Сумма: {tender.sum} сом</p>
        <p>Тип тендера: {tender.type}</p>
      </div>
      <div style={{ position: "absolute", bottom: "10px ", right: "10px" }}>
        <button onClick={toggleMenu} style={{ color: "purple" }}>
          Протокол вскрытия
          {modal && (
            <div>
              <TendersModal closeModal={closeModal} tender={tender} />
              <div className="overlay" onClick={closeModal}></div>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default TenderItem;
