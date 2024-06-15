import React from "react";

function Output({ toggle, logFn }) {
  console.log("Output");
  logFn();

  return (
    <>
      <h2>Output Component</h2>
      {toggle && <p>This paragraph will toggle.</p>}
    </>
  );
}

export default React.memo(Output);

// Compare prevProps and currProps
// prevProps.toggle === currProps.toggle
// prevProps.logFn === currProps.logFn
// - true : does not re-render the component
// - false : re-render the component
