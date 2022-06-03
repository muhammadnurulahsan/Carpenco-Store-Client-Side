import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import avatar from "../../../Assets/review-avatar.png";

const ReviewCard = ({ review }) => {
  const { img, name, email, rating, reviewText } = review;
  return (
    <div>
      <div className="relative lg:mb-16 lg:mt-16 mt-10 mb-16 sm:mb-24">
        <div className="rounded overflow-hidden shadow-md bg-white">
          <div className="absolute -mt-20 w-full flex justify-center">
            <div className="h-32 w-32">
              {!img ? (
                <img
                  className="rounded-full object-cover h-full w-full shadow-2xl"
                  src={avatar}
                  alt=""
                />
              ) : (
                <img
                  className="rounded-full object-cover h-full w-full shadow-2xl"
                  src={img}
                  alt=""
                />
              )}
            </div>
          </div>
          <div className="px-6 mt-16">
            <h1 className="font-bold text-3xl text-center">{name}</h1>
            <p className="text-gray-800 my-2 text-sm text-center">{email}</p>
            <div className="flex justify-center">
              {Array.from(Array(parseInt(rating)), (e, i) => (
                <FontAwesomeIcon
                  icon={faStar}
                  size="lg"
                  key={i}
                  className="w-6 text-yellow-500"
                />
              ))}
            </div>
            <p className="text-center text-gray-600 text-base pt-3 font-normal">
              {reviewText}
            </p>
            <div className="w-full flex justify-center pt-5 pb-5">
              <a target="blank" href="https://github.com" className="mx-5">
                <div aria-label="Github" role="img">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </div>
              </a>
              <a target="blank" href="https://twitter.com" className="mx-5">
                <div aria-label="Twitter" role="img">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-twitter"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </div>
              </a>
              <a
                target="blank"
                href="https://www.instagram.com"
                className="mx-5"
              >
                <div aria-label="Instagram" role="img">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-instagram"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    // </div>
  );
};

export default ReviewCard;
