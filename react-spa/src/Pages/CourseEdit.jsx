import { redirect, useLoaderData } from "react-router-dom";
import CourseForm from "../Components/CourseForm";

function CourseEdit() {
  const course = useLoaderData();
  return (
    <>
      <h1 className="text-center">Edit Course Here</h1>
      <CourseForm course={course} />
    </>
  );
}

export default CourseEdit;

export async function courseEditLoader({ params }) {
  const { courseId } = params;
  const response = await fetch(`http://localhost:3030/courses/${courseId}`);

  if (!response.ok) {
    throw new Error("Unable to get the details of course for id - ");
  }

  return response;
}

export async function courseEditAction({ params, request }) {
  const { courseId } = params;
  const data = await request.formData();

  const editedCourse = {
    title: data.get("title"),
    duration: data.get("duration"),
    logo: data.get("logo"),
  };

  const response = await fetch(`http://localhost:3030/courses/${courseId}`, {
    method: request.method,
    body: JSON.stringify(editedCourse),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Unable to create new course");
  }

  return redirect("/courses");
}
