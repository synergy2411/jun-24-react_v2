import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/courses">Courses</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
