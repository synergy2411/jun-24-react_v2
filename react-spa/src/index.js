import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

import HomePage from "./Pages/HomePage";
import CoursesPage from "./Pages/CoursesPage";

const router = createBrowserRouter([
  {
    path: "/", // http://localhost:3000
    element: <HomePage />,
  },
  {
    path: "/courses",
    element: <CoursesPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
