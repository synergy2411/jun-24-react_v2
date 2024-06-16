import { json, redirect, useRouteLoaderData } from "react-router-dom";
import CourseDetails from "../Components/CourseDetails";

function CourseDetailsPage() {
  // const course = useLoaderData();

  const course = useRouteLoaderData("course-loader");

  return <CourseDetails course={course} />;
}

export default CourseDetailsPage;

export async function courseDetailLoader({ params }) {
  const { courseId } = params;
  const response = await fetch(`http://localhost:3030/courses/${courseId}`);

  if (!response.ok) {
    throw json(
      {
        message: "Unable to load course for " + courseId,
      },
      { status: 401 }
    );
  }

  return response;
}

export async function courseDeleteAction({ request, params }) {
  const { courseId } = params;

  const response = await fetch(`http://localhost:3030/courses/${courseId}`, {
    method: request.method,
  });

  console.log("DELETE ACTION : ", courseId);

  if (!response.ok) {
    throw json(
      {
        message: "Unable to delete course for " + courseId,
      },
      { status: 401 }
    );
  }

  return redirect("/");
}
