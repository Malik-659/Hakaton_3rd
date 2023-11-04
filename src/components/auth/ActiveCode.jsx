import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { activateCode } from "../../store/users/usersActions";

const ActiveCode = () => {
  const [user, setUser] = useState({ email: "", code: "" });

  const { loading, status } = useSelector((state) => state.users);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      {loading ? (
        <h1>Загрузка...</h1>
      ) : (
        <div>
          <h1>Активация аккаунта</h1>
          <input
            type="text"
            placeholder="email"
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="code"
            onChange={(e) => {
              setUser({ ...user, code: e.target.value });
            }}
          />
          <button
            onClick={() => {
              dispatch(activateCode({ user, navigate }));
            }}
          >
            Активировать
          </button>
        </div>
      )}
    </>
  );
};

export default ActiveCode;
