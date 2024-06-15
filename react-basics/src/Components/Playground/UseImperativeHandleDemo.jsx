import { useRef } from "react";
import CustomInput from "./CustomInput";

function UseImperativeHandleDemo() {
  const theRef = useRef();

  return (
    <>
      <h1>Use Imperative Handler in Action</h1>
      <button
        className="btn btn-secondary"
        onClick={() => theRef.current.okBtnRef()}
      >
        Focus OK Button
      </button>
      <button
        className="btn btn-dark"
        onClick={() => theRef.current.cancelBtnRef()}
      >
        Focus Cancel Button
      </button>
      <hr />
      <CustomInput ref={theRef} />

      {/* <input type="text" ref={theRef} className="form-control" /> */}
    </>
  );
}

export default UseImperativeHandleDemo;
