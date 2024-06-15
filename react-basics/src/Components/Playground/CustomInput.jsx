import React, { useImperativeHandle, useRef } from "react";

function CustomInput(props, ref) {
  const okBtnRef = useRef();
  const cancelBtnRef = useRef();

  useImperativeHandle(
    ref,
    () => {
      return {
        okBtnRef: () => okBtnRef.current.focus(),
        cancelBtnRef: () => cancelBtnRef.current.focus(),
      };
    },
    []
  );

  return (
    <>
      <input type="text" ref={okBtnRef} />
      {/* <button ref={okBtnRef} className="btn btn-success">
        OK
      </button> */}
      <button ref={cancelBtnRef} className="btn btn-danger">
        Cancel
      </button>
    </>
  );
}

export default React.forwardRef(CustomInput);
