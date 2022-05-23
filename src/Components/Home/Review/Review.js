import React from "react";
import useReview from "../../../Hooks/useReview";
import ReviewCard from "../ReviewCard/ReviewCard";
import { useNavigate } from "react-router-dom";
import Loading from "../../Loading/Loading";

const Review = () => {
  const [reviews] = useReview();
  const navigate = useNavigate();
  return (
    <div class="mb-16">
      <div class="container flex justify-center mx-auto pt-16">
        <div>
          <p class="text-gray-500 text-lg text-center font-normal py-6 uppercase">
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
        <div class="w-full bg-gray-100 px-10 pt-10 lg:pb-0">
          <div class="container mx-auto pt-14">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {reviews?.slice(0, 6).map((review) => (
                <ReviewCard key={review._id} review={review}></ReviewCard>
              ))}
            </div>
          </div>
          <div className="lg:flex justify-center text-center lg:pb-16 pb-16">
            <button
              className="btn btn-outline px-20 lg:mr-10 lg:mb-0 mb-5"
              onClick={() => navigate("/all-reviews")}
            >
              See All Reviews
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
  );
};

export default Review;
