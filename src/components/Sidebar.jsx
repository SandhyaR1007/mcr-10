import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <ul className="flex flex-col gap-10 ">
      <li className="text-gray-400 font-semibold text-lg p-4">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          Dashboard
        </NavLink>
      </li>
      <li className="text-gray-400 font-semibold text-lg p-4">
        <NavLink
          to="/departments"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          Departments
        </NavLink>
      </li>
      <li className="text-gray-400 font-semibold text-lg p-4">
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          Products
        </NavLink>
      </li>
    </ul>
  );
};

export default Sidebar;
