import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

function RootLayoutPage() {
  return (
    <>
      <Header />
      <br />
      <Outlet />
    </>
  );
}

export default RootLayoutPage;
