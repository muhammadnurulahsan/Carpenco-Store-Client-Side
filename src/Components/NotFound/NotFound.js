import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div class="h-screen bg-gray-50 flex items-center">
        <div class="flex flex-col md:flex-row items-center justify-between lg:mx-28 text-gray-700">
          <div class="lg:w-1/2 ">
            <div class="text-7xl text-green-500 font-dark font-extrabold mb-8">
              404
            </div>
            <p class="text-2xl md:text-3xl font-light mb-14">
              Sorry we couldn't find the page <br /> you're looking for!
            </p>

            <Link
              to="/home"
              class="px-5 inline uppercase font-bold py-3 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-green-600 active:bg-red-600 hover:bg-red-700"
            >
              back to homepage
            </Link>
          </div>
          <div class="w-full lg:flex lg:justify-end lg:w-1/2 my-12">
            <img
              src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
              class=""
              alt="Page not found"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
