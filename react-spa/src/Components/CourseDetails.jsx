import { Form, useNavigate, useSubmit } from "react-router-dom";
import "./CourseDetails.css";

function CourseDetails({ course }) {
  const submit = useSubmit();
  const navigate = useNavigate();

  const deleteClickHandler = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-restricted-globals
    const proceed = confirm("Are you sure to delete course -" + course.title);
    if (!proceed) return;
    submit({}, { action: `/courses/${course.id}`, method: "DELETE" });
  };

  return (
    <div className="backdrop">
      <div className="my-modal">
        <div className="card">
          <img
            src={course.logo}
            style={{ width: "18rem" }}
            alt={course.title}
            className="card-img-top"
          />
          <div className="card-body">
            <div className="text-center">
              <div className="card-title">
                <h4 className="text-center">{course.title.toUpperCase()}</h4>
              </div>
              <div className="card-text">
                <p>Duration : {course.duration}Hrs</p>
              </div>
            </div>
            <Form>
              <div className="row">
                <div className="col-6">
                  <div className="d-grid">
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => {
                        navigate(`/courses/${course.id}/edit`);
                      }}
                    >
                      Edit
                    </button>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-grid">
                    <button
                      className="btn btn-danger"
                      onClick={deleteClickHandler}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
