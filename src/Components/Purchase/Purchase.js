import React, { useEffect, useState } from "react";
import useProductsDetail from "../../Hooks/useProductsDetail";
import "./Purchase.css";
import bg from "../../Assets/detail.jpg";
import plus from "../../Assets/plus.png";
import minus from "../../Assets/minus.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const [products] = useProductsDetail();
  const {
    _id,
    productName,
    price,
    minQuantity,
    aviQuantity,
    description,
    rating,
    img,
  } = products;

  const parsedPrice = parseInt(price);
  const [inputValue, setInputValue] = useState(0);

  useEffect(() => {
    setInputValue(minQuantity);
  }, [aviQuantity, minQuantity]);

  const checkValue = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };

  const increaseValue = () => {
    setInputValue((prev) => parseInt(prev) + 1);
  };

  const decreaseValue = () => {
    if (inputValue === minQuantity) {
      return;
    } else {
      setInputValue((prev) => parseInt(prev) - 1);
    }
  };

  return (
    <div className="">
      <div
        style={{
          background: `url(${bg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="py-5"
      >
        <div className="lg:ml-28 py-10 ml-10 text-white">
          <h1 className="font-libreBasker font-medium text-6xl">
            Purchase Detail
          </h1>
          <h5 className="font-openSans text-xl font-medium py-5">
            Home{" "}
            <span className="font-montserrat font-light text-xl">
              / Purchase Detail / {productName}
            </span>
          </h5>
        </div>
      </div>

      <div class="py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center space-x-2 text-gray-400 text-sm">
            <Link to="/home" class="hover:underline hover:text-gray-600">
              Home
            </Link>
            <span>
              <svg
                class="h-5 w-5 leading-none text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
            <Link to="/products" class="hover:underline hover:text-gray-600">
              Carpenter Tools
            </Link>
            <span>
              <svg
                class="h-5 w-5 leading-none text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
            <span>{productName}</span>
          </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 lg:w-[50%] px-4">
              <div class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                <div class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                  <img src={img} className="w-full h-full rounded-lg" alt="" />
                </div>
              </div>
              <div class="md:flex-1 px-4">
                <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                  {productName}
                </h2>
                <p class="text-gray-500 text-sm">
                  By{" "}
                  <a href="#h" class="text-indigo-600 hover:underline">
                    Carpenco Company
                  </a>
                </p>

                <div class="flex items-center space-x-4 my-4">
                  <div>
                    <div class="rounded-lg bg-gray-100 flex py-2 px-3">
                      <span class="text-indigo-400 mr-1 mt-1">$</span>
                      <span class="font-bold text-indigo-600 text-3xl">
                        {price}
                      </span>
                    </div>
                  </div>
                  <div class="flex-1">
                    <p class="text-green-500 text-xl font-semibold">Save 12%</p>
                    <p class="text-gray-400 text-sm">Inclusive of all Taxes.</p>
                  </div>
                </div>
                <div className="flex items-center pb-3">
                  <div className="font-bold">
                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                    <FontAwesomeIcon
                      className="mr-3 text-warning"
                      icon={faStarHalfStroke}
                    />
                    {rating} (1,000+)
                  </div>
                </div>
                <p class="text-gray-500">{description}</p>
              </div>
            </div>
            <div className="lg:mx-0 mx-5 lg:w-[50%]">
              <div className="flex justify-center items-center lg:pl-20 lg:pt-0 pt-20">
                <div className="card w-fit bg-white drop-shadow-2xl">
                  <div className="card-body">
                    <h2 className="text-center font-montserrat font-medium text-4xl">
                      Confirm Your Purchase
                    </h2>
                    <form onSubmit="{handleSubmit}">
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text text-base	font-medium">
                            Name
                          </span>
                        </label>
                        <input
                          type="name"
                          name="name"
                          disabled
                          placeholder={user.displayName}
                          className="input input-bordered font-black input-success w-full"
                        />

                        <label className="label">
                          <span className="label-text text-base font-medium">
                            Email
                          </span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          disabled
                          placeholder={user.email}
                          className="input input-bordered font-black input-success w-full "
                        />

                        <label className="label">
                          <span className="label-text text-base	font-medium">
                            Phone Number
                          </span>
                        </label>
                        <input
                          type="number"
                          name="name"
                          placeholder="Enter your phone number"
                          className="input input-bordered input-success w-full"
                        />

                        <label className="label">
                          <span className="label-text text-base font-medium">
                            Address
                          </span>
                        </label>
                        <textarea
                          type="text"
                          name="message"
                          class="textarea textarea-success"
                          placeholder="Enter Your Address"
                        ></textarea>
                        <div className="flex mt-8">
                          <button
                            type="button"
                            className="w-20 mx-auto rounded-md"
                          >
                            <img
                              src={minus}
                              disabled={inputValue === minQuantity}
                              onClick={decreaseValue}
                              className={`w-10 mx-auto ${
                                inputValue === minQuantity && "text-gray-300"
                              }`}
                              alt=""
                            />
                          </button>
                          <input
                            className="input input-bordered border-gray-400 w-2/4 mx-auto font-bold text-xl text-center"
                            type="number"
                            min={minQuantity}
                            max={aviQuantity}
                            onChange={checkValue}
                            value={inputValue}
                            // {...register("amount", { required: true })}
                          />
                          <button
                            type="button"
                            className="w-20 mx-auto rounded-md"
                          >
                            <img
                              src={plus}
                              disabled={inputValue >= minQuantity}
                              onClick={increaseValue}
                              className={`w-10 mx-auto ${
                                inputValue >= minQuantity && "text-gray-300"
                              }`}
                              alt=""
                            />
                          </button>
                        </div>
                      </div>
                      <input
                        className="btn mt-8 w-full  text-white"
                        type="submit"
                        value="Submit Purchase"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
