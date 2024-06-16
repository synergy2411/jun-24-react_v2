import { useSelector } from "react-redux";
import LoginPage from "./Components/Auth/LoginPage";
import Todos from "./Components/Todos/Todos";

function App() {
  const { token } = useSelector((store) => store.authReducer);
  return (
    <>
      <h1>App Works!</h1>
      <LoginPage />
      {token && <Todos />}
    </>
  );
}

export default App;
