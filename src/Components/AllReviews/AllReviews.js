import React from "react";
import { useNavigate } from "react-router-dom";
import bg from "../../Assets/review.jpg";
import useReview from "../../Hooks/useReview";
import ReviewCard from "../Home/ReviewCard/ReviewCard";
import Loading from "../Loading/Loading";

const AllReviews = () => {
  const [reviews] = useReview();
  const navigate = useNavigate();
  return (
    <div>
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
          <h1 className="font-libreBasker font-medium text-6xl">All Reviews</h1>
          <h5 className="font-openSans text-xl font-medium py-5">
            Home
            <span className="font-montserrat font-light text-xl">
              / All Reviews
            </span>
          </h5>
        </div>
      </div>
      <div>
        <div className="container flex justify-center mx-auto pt-16">
          <div>
            <p className="text-gray-500 text-lg text-center font-normal py-6 uppercase">
              customer reviews
            </p>
            <h2 className="text-5xl text-center text-gray-800 font-bold  pb-16 uppercase">
              What's our <span className="text-teal-500">Customers say</span>
            </h2>
          </div>
        </div>
        {reviews?.length === 0 ? (
          <Loading></Loading>
        ) : (
          <div className="w-full bg-gray-100 px-10 pt-10 lg:pb-0">
            <div className="container mx-auto pt-14">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {reviews?.map((review) => (
                  <ReviewCard key={review._id} review={review}></ReviewCard>
                ))}
              </div>
            </div>
            <div className="lg:flex justify-center text-center lg:pb-16 pb-16">
              <button
                className="btn btn-outline px-20 lg:mr-10 lg:mb-0 mb-5"
                onClick={() => navigate("/home")}
              >
                Back To Home
              </button>
              <button
                className="btn btn-outline px-20"
                onClick={() => navigate("/dashboard/add-review")}
              >
                Write a Review
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllReviews;
