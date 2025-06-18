import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="p-4 shadow-md flex justify-between items-center bg-white dark:bg-gray-800">
      <NavLink to="/" className="text-xl font-bold dark:text-white">
        🛒 Shopping Cart
      </NavLink>
      <div className="flex items-center gap-4">
        <NavLink
          to="/cart"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
        >
          View Cart
        </NavLink>
        <NavLink
          to="/userInfo"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
        >
          User Info
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
