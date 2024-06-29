import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <nav>
        <ul className="flex items-center gap-5 max-w-screen-md mx-auto justify-center p-5 my-10 border-2 border-indigo-500 rounded-md">
          <li>
            <NavLink end to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink end to="/dashboard" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Admin
            </NavLink>
          </li>
          <li>
            <NavLink to="products" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="users" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
