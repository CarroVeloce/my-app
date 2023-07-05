import React from "react";

const Navigation = () => {
  return (
    <nav className="bg-red-700">
      <div className="flex items-center justify-between px-8 py-6">
        <div>
          <h1 className="text-white text-2xl font-bold">WARTEG T-34/85</h1>
        </div>
        <ul className="flex items-center space-x-8">
          <li>
            <a
              href="/"
              className="text-white hover:text-gray-300 font-semibold"
              style={{ borderBottom: '2px solid white' }}
            >
              Home
            </a>
          </li>
          
          <li>
            <a
              href="/menu"
              className="text-white hover:text-gray-300 font-semibold"
              style={{ borderBottom: '2px solid white' }}
            >
              Menu
            </a>
          </li>

          <li>
            <a
              href="/about"
              className="text-white hover:text-gray-300 font-semibold"
              style={{ borderBottom: '2px solid white' }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-white hover:text-gray-300 font-semibold"
              style={{ borderBottom: '2px solid white' }}
            >
              Profile
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
