import { useSyncExternalStore } from "react";

// const subscribe = (listener) => {
//   console.log(listener);
//   window.addEventListener("online", listener);
//   window.addEventListener("offline", listener);

//   return () => {
//     window.removeEventListener("online", listener);
//     window.removeEventListener("offline", listener);
//   };
// };

// const getSnapshot = () => {
//   return navigator.onLine;
// };

const subscribe = (listener) => {
  window.addEventListener("resize", listener);
  return () => window.removeEventListener("resize", listener);
};

const getSnapshot = () => {
  return window.innerWidth;
};
function UseSyncExternalStoreDemo() {
  //   const isOnline = useSyncExternalStore(subscribe, getSnapshot);
  const width = useSyncExternalStore(subscribe, getSnapshot);

  return (
    <>
      <h1>Sync External Store in Action</h1>
      <h4>Window Size = {width}</h4>
      {/* <p>{isOnline ? "Connected" : "Disconneted"}</p> */}
    </>
  );
}

export default UseSyncExternalStoreDemo;
