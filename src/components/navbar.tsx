import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="flex items-center gap-5 max-w-screen-md mx-auto justify-center p-5 my-10 border-2 border-indigo-500 rounded-md">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
