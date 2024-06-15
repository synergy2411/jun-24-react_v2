import { useState, useCallback, useMemo } from "react";
import Output from "./Output";

function UseCallbackDemo() {
  const [toggle, setToggle] = useState(false);

  console.log("Callback Demo");

  const logFn = useCallback(() => console.log("Logging...."), []); // xixi0001 || xixi0002
  //   const logFn = () => console.log("Logging...."); // xixi0001 || xixi0002

  const marks = useMemo(() => [99, 98, 97, 95], []);

  return (
    <>
      <h1>Use Callback Demo in Action</h1>

      <button className="btn btn-primary" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>

      <hr />

      <Output toggle={true} logFn={logFn} marks={marks} />
    </>
  );
}

export default UseCallbackDemo;
