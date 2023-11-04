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
            <section className="bg-white">
              <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
                  <img
                    alt="Pattern"
                    src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </aside>

                <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                  <div className="max-w-xl lg:max-w-3xl">
                    <h2 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                      Регистрация...
                    </h2>

                    <p className="mt-4 leading-relaxed text-gray-500">
                      "Добро пожаловать! Пожалуйста, зарегистрируйтесь, чтобы
                      начать использовать наш сервис."
                    </p>

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
                          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
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
                          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
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
                          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
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
                          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
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
                          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
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
                          className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                        >
                          Создать аккаунт...
                        </button>

                        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                          Уже есть аккаунт? <Link to="/login">Войти</Link>.
                        </p>
                      </div>
                    </form>
                  </div>
                </main>
              </div>
            </section>
            // <div>
            //   <h1>Регистрация</h1>
            //   <input
            //     placeholder="email"
            //     type="text"
            //     onChange={(e) => {
            //       setUser({ ...user, email: e.target.value });
            //     }}
            //   />
            //   <input
            //     placeholder="first name"
            //     type="text"
            //     onChange={(e) => {
            //       setUser({ ...user, firstName: e.target.value });
            //     }}
            //   />
            //   <input
            //     placeholder="last name"
            //     type="text"
            //     onChange={(e) => {
            //       setUser({ ...user, lastName: e.target.value });
            //     }}
            //   />
            //   <input
            //     placeholder="password"
            //     type="password"
            //     onChange={(e) => {
            //       setUser({ ...user, password: e.target.value });
            //     }}
            //   />
            //   <input
            //     placeholder="password confirm"
            //     type="password"
            //     onChange={(e) => {
            //       setUser({ ...user, passwordConfirm: e.target.value });
            //     }}
            //   />
            //   <button
            //     onClick={() => {
            //       handleClick();
            //     }}
            //   >
            //     Создать аккаунт
            //   </button>
            //   <p>
            //     Уже есть аккаунт? <Link to="/login">Войти</Link>
            //   </p>
            // </div>
          )}
        </>
      )}
    </>
  );
};

export default Register;
