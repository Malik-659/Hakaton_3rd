import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearStatusState } from "../../store/users/usersSlice";
import { loginUser } from "../../store/users/usersActions";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { loading, status } = useSelector((state) => state.users);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
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
            <div className="max-w-sm mx-auto flex flex-col px-2 ">
              <div className="bg-white px-6 py-14 rounded shadow-md text-black w-full">
                <h3 className="mb-8 font-bold text-3xl text-center">
                  Авторизация
                </h3>
                <input
                  type="text"
                  className="border border-slate-300 w-full p-3 rounded mb-4"
                  placeholder="email"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
                <input
                  type="password"
                  className="border border-slate-300 w-full p-3 rounded mb-4"
                  placeholder="password"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
                <button
                  className="w-full text-center py-3 rounded bg-pink-500 font-bold text-white hover:bg-pink-700"
                  onClick={() => dispatch(loginUser({ user, navigate }))}
                >
                  Войти
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Login;
