import React from "react";
import bg from "../../../Assets/SubscribeCard.jpg";

const SubscribeCard = () => {
  return (
    <div className="pb-16">
      <div
        class="w-full py-20 bg-gray-500 font-montserrat bg-no-repeat"
        style={{
          background: `url(${bg})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div class=" p-10  py-20  flex  flex-col  flex-wrap  justify-center  content-center">
          <div class=" m-0  p-0  text-3xl  text-white  antialiased  text-center">
            Get Our Updates
          </div>
          <div class="py-5 text-xl text-white antialiased text-center">
            Find out about events and other news.
          </div>
          <div class="mt-3 flex flex-row flex-wrap">
            <input
              type="text"
              class=" text-gray-600 w-2/3 p-2 pl-5 outline-none rounded-l-lg"
              placeholder="nurulahsan@exmaple.com"
            />
            <button
              class=" p-2 w-1/3  bg-indigo-400  rounded-r-lg  text-white hover: hover:bg-indigo-300"
              type="button"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeCard;
