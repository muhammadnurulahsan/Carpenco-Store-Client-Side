import React, { useEffect, useState } from "react";
import "./Purchase.css";
import bg from "../../Assets/detail.jpg";
import plus from "../../Assets/plus.png";
import minus from "../../Assets/minus.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
// import useUser from "./../../Hooks/useUser";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import useProductsDetail from "./../../Hooks/useProductsDetail";

const Purchase = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [products] = useProductsDetail({});
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  // const { data: userData } = useUser(user);

  const onSubmit = (data) => {
    const order = {
      img: img,
      name: productName,
      orderQuantity: inputValue,
      totalPrice: parsedPrice * inputValue,
      customer: user?.displayName,
      customerEmail: user?.email,
      address: data.address,
      phone: data.phone,
      orderStatus: "Uncomplete",
      paymentStatus: "Unpaid",
    };

    fetch("https://carpenco-store.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          const newQuantity = minQuantity - parseInt(inputValue);
          fetch(`https://carpenco-store.herokuapp.com/products/${id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({ newQuantity }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                swal({
                  title: "Success",
                  text: "Order has been placed successfully",
                  icon: "success",
                  button: "OK",
                });
                navigate("/dashboard/my-orders");
              }
            });
        } else {
          swal({
            title: "Error",
            text: "Something went wrong",
            icon: "error",
            button: "OK",
          });
        }
      });
  };

  const {
    img,
    price,
    rating,
    minQuantity,
    productName,
    aviQuantity,
    description,
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

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <Link to="/home" className="hover:underline hover:text-gray-600">
              Home
            </Link>
            <span>
              <svg
                className="h-5 w-5 leading-none text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
            <Link
              to="/products"
              className="hover:underline hover:text-gray-600"
            >
              Carpenter Tools
            </Link>
            <span>
              <svg
                className="h-5 w-5 leading-none text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
            <span>{productName}</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 lg:w-[50%] px-4">
              <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                <figure className="px-10 py-10 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                  <img className="rounded-xl" src={img} alt="Album" />
                </figure>
              </div>
              <div className="md:flex-1 mt-16 px-4">
                <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                  {productName}
                </h2>
                <p className="text-gray-500 text-sm">
                  By{" "}
                  <a href="#h" className="text-indigo-600 hover:underline">
                    Carpenco Company
                  </a>
                </p>

                <div className="flex items-center space-x-4 my-4">
                  <div>
                    <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                      <span className="text-indigo-400 mr-1 mt-1">$</span>
                      <span className="font-bold text-indigo-600 text-3xl">
                        {price}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-green-500 text-xl font-semibold">
                      Save 12%
                    </p>
                    <p className="text-gray-400 text-sm">
                      Inclusive of all Taxes.
                    </p>
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
                <p className="text-gray-500">{description}</p>
              </div>
            </div>
            <div className="lg:mx-0 mx-5 lg:w-[50%]">
              <div className="flex justify-center items-center lg:pl-20 lg:pt-0 pt-20">
                <div className="card w-fit bg-white drop-shadow-2xl">
                  <div className="card-body">
                    <h2 className="text-center font-montserrat font-medium text-4xl">
                      Confirm Your Purchase
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text text-base	font-medium">
                            Name
                          </span>
                        </label>
                        <input
                          type="name"
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
                          required
                          placeholder="Enter your phone number"
                          className="input input-bordered input-success w-full"
                          {...register("phone", { required: true })}
                        />

                        <label className="label">
                          <span className="label-text text-base font-medium">
                            Address
                          </span>
                        </label>
                        <textarea
                          type="text"
                          required
                          className="textarea textarea-success"
                          placeholder="Dhaka, Bangladesh"
                          {...register("address", { required: true })}
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
