import React from "react";
import { Route, Routes } from "react-router-dom";
import Map from "../components/maps/Map";
import TendersPage from "../pages/TendersPage";
import CreateTender from "../components/tenders/CreateTender";
import Chart from "../components/chart/Chart";
import HomePage from "../pages/HomePage/HomePage";

const MainRoutes = () => {
  const ROUTES = [
    {
      id: 1,
      path: "/map",
      element: <Map />,
    },
    {
      id: 2,
      path: "/login",
      element: "",
    },
    {
      id: 3,
      path: "/register",
      element: "",
    },
    {
      id: 4,
      path: "/",
      element: <HomePage />,
    },
    {
      id: 23,
      path: "/tenders",
      element: <TendersPage />,
    },
    {
      id: 24,
      path: "/createTender",
      element: <CreateTender />,
    },
    {
      id: 25,
      path: "/chart",
      element: <Chart />,
    },
  ];
  return (
    <Routes>
      {ROUTES.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
