import ThemeContext from "../../../context/theme-context";
import "./Child.css";

function Child() {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        return (
          <>
            <h3 className={context.theme}>Child Component</h3>

            {context.theme === "light" ? "Light Theme" : "Dark Theme"}
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default Child;
