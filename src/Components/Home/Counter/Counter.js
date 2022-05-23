import verify from "../../../Assets/verify.png";
import visitor from "../../../Assets/team.png";
import review from "../../../Assets/review.png";
import box from "../../../Assets/box.png";
import React from "react";
import CountUp from "react-countup";
const Counter = () => {
  return (
    <div className="font-montserrat py-16">
      <div className="h-full overflow-y-auto">
        <div className="container mx-auto grid">
          <div className="grid gap-10 mb-8 md:grid-cols-2 xl:grid-cols-4 lg:mx-2 mx-7">
            <div className="flex items-center justify-center p-4 bg-white rounded-lg ">
              <div>
                <p className="mb-2 text-4xl font-bold text-center text-gray-800">
                  <div className="flex justify-center items-center">
                    <img src={box} className="w-20 mb-2" alt="" />
                  </div>
                  <CountUp end={17190} duration={40} />+
                </p>
                <p className="text-2xl font-medium text-gray-800">
                  PRODUCT FOR SALE
                </p>
              </div>
            </div>

            <div className="flex items-center  justify-center p-4 bg-white rounded-lg ">
              <div>
                <p className="mb-2 text-4xl font-bold text-center text-gray-800">
                  <div className="flex justify-center items-center">
                    <img src={review} className="w-20 mb-4" alt="" />
                  </div>
                  <CountUp end={11502} duration={40} />+
                </p>
                <p className="text-2xl font-medium text-gray-800">
                  SELLER REVIEWS
                </p>
              </div>
            </div>
            <div className="flex items-center  justify-center p-4 bg-white rounded-lg ">
              <div>
                <p className="mb-2 text-4xl font-bold text-center text-gray-800">
                  <div className="flex justify-center items-center">
                    <img src={visitor} className="w-20" alt="" />
                  </div>
                  <CountUp end={21450} duration={40} />+
                </p>
                <p className="text-2xl font-medium text-gray-800">
                  VISITORS PER DAY
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg">
              <div>
                <p className="mb-2 text-4xl font-bold text-center text-gray-800">
                  <div className="flex justify-center items-center">
                    <img src={verify} className="w-20" alt="" />
                  </div>
                  <CountUp end={36302} duration={40} />+
                </p>
                <p className="text-2xl font-medium text-gray-800">
                  VERIFIED DEALERS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
