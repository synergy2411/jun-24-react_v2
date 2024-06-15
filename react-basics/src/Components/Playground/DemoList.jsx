import { useMemo, useDeferredValue, useEffect } from "react";

function DemoList({ input }) {
  const defferedInput = useDeferredValue(input);

  const memoizedList = useMemo(() => {
    let list = [];
    for (let i = 1; i <= 20000; i++) {
      list.push(<div key={i}>{defferedInput}</div>);
    }
    return list;
  }, [defferedInput]);

  useEffect(() => {
    console.log("INPUT : ", input);
    console.log("DEFERRED :", defferedInput);
  }, [input, defferedInput]);

  return memoizedList;
}

export default DemoList;
