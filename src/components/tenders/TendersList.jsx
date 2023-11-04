import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTenders } from "../../store/tenders/tendersActions";
import TenderItem from "./TenderItem";

import AOS from "aos";
import "aos/dist/aos.css";

const TendersList = () => {
  const { tenders, loading } = useSelector((state) => state.tenders);

  const dispatch = useDispatch();

  console.log(tenders);

  useEffect(() => {
    dispatch(getTenders());
    AOS.init();
  }, []);

  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {tenders.map((tender) => (
            <TenderItem key={tender.id} tender={tender} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TendersList;
