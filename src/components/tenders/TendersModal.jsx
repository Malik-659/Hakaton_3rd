import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const TendersModal = ({ tender }) => {
  const tenderDet = tender.opening[0];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="zoom-out"
      data-aos-duration="2000"
      style={{
        zIndex: "10000",
        position: "fixed",
        top: "10%",
        left: "35%",
        background: "white",
        color: "#121212",
        borderRadius: "10px ",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        width: "50%",
        border: "1px solid black",
      }}
    >
      <h2 className="font-bold text-xl">ИНФОРМАЦИЯ О ВСКРЫТИИ</h2>
      <p>Организация: {tenderDet.organize}</p>
      <p>Место на тендере: {tenderDet.place}ое</p>
      <p>Цена предложения: {tenderDet.price_min}</p>
      <p>Планируемая сумма: {tenderDet.price_org}</p>
    </div>
  );
};

export default TendersModal;
