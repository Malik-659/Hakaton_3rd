import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { clearStatusState } from "../../store/users/usersSlice";
import { loginUser } from "../../store/users/usersActions";
import Error from "./Error";

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
                <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
                  <img
                    alt="Pattern"
                    src=""
                    className="absolute inset-0 h-auto w-full object-cover"
                  />
                </aside>
                <main className=" flex items-center justify-center ml-8 px-8 sm:px-12 lg:col-span-7 lg:px-16  xl:col-span-6">
                  <div className="max-w-xl lg:max-w-3xl">
                    <h2 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                      Авторизация...
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
                          className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
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
            // <div className="flex  flex-col max-w-md m-auto p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
            //   <div className="mb-8 text-center ">
            //     <h2 className="my-3 text-4xl font-bold">Войти</h2>
            //     <p className="text-sm dark:text-gray-400">
            //       Войдите в аккаунт...
            //     </p>
            //   </div>
            //   <form novalidate="" action="" className="space-y-12">
            //     <div className="space-y-4">
            //       <div>
            //         <label for="email" className="block mb-2 text-sm">
            //           Email
            //         </label>
            //         <input
            //           type="email"
            //           name="email"
            //           id="email"
            //           placeholder="leroy@jenkins.com"
            //           className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            //           onChange={(e) =>
            //             setUser({ ...user, email: e.target.value })
            //           }
            //         />
            //       </div>
            //       <div>
            //         <div className="flex justify-between mb-2">
            //           <label for="password" className="text-sm">
            //             Password
            //           </label>
            //           <a
            //             rel="noopener noreferrer"
            //             href="#"
            //             className="text-xs hover:underline dark:text-gray-400"
            //           >
            //             Забыли пароль?
            //           </a>
            //         </div>
            //         <input
            //           type="password"
            //           name="password"
            //           id="password"
            //           placeholder="*****"
            //           className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            //           onChange={(e) =>
            //             setUser({ ...user, password: e.target.value })
            //           }
            //         />
            //       </div>
            //     </div>
            //     <div className="space-y-2">
            //       <div>
            //         <button
            //           type="button"
            //           className="w-full bg-blue-600 px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
            //           onClick={() => dispatch(loginUser({ user, navigate }))}
            //         >
            //           Войти
            //         </button>
            //       </div>
            //       <p
            //         onClick={() => navigate("/register")}
            //         className="px-6 text-sm text-center dark:text-gray-400"
            //       >
            //         У вас нет аккаунта..?
            //         <a
            //           rel="noopener noreferrer"
            //           href="#"
            //           className="hover:underline dark:text-violet-400"
            //         >
            //           Зарегистрируйтесь
            //         </a>
            //         .
            //       </p>
            //     </div>
            //   </form>
            // </div>
          )}
        </>
      )}
    </>
  );
};

export default Login;
