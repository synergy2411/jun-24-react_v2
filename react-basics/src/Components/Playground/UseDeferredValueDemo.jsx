import { useState } from "react";
import DemoList from "./DemoList";

function UseDeferredValueDemo() {
  const [input, setInput] = useState("");

  return (
    <>
      <h1>Use Deferred Value in Action</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <DemoList input={input} />
    </>
  );
}

export default UseDeferredValueDemo;
