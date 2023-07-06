import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname ? "border-b-2" : "";
  };

  return (
    <nav className="bg-red-700 sticky top-0 z-10">
    {/* <nav className="bg-red-700"> */}
      <div className="flex items-center justify-between px-8 py-6">
        <div>
          <h1 className="text-white text-2xl font-bold">WARTEG T-34/85</h1>
        </div>
        <ul className="flex items-center space-x-8">
          <li>
            <Link
              to="/"
              className={`text-white font-semibold hover:text-gray-300 ${isActive("/")}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className={`text-white font-semibold hover:text-gray-300 ${isActive("/menu")}`}
            >
              Menu
            </Link>
          </li>
          
          <li>
            <Link
              to="/review"
              className={`text-white font-semibold hover:text-gray-300 ${isActive("/review")}`}
            >
              Review
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`text-white font-semibold hover:text-gray-300 ${isActive("/about")}`}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
