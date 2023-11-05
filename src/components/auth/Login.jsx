import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { clearStatusState } from "../../store/users/usersSlice";
import { loginUser } from "../../store/users/usersActions";
import Error from "./Error";
import Graphs from "../ui/Graphs";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { loading, status } = useSelector((state) => state.users);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      {loading ? (
        <h1>Загрузка...</h1>
      ) : (
        <>
          {status ? (
            <Error />
          ) : (
            <section className="bg-white flex w-full ">
              <div className="lg:grid lg:min-h-screen lg:grid-cols-12  ">
                <aside className="relative block lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
                  <div className="w-[800px] h-[700px]">
                    <Graphs />
                  </div>
                </aside>
                <main className=" flex items-center justify-center ml-8 px-8 sm:px-12 lg:col-span-7 lg:px-16  xl:col-span-6">
                  <div className="max-w-xl lg:max-w-3xl">
                    <h2 className="mt-6 text-6xl font-bold text-gray-900">
                      Авторизация
                    </h2>

                    <p className="mt-4 leading-relaxed text-gray-500">
                      "Добро пожаловать! Пожалуйста, войдите в свой аккаунт,
                      чтобы начать использовать наш сервис."
                    </p>

                    <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                      <div className="col-span-6">
                        <label
                          htmlFor="Email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email
                        </label>

                        <input
                          type="email"
                          id="Email"
                          name="email"
                          onChange={(e) => {
                            setUser({ ...user, email: e.target.value });
                          }}
                          className="mt-1 w-96 p-1 border-slate-300 border-2 rounded-md border-solid bg-white text-sm text-gray-700 shadow-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="Password"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Password
                        </label>

                        <input
                          type="password"
                          id="Password"
                          name="password"
                          onChange={(e) => {
                            setUser({ ...user, password: e.target.value });
                          }}
                          className="mt-1 p-1 border-2 w-96  border-slate-300 rounded-md bg-white text-sm text-gray-700 shadow-sm"
                        />
                      </div>

                      <div className="col-span-6">
                        <label
                          htmlFor="MarketingAccept"
                          className="flex gap-4"
                        ></label>
                      </div>

                      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                        <button
                          onClick={() =>
                            dispatch(loginUser({ user, navigate }))
                          }
                          className="inline-block shrink-0 border-[5px] rounded-[25px] border-purple-950 bg-purple-950 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-purple-950 focus:outline-none focus:ring active:text-blue-500"
                        >
                          Войти
                        </button>

                        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                          Еще нет аккаунта? <Link to="/register">Создать</Link>.
                        </p>
                      </div>
                    </form>
                  </div>
                </main>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
};

export default Login;
