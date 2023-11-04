import React from "react";
import { Route, Routes } from "react-router-dom";
import Map from "../components/maps/Map";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import AllCameras from "../components/auth/AllCameras";
import Camera from "../components/auth/Camera";
import ActiveCode from "../components/auth/ActiveCode";

const MainRoutes = () => {
  const ROUTES = [
    {
      id: 1,
      path: "/",
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
    { id: 777, path: "/webcam", element: <AllCameras /> },
    { id: 778, path: "/webcamScreenshot", element: <Camera /> },
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
