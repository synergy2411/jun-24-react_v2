import { redirect } from "react-router-dom";
import CourseForm from "../Components/CourseForm";

function NewCoursePage() {
  return (
    <>
      <h1 className="text-center">Add New Course Here</h1>
      <CourseForm />
    </>
  );
}

export default NewCoursePage;

export async function createCourseAction({ request }) {
  const data = await request.formData();

  const newCourse = {
    title: data.get("title"),
    duration: data.get("duration"),
    logo: data.get("logo"),
  };

  const response = await fetch("http://localhost:3030/courses", {
    method: request.method,
    body: JSON.stringify(newCourse),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Unable to create new course");
  }

  return redirect("/courses");
}
