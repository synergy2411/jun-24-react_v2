import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import "./index.css";

import CourseDetailsPage, {
  courseDetailLoader,
} from "./Pages/CourseDetailsPage";
import CoursesPage, { coursesLoader } from "./Pages/CoursesPage";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import RootLayoutPage from "./Pages/RootLayoutPage";

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/", // http://localhost:3000
        element: <HomePage />,
      },
      {
        path: "/courses",
        element: <CoursesPage />,
        loader: coursesLoader,
      },
      {
        path: "/courses/:courseId",
        element: <CourseDetailsPage />,
        loader: courseDetailLoader,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}></RouterProvider>);
