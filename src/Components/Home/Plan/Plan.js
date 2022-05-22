import React from "react";

const Plan = () => {
  return (
    <div>
      <section class="w-full py-20 bg-gray-50 font-montserrat">
        <div class="px-10 mx-auto max-w-7xl">
          <h2 class="text-5xl text-center font-bold text-blue-600">
            Flexible <span class="text-gray-800">Plans</span>
          </h2>
          <p class="mt-3 text-center text-lg text-gray-500">
            Our flexible plans are Customer to meet the needs of any plans.
          </p>
          <div class="grid gap-5 mt-12 lg:grid-cols-3 md:grid-cols-2">
            <div class="relative flex flex-col justify-between p-8 lg:p-6 xl:p-8 rounded-2xl">
              <div class="absolute inset-0 w-full h-full transform translate-x-2 translate-y-2 bg-green-50 rounded-2xl"></div>
              <div class="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-2xl"></div>
              <div class="relative flex pb-5 border-b border-gray-200">
                <svg
                  class="w-16 h-16 text-green-400 rounded-2xl"
                  viewBox="0 0 150 150"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <rect x="0" y="0" width="150" height="150" rx="15"></rect>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <mask fill="#fff">
                      <use xlinkHref="#plan1"></use>
                    </mask>
                    <use fill="currentColor" xlinkHref="#plan1"></use>
                    <circle
                      fill-opacity=".3"
                      fill="#FFF"
                      mask="url(#plan1)"
                      cx="125"
                      cy="25"
                      r="50"
                    ></circle>
                    <path
                      fill-opacity=".3"
                      fill="#FFF"
                      mask="url(#plan1)"
                      d="M-33 83H67v100H-33z"
                    ></path>
                  </g>
                </svg>
                <div class="relative text-center lg:ml-8 flex flex-col items-start">
                  <h3 class="text-xl font-bold">Basic Plan</h3>
                  <p class="tracking-tight text-gray-500">
                    <span class="text-sm transform inline-block -translate-y-2.5 relative">
                      $
                    </span>
                    <span class="text-3xl font-bold text-gray-800">10</span>
                    <span class="text-sm -translate-y-0.5 inline-block transform">
                      / user
                    </span>
                  </p>
                </div>
              </div>

              <ul class="relative py-12 space-y-3">
                <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                  <svg
                    class="w-6 h-6 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Minimum Order 100PS</span>
                </li>
                <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                  <svg
                    class="w-6 h-6 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Fast Delivery</span>
                </li>
                <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                  <svg
                    class="w-6 h-6 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Priority Email Support</span>
                </li>
              </ul>

              <a
                href="#_"
                class="relative flex items-center justify-center w-full px-5 py-5 text-lg font-medium text-white rounded-xl group"
              >
                <span class="w-full h-full absolute inset-0 transform translate-y-1.5 translate-x-1.5 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ease-out duration-200 rounded-xl bg-green-500"></span>
                <span class="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-xl"></span>
                <span class="relative">Choose Plan</span>
                <svg
                  class="w-5 h-5 ml-2 transition-all duration-200 ease-out transform group-hover:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div class="relative p-8 lg:p-6 xl:p-8 rounded-2xl">
              <div class="absolute inset-0 w-full h-full transform translate-x-2 translate-y-2 bg-blue-50 rounded-2xl"></div>
              <div class="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-2xl"></div>
              <div class="relative flex pb-5 border-b border-gray-200">
                <svg
                  class="w-16 h-16 text-indigo-400 rounded-2xl"
                  viewBox="0 0 150 150"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <rect x="0" y="0" width="150" height="150" rx="15"></rect>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <mask fill="#fff">
                      <use xlinkHref="#plan1"></use>
                    </mask>
                    <use fill="currentColor" xlinkHref="#plan1"></use>
                    <circle
                      fill-opacity=".3"
                      fill="#FFF"
                      mask="url(#plan1)"
                      cx="125"
                      cy="25"
                      r="50"
                    ></circle>
                    <path
                      fill-opacity=".3"
                      fill="#FFF"
                      mask="url(#plan1)"
                      d="M-33 83H67v100H-33z"
                    ></path>
                  </g>
                </svg>
                <div class="relative flex text-center lg:ml-4 flex-col items-start">
                  <h3 class="lg:text-xl text-[15px] font-bold">
                    Professional Plan
                  </h3>
                  <p class="tracking-tight text-gray-500">
                    <span class="text-sm transform inline-block -translate-y-2.5 relative">
                      $
                    </span>
                    <span class="text-3xl font-bold text-gray-800">25</span>
                    <span class="text-sm -translate-y-0.5 inline-block transform">
                      / user
                    </span>
                  </p>
                </div>
              </div>

              <ul class="relative py-12 space-y-3">
                <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                  <svg
                    class="w-6 h-6 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Minimum Order 50PS</span>
                </li>
                <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                  <svg
                    class="w-6 h-6 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Brand New Product</span>
                </li>
                <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                  <svg
                    class="w-6 h-6 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Super Fast Delivery</span>
                </li>
                <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                  <svg
                    class="w-6 h-6 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Priority Email &amp; Chat Support</span>
                </li>
              </ul>

              <a
                href="#_"
                class="relative flex items-center justify-center w-full px-5 py-5 text-lg font-medium text-white rounded-xl group"
              >
                <span class="w-full h-full absolute inset-0 transform translate-y-1.5 translate-x-1.5 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ease-out duration-200 rounded-xl bg-blue-600"></span>
                <span class="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-xl"></span>
                <span class="relative">Choose Plan</span>
                <svg
                  class="w-5 h-5 ml-2 transition-all duration-200 ease-out transform group-hover:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div class="relative flex flex-col justify-between p-8 lg:p-6 xl:p-8 rounded-2xl md:col-span-2 lg:col-span-1">
              <div class="absolute inset-0 w-full h-full transform translate-x-2 translate-y-2 bg-red-50 rounded-2xl"></div>
              <div class="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-2xl"></div>
              <div class="relative flex pb-5 border-b border-gray-200">
                <svg
                  class="w-16 h-16 text-red-400 rounded-2xl"
                  viewBox="0 0 150 150"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <rect x="0" y="0" width="150" height="150" rx="15"></rect>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <mask fill="#fff">
                      <use xlinkHref="#plan1"></use>
                    </mask>
                    <use fill="currentColor" xlinkHref="#plan1"></use>
                    <circle
                      fill-opacity=".3"
                      fill="#FFF"
                      mask="url(#plan1)"
                      cx="125"
                      cy="25"
                      r="50"
                    ></circle>
                    <path
                      fill-opacity=".3"
                      fill="#FFF"
                      mask="url(#plan1)"
                      d="M-33 83H67v100H-33z"
                    ></path>
                  </g>
                </svg>
                <div class="relative flex text-center lg:ml-4 flex-col items-start">
                  <h3 class="lg:text-xl text-[15px] font-bold">
                    Enterprise Plan
                  </h3>
                  <p class="tracking-tight text-gray-500">
                    <span class="text-sm transform inline-block -translate-y-2.5 relative">
                      $
                    </span>
                    <span class="text-3xl font-bold text-gray-800">35</span>
                    <span class="text-sm -translate-y-0.5 inline-block transform">
                      / user
                    </span>
                  </p>
                </div>
              </div>

              <ul class="relative py-12 space-y-3">
                <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                  <svg
                    class="w-6 h-6 text-red-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Minimum Order 20PS</span>
                </li>
                <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                  <svg
                    class="w-6 h-6 text-red-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Premium &amp; Brand New Product</span>
                </li>
                <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                  <svg
                    class="w-6 h-6 text-red-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Super Express Delivery</span>
                </li>
                <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                  <svg
                    class="w-6 h-6 text-red-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Priority Phone &amp; Email Support</span>
                </li>
              </ul>

              <a
                href="#_"
                class="relative flex items-center justify-center w-full px-5 py-5 text-lg font-medium text-white rounded-xl group"
              >
                <span class="w-full h-full absolute inset-0 transform translate-y-1.5 translate-x-1.5 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ease-out duration-200 rounded-xl bg-red-400"></span>
                <span class="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-xl"></span>
                <span class="relative">Choose Plan</span>
                <svg
                  class="w-5 h-5 ml-2 transition-all duration-200 ease-out transform group-hover:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plan;
