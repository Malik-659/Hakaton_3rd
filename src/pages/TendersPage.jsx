import React from "react";
import { useNavigate } from "react-router-dom";

const TendersPage = () => {
  const navigate = useNavigate();
  return (
    <div>
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
