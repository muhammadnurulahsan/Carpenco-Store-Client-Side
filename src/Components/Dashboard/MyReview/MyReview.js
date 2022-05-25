import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import ReviewCard from "../../Home/ReviewCard/ReviewCard";
import loading from "../../../Assets/loading.gif";

const MyReview = () => {
  const [reviews, setReviews] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`https://carpenco-store.herokuapp.com/reviews?email=${user?.email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setReviews(data);
      });
  }, [user?.email]);
  return (
    <div className="p-12 font-montserrat">
      {reviews?.length > 0 ? (
        <div className="">
          <div className="underline">
            <h2 className="text-5xl text-center pb-20 text-gray-800 font-bold ">
              My <span className="text-blue-600">All Review</span>
            </h2>
          </div>
          <div
            className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-12"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            {reviews?.map((review) => (
              <ReviewCard key={review.id} review={review}></ReviewCard>
            ))}
          </div>
        </div>
      ) : (
        <>
          {isLoading === true ? (
            <div className="text-center py-3">
              <div
                style={{ height: "40vh" }}
                className="flex justify-center items-center"
              >
                <img src={loading} alt="" />
              </div>
              <h1 className="text-2xl font-bold">
                Data is loading, Please wait.....
              </h1>
            </div>
          ) : (
            <div className="py-5 lg:pt-52 text-center">
              <h2 className="text-2xl text-center font-bold">
                You Haven't Added Any Review Yet! <br /> Please Review Now.
              </h2>
              <div className="py-3">
                <Link to="/dashboard/add-review">
                  <button className="btn btn-warning btn-outline px-4 py-2">
                    Add Review
                    <FontAwesomeIcon
                      icon={faSquarePlus}
                      className="ml-3"
                      style={{ fontSize: "1.5rem" }}
                    />
                  </button>
                </Link>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MyReview;
