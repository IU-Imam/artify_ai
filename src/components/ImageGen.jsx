import React from "react";
import img_def from "../assets/img_def.png";

const ImageGen = () => {
  return (
    <div className="flex justify-center mt-8">
      <div class="cursor-pointer group relative flex flex-col items-center my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
        <div class="relative h-56 m-2.5 overflow-hidden text-black rounded-md">
          <img
            class="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
            src={img_def}
            alt="investment-seed-round"
          />
        </div>
        <div class="p-4 ">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Ask me anything..."
              className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent w-72"
            />
            <button className="px-4 py-2 bg-slate-500 text-white rounded-full shadow-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50 transition duration-200 ease-in-out flex items-center justify-center">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGen;
