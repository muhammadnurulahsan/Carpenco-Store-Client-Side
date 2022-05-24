import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const AddReview = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const [currentValue, setCurrentValue] = useState(0);
  const stars = Array(5).fill(0);
  const handleClick = (value) => {
    setCurrentValue(value);
  };
  const onSubmit = (data) => {
    const reviewData = {
      name: user?.displayName,
      email: user?.email,
      rating: currentValue,
      reviewText: data.review,
      img: user?.photoURL,
    };

    fetch("https://carpenco-store.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessTOken")}`,
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setCurrentValue();
          swal({
            title: "Success",
            text: "Thanks For Your Valuable Feedback!",
            icon: "success",
            button: "OK",
          });
          navigate("/dashboard/my-reviews");
        }
      });
  };
  return (
    <div className="flex justify-center items-center pt-20">
      <div className="card lg:w-[40%] w-fit bg-white drop-shadow-2xl">
        <div className="card-body">
          <h2 className="text-center font-montserrat font-medium  text-4xl">
            Add Review
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-base	font-medium">Name</span>
              </label>
              <input
                type="name"
                disabled
                placeholder={user?.displayName}
                className="input input-bordered input-success w-full"
              />

              <label className="label">
                <span className="label-text text-base font-medium">Email</span>
              </label>
              <input
                disabled
                placeholder={user?.email}
                className="input input-bordered input-success w-full "
              />
              <div className="flex justify-start pt-3 items-center space-x-2">
                <h1 className="text-base font-medium">Rating:</h1>
                {stars.map((e, i) => {
                  return (
                    <FontAwesomeIcon
                      icon={faStar}
                      size="lg"
                      alt=""
                      key={i}
                      className={`cursor-pointer ${
                        currentValue > i ? "text-yellow-400" : "text-gray-200"
                      }`}
                      onClick={() => handleClick(i + 1)}
                    />
                  );
                })}
              </div>
              <label className="label">
                <span className="label-text text-base font-medium">
                  Review Text
                </span>
              </label>
              <textarea
                type="text"
                name="message"
                className="textarea textarea-success"
                placeholder="Enter Review Text"
                {...register("review", {
                  required: true,
                })}
              ></textarea>
            </div>
            <input
              className="btn mt-8 w-full  text-white"
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
