import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearStatusState } from "../../store/users/usersSlice";
import { registerUser } from "../../store/users/usersActions";
import { updateToken } from "../../helpers/function";
import Camera from "./Camera";
import Error from "./Error";
import Graphs from "../ui/Graphs";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirm: "",
  });
  const [openModal, setOpenModal] = useState(false);

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
            <Error />
          ) : (
            <section className="bg-white flex w-full">
              <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <main className=" flex items-center justify-center ml-8 px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                  <div className="max-w-xl lg:max-w-3xl">
                    <h2 className="mt-5 mb-10 text-6xl font-bold text-gray-900">
                      Регистрация
                    </h2>

                    <p className="mt-4 leading-relaxed text-gray-500">
                      "Добро пожаловать! Пожалуйста, зарегистрируйтесь, чтобы
                      начать использовать наш сервис."
                    </p>
                    <button onClick={() => setOpenModal(true)}>
                      Заполнить данные по паспорту
                    </button>
                    <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="FirstName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First Name
                        </label>

                        <input
                          type="text"
                          id="FirstName"
                          name="first_name"
                          onChange={(e) => {
                            setUser({ ...user, firstName: e.target.value });
                          }}
                          className="mt-1 p-1 border-2 w-72 border-slate-300 rounded-md bg-white text-sm text-gray-700 shadow-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="LastName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last Name
                        </label>

                        <input
                          type="text"
                          id="LastName"
                          name="last_name"
                          onChange={(e) => {
                            setUser({ ...user, lastName: e.target.value });
                          }}
                          className="mt-1 p-1 border-2 w-72 border-slate-300 rounded-md bg-white text-sm text-gray-700 shadow-sm"
                        />
                      </div>

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
                          className="mt-1 p-1 border-2 w-96  border-slate-300 rounded-md bg-white text-sm text-gray-700 shadow-sm"
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
                          className="mt-1 w-72 p-1 border-2  border-slate-300 rounded-md bg-white text-sm text-gray-700 shadow-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="PasswordConfirmation"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Password Confirmation
                        </label>

                        <input
                          type="password"
                          id="PasswordConfirmation"
                          name="password_confirmation"
                          onChange={(e) => {
                            setUser({
                              ...user,
                              passwordConfirm: e.target.value,
                            });
                          }}
                          className="mt-1 p-1 border-2 w-72  border-slate-300 rounded-md bg-white text-sm text-gray-700 shadow-sm"
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
                          onClick={() => {
                            handleClick();
                          }}
                          className="inline-block shrink-0 border-[5px] rounded-[25px] border-purple-950 bg-purple-950 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-purple-950 focus:outline-none focus:ring active:text-blue-500"
                        >
                          Создать аккаунт
                        </button>

                        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                          Уже есть аккаунт? <Link to="/login">Войти</Link>.
                        </p>
                      </div>
                    </form>
                  </div>
                </main>
                <div>{openModal && <Camera setOpenModal={setOpenModal} />}</div>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
};

export default Register;
