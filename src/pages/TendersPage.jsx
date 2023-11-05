import React, { useEffect } from "react";
import TendersList from "../components/tenders/TendersList";
import TendersFilter from "../components/tenders/TendersFilter";
import TendersSearch from "../components/tenders/TendersSearch";
import PaginationControlled from "../components/tenders/TendersPagination";

import AOS from "aos";
import "aos/dist/aos.css";

const TendersPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div style={{ width: "70%", margin: "50px auto" }}>
      <h2
        data-aos="fade-down"
        data-aos-duration="2000"
        style={{ textAlign: "center", fontSize: "42px", letterSpacing: "1px" , color: "black"}}
      >
        СПИСОК ТЕНДЕРОВ
      </h2>
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div data-aos="fade-up-right" data-aos-duration="2000">
          <TendersFilter />
        </div>
        <div data-aos="zoom-in-up" data-aos-duration="2000">
          <PaginationControlled />
        </div>
        <div data-aos="fade-down-left" data-aos-duration="2000">
          <TendersSearch />
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>
        <TendersList />
        <div
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
          }}
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <PaginationControlled />
        </div>
      </div>
      {/* <div>
        <button
          style={{}}
          onClick={() => {
            navigate("/createTender");
          }}
        >
          Создать
        </button>
      </div> */}
    </div>
  );
};

export default TendersPage;
