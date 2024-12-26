import React from "react";
import logo from "../../public/artify.png";
const NavBar = () => {
  return (
    <nav className="bg-transparent  py-2 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <img className="w-24 h-auto object-scale-down" src={logo} alt="Logo" />
        <span className="text-2xl font-semibold text-stone-600">Artify AI</span>
      </div>

      <div className="flex space-x-6">
        <button
          className="px-6 py-2 bg-transparent text-stone-500 border
           border-stone-600 rounded-lg
            hover:bg-stone-600 hover:text-white focus:outline-none transition duration-200"
        >
          Log In
        </button>
        <button className="px-6 py-2 bg-stone-600 text-white rounded-lg hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
