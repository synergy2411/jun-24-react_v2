import { useNavigate } from "react-router-dom";
import "./CourseItem.css";

function CourseItem({ course }) {
  const navigate = useNavigate();

  return (
    <div className="col-4" key={course.id}>
      <div
        className="card clickable"
        onClick={() => navigate(`/courses/${course.id}`)}
      >
        <div className="card-header">
          <h5 className="text-center">{course.title.toUpperCase()}</h5>
        </div>
      </div>
    </div>
  );
}

export default CourseItem;
