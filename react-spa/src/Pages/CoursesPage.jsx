import { useLoaderData } from "react-router-dom";
import CourseItem from "../Components/CourseItem";

function CoursesPage() {
  const courses = useLoaderData();

  if (!courses) return <p>Loading...</p>;

  return (
    <>
      <h1>Courses Page</h1>
      <div className="row">
        {courses.map((course) => (
          <CourseItem course={course} key={course.id} />
        ))}
      </div>
    </>
  );
}

export default CoursesPage;

export async function coursesLoader() {
  const response = await fetch("http://localhost:3030/courses");
  if (!response.ok) {
    throw new Error("Uanble to fetch courses");
  }
  return response;
}
