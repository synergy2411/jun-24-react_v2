import { Link, json, useLoaderData } from "react-router-dom";
import CourseItem from "../Components/CourseItem";

function CoursesPage() {
  const courses = useLoaderData();

  console.log("COOURSES : ", courses);
  return (
    <>
      <h1>Courses Page</h1>
      <div className="row">
        <div className="col-4 offset-4">
          <div className="d-grid">
            <Link to="/courses/new" className="btn btn-dark">
              Add Course
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        {courses &&
          courses.map((course) => (
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
    throw json(
      {
        message: "Unable to load course list",
      },
      { status: 500 }
    );
  }
  return response;
}
