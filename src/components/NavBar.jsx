import React from "react";
import logo from "../../public/artify.png";
const NavBar = () => {
  return (
    <nav className="bg-transparent  py-2 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <img className="w-24 h-auto object-scale-down" src={logo} alt="Logo" />
        <span className="text-2xl font-semibold text-slate-600">Artify AI</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center items-center">
        <button
          className="px-4 py-2 sm:px-5 sm:py-2 bg-transparent text-slate-500 border
     border-slate-600 rounded-lg hover:bg-slate-600 hover:text-white focus:outline-none transition duration-200 w-full sm:w-auto text-base sm:text-sm"
        >
          Log In
        </button>
        <button className="px-4 py-2 sm:px-5 sm:py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 w-full sm:w-auto text-base sm:text-sm">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
