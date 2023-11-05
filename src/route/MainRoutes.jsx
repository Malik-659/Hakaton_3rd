import React from "react";
import { Route, Routes } from "react-router-dom";
import Map from "../components/maps/Map";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import ActiveCode from "../components/auth/ActiveCode";
import OrganizationPage from "../components/OrganizationsList/OrganizationPage";
import TendersPage from "../pages/TendersPage";
import CreateTender from "../components/tenders/CreateTender";
import Chart from "../components/chart/Chart";
import Helps from "../pages/Helps";
import HomePage from "../pages/HomePage/HomePage";
import Diogram from "../components/diogram/Diogram";
import MapDetails from "../components/maps/MapDetails";
import Lesson from "../components/lesson/Lesson";

const MainRoutes = () => {
  const ROUTES = [
    {
      id: 1,
      path: "/map",
      element: <Map />,
    },
    {
      id: 333,
      path: "/map/:id",
      element: <MapDetails />,
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
    {
      id: 4,
      path: "/organizations",
      element: <OrganizationPage />,
    },
    {
      id: 5,
      path: "/home",
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
      id: 26,
      path: "/dio",
      element: <Diogram />,
    },
    {
      id: 500,
      path: "/help",
      element: <Helps />,
    },
    {
      id: 501,
      path: "/lesson",
      element: <Lesson />,
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
