import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import "./index.css";

import CourseDetailsPage, {
  courseDeleteAction,
  courseDetailLoader,
} from "./Pages/CourseDetailsPage";
import CoursesPage, { coursesLoader } from "./Pages/CoursesPage";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import RootLayoutPage from "./Pages/RootLayoutPage";
import NewCoursePage, { createCourseAction } from "./Pages/NewCoursePage";
import CourseEdit, {
  courseEditAction,
  courseEditLoader,
} from "./Pages/CourseEdit";

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // http://localhost:3000
        element: <HomePage />,
      },
      {
        path: "/courses", // http://localhost:3000/#/courses
        element: <CoursesPage />,
        loader: coursesLoader,
      },
      {
        path: "/courses/:courseId",
        element: <CourseDetailsPage />,
        loader: courseDetailLoader,
        action: courseDeleteAction,
      },
      {
        path: "/courses/new",
        element: <NewCoursePage />,
        action: createCourseAction,
      },
      {
        path: "/courses/:courseId/edit",
        element: <CourseEdit />,
        loader: courseEditLoader,
        action: courseEditAction,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}></RouterProvider>);
