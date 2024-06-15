import { useContext } from "react";
import Child from "./Child";
import ThemeContext, {
  ThemeContextProvider,
} from "../../../context/theme-context";

function Parent() {
  const themeContext = useContext(ThemeContext);

  return (
    <>
      {/* <ThemeContext.Provider value={{ theme: "dark" }}> */}
      <h2>Parent Component</h2>
      <button className="btn btn-primary" onClick={themeContext.toggleTheme}>
        Toggle Theme
      </button>
      <Child />
      {/* </ThemeContext.Provider> */}
    </>
  );
}

export default Parent;
