import { redirect, useLoaderData } from "react-router-dom";
import CourseDetails from "../Components/CourseDetails";

function CourseDetailsPage() {
  const course = useLoaderData();

  return <CourseDetails course={course} />;
}

export default CourseDetailsPage;

export async function courseDetailLoader({ params }) {
  const { courseId } = params;
  const response = await fetch(`http://localhost:3030/courses/${courseId}`);

  if (!response.ok) {
    throw new Error("Unable to get the details of course for id - ");
  }

  return response;
}

export async function courseDeleteAction({ request, params }) {
  const { courseId } = params;

  const response = await fetch(`http://localhost:3030/courses/${courseId}`, {
    method: request.method,
  });

  if (!response.ok) {
    throw new Error("Unable to delete course for " + courseId);
  }

  return redirect("/courses");
}
