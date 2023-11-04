import React from "react";
import { Route, Routes } from "react-router-dom";
import Map from "../components/maps/Map";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Camera from "../components/auth/Camera";
import ActiveCode from "../components/auth/ActiveCode";
import OrganizationsList from "../components/OrganizationsList/OrganizationsList";
import TendersPage from "../pages/TendersPage";
import CreateTender from "../components/tenders/CreateTender";
import Chart from "../components/chart/Chart";
import Helps from "../pages/Helps";
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
      element: <Login />,
    },
    {
      id: 3,
      path: "/register",
      element: <Register />,
    },
    { id: 776, path: "/activeCode", element: <ActiveCode /> },
    { id: 778, path: "/webcam", element: <Camera /> },
    {
      id: 4,
      path: "/organizations",
      element: <OrganizationsList />,
    },
    {
      id: 5,
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
    {
      id: 500,
      path: "/helps",
      element: <Helps />,
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
