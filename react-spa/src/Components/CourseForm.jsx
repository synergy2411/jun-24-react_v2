import { useRef } from "react";
import { Form, useSubmit } from "react-router-dom";

function CourseForm({ course }) {
  const titleRef = useRef();
  const durationRef = useRef();
  const logoRef = useRef();

  const submit = useSubmit();

  const addClickHandler = (event) => {
    event.preventDefault();
    const formData = {
      title: titleRef.current.value,
      duration: durationRef.current.value,
      logo: logoRef.current.value,
    };

    let options = {
      action: "/courses/new",
      method: "POST",
    };

    if (course) {
      options = {
        action: `/courses/${course.id}/edit`,
        method: "PATCH",
      };
    }

    submit(formData, options);
  };

  return (
    <>
      <Form>
        {/* title */}
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="title"
            id="title"
            placeholder=""
            ref={titleRef}
            defaultValue={course && course.title}
          />
          <label htmlFor="title">Title</label>
        </div>

        {/* duration */}
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            name="duration"
            id="duration"
            placeholder=""
            ref={durationRef}
            defaultValue={course && course.duration}
          />
          <label htmlFor="duration">Duration</label>
        </div>

        {/* logo */}
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="logo"
            id="logo"
            placeholder=""
            ref={logoRef}
            defaultValue={course && course.logo}
          />
          <label htmlFor="logo">Logo</label>
        </div>
        {/* buttons */}

        <div className="row">
          <div className="col-6">
            <div className="d-grid">
              <button className="btn btn-primary" onClick={addClickHandler}>
                {course ? "Edit" : "Add"}
              </button>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
}

export default CourseForm;
