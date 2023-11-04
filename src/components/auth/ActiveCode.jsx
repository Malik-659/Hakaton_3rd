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
        <div className="flex  flex-col max-w-md m-auto p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
          <div className="mb-8 text-center ">
            <h2 className="my-3 text-4xl font-bold">Проверка аккаунта...</h2>
            <p className="text-sm dark:text-gray-400">Войдите в аккаунт...</p>
          </div>
          <form novalidate="" action="" className="space-y-12">
            <div className="space-y-4">
              <div>
                <label for="email" className="block mb-2 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder=".............."
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                  onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                  }}
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label for="password" className="text-sm">
                    Password
                  </label>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline dark:text-gray-400"
                  >
                    Забыли пароль?
                  </a>
                </div>
                <input
                  type="text"
                  name="password"
                  id="password"
                  placeholder="code..."
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                  onChange={(e) => {
                    setUser({ ...user, code: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="button"
                  className="w-full bg-blue-600 px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
                  onClick={() => {
                    dispatch(activateCode({ user, navigate }));
                  }}
                >
                  Активировать...
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ActiveCode;
