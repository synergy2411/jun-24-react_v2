import { useLoaderData } from "react-router-dom";

function CourseDetailsPage() {
  const course = useLoaderData();

  console.log("COurse : ", course);
  return (
    <>
      <h1>Course details coming soon...</h1>
    </>
  );
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
