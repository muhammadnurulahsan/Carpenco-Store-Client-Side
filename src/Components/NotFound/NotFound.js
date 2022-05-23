import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="h-screen bg-gray-50 flex items-center">
        <div className="flex flex-col md:flex-row items-center justify-between lg:mx-28 text-gray-700">
          <div className="lg:w-1/2 ">
            <div className="text-7xl text-green-500 font-dark font-extrabold mb-8">
              404
            </div>
            <p className="text-2xl md:text-3xl font-light mb-14">
              Sorry we couldn't find the page <br /> you're looking for!
            </p>

            <Link
              to="/home"
              className="px-5 inline uppercase font-bold py-3 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-green-600 active:bg-red-600 hover:bg-red-700"
            >
              back to homepage
            </Link>
          </div>
          <div className="w-full lg:flex lg:justify-end lg:w-1/2 my-12">
            <img
              src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
              className=""
              alt="Page not found"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
