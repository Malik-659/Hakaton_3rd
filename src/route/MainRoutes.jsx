import React from "react";
import { Route } from "react-router-dom";

const MainRoutes = () => {
  const ROUTES = [
    {
      id: 1,
      path: "/",
      element: "",
    },
  ];
  return (
    <>
      {ROUTES.map((route) => {
        <Route key={route.id} path={route.path} element={route.element} />;
      })}
    </>
  );
};

export default MainRoutes;
