import { useRef } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../../store/slices/todos";

function AddTodo() {
  const labelRef = useRef();
  const dispatch = useDispatch();

  const addClickHandler = (e) => {
    e.preventDefault();
    if (labelRef.current.value.trim() === "") return;
    dispatch(createTodo(labelRef.current.value));
    labelRef.current.value = "";
  };

  return (
    <>
      <div className="row">
        <div className="col-8">
          <input type="text" className="form-control" ref={labelRef} />
        </div>
        <div className="col-4">
          <div className="d-grid">
            <button
              className="btn btn-primary"
              type="button"
              onClick={addClickHandler}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
