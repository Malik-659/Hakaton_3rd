import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearStatusState } from "../../store/users/usersSlice";
import { registerUser } from "../../store/users/usersActions";
import { updateToken } from "../../helpers/function";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirm: "",
  });

  const { loading, status } = useSelector((state) => state.users);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(registerUser({ user, navigate }));
  };

  useEffect(() => {
    updateToken();
    dispatch(clearStatusState());
  }, []);

  return (
    <>
      {loading ? (
        <h1>Загрузка...</h1>
      ) : (
        <>
          {status ? (
            <>
              <h1>Что-то пошло не так...</h1>
              <button
                onClick={() => {
                  dispatch(clearStatusState());
                }}
              >
                Назад
              </button>
            </>
          ) : (
            <div>
              <h1>Регистрация</h1>
              <input
                placeholder="email"
                type="text"
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
              />
              <input
                placeholder="first name"
                type="text"
                onChange={(e) => {
                  setUser({ ...user, firstName: e.target.value });
                }}
              />
              <input
                placeholder="last name"
                type="text"
                onChange={(e) => {
                  setUser({ ...user, lastName: e.target.value });
                }}
              />
              <input
                placeholder="password"
                type="password"
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}
              />
              <input
                placeholder="password confirm"
                type="password"
                onChange={(e) => {
                  setUser({ ...user, passwordConfirm: e.target.value });
                }}
              />
              <button
                onClick={() => {
                  handleClick();
                }}
              >
                Создать аккаунт
              </button>
              <p>
                Уже есть аккаунт? <Link to="/login">Войти</Link>
              </p>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Register;
