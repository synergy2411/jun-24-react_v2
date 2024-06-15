import { useEffect, useLayoutEffect, useRef, useState } from "react";

function UseLayoutEffectDemo() {
  const [show, setShow] = useState(true);

  const btnRef = useRef(null);
  const popupRef = useRef(null);

  //   useEffect(() => {
  //     if (btnRef.current === null || popupRef.current === null) return;
  //     const { bottom } = btnRef.current.getBoundingClientRect();
  //     popupRef.current.style.bottom = `${bottom + 50}px`;
  //     alert("Effect Work");
  //   }, [show]);

  useLayoutEffect(() => {
    if (btnRef.current === null || popupRef.current === null) return;
    const { bottom } = btnRef.current.getBoundingClientRect();
    console.log(bottom);
    popupRef.current.style.bottom = `${bottom + 50}px`;
    console.log("Layout Effect Work");
    alert("Layout Effect");
  }, [show]);

  //   console.log("Outside Effect");

  return (
    <>
      <h1>Use Layout Effect Demo in action</h1>

      <button
        className="btn btn-primary"
        ref={btnRef}
        onClick={() => setShow(!show)}
      >
        Show popup
      </button>

      {show && (
        <div ref={popupRef} style={{ position: "fixed" }}>
          This is a pop up
        </div>
      )}
    </>
  );
}

export default UseLayoutEffectDemo;
