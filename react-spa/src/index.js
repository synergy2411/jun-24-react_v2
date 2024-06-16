import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import "./index.css";

// import CourseDetailsPage, {
//   courseDeleteAction,
//   courseDetailLoader,
// } from "./Pages/CourseDetailsPage";
import CourseEditPage, { courseEditAction } from "./Pages/CourseEditPage";
// import CoursesPage, { coursesLoader } from "./Pages/CoursesPage";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import NewCoursePage, { createCourseAction } from "./Pages/NewCoursePage";
import RootLayoutPage from "./Pages/RootLayoutPage";
import {
  courseDeleteAction,
  courseDetailLoader,
} from "./Pages/CourseDetailsPage";

const CoursesPage = React.lazy(() =>
  import("./Pages/CoursesPage").then((m) => m)
);

const CourseDetailsPage = React.lazy(() =>
  import("./Pages/CourseDetailsPage").then((m) => m)
);

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
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <CoursesPage />
          </Suspense>
        ),
        loader: () =>
          import("./Pages/CoursesPage").then((m) => m.coursesLoader()),
      },
      {
        path: "/courses/:courseId",
        loader: courseDetailLoader,
        action: courseDeleteAction,
        id: "course-loader",
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <CourseDetailsPage />
              </Suspense>
            ),
          },
          {
            path: "edit",
            element: <CourseEditPage />,
            action: courseEditAction,
          },
        ],
      },

      {
        path: "/courses/new",
        element: <NewCoursePage />,
        action: createCourseAction,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}></RouterProvider>);
