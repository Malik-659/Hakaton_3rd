import React from "react";
import { useNavigate } from "react-router-dom";
import TendersList from "../components/tenders/TendersList";

const TendersPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <TendersList />
      </div>
      <button
        onClick={() => {
          navigate("/createTender");
        }}
      >
        Создать
      </button>
    </div>
  );
};

export default TendersPage;
