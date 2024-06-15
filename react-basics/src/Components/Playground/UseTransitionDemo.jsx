import { useState, useTransition } from "react";

const getProducts = () => {
  const products = [];

  for (let i = 1; i <= 30000; i++) {
    products.push("Product " + i);
  }
  return products;
};

function UseTransitionDemo() {
  const [input, setInput] = useState("");
  const [products, setProducts] = useState(getProducts());

  const [isPending, startTransition] = useTransition();

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
    startTransition(() => {
      let filteredProducts = getProducts().filter((product) =>
        product.includes(e.target.value)
      );
      setProducts(filteredProducts);
    });
  };

  return (
    <>
      <h1>Use Transition Demo in action</h1>

      <input type="text" value={input} onChange={inputChangeHandler} />
      <hr />
      {isPending && <p>Loading....</p>}
      {!isPending &&
        products.map((product) => <div key={product}>{product}</div>)}
    </>
  );
}

export default UseTransitionDemo;
