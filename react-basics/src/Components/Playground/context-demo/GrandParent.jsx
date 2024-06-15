import Parent from "./Parent";

function GrandParent() {
  return (
    <>
      <h1>Grand Parent</h1>
      <Parent />
    </>
  );
}

export default GrandParent;
