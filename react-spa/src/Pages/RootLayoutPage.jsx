import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

function RootLayoutPage() {
  return (
    <div className="container">
      <Header />
      <br />
      <Outlet />
    </div>
  );
}

export default RootLayoutPage;
