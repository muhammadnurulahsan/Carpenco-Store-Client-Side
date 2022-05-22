import React from "react";
import img1 from "../../../Assets/brand1.png";
import img2 from "../../../Assets/brand2.png";
import img3 from "../../../Assets/brand3.png";
import img4 from "../../../Assets/brand4.png";
import img5 from "../../../Assets/brand5.png";
import img6 from "../../../Assets/brand6.png";
import img7 from "../../../Assets/brand7.png";

const BusinessPartner = () => {
  return (
    <div>
      <div class="pb-10">
        <dh-component>
          <div class="container mx-auto">
            <div class="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
              <h1
                tabIndex="0"
                class="focus:outline-none xl:text-5xl md:text-3xl text-xl text-center text-gray-800 font-extrabold mb-5 pt-4"
              >
                Partnerships with Coveted Brands
              </h1>
              <p
                tabIndex="0"
                class="focus:outline-none text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto"
              >
                Our success has come from being committed to the property and
                investing in the development of the product to maximize sales.
                <br />
                At the same time and maintaining the integrity.
              </p>
            </div>
            <div class="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap">
              <div className="flex flex-wrap lg:pr-10">
                <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center  border-gray-200 xl:pb-10 pb-16 items-center">
                  <img
                    tabIndex="0"
                    class="focus:outline-none"
                    src={img1}
                    alt="Adidas"
                  />
                </div>
                <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center border-gray-200 xl:pb-10 pb-16 items-center">
                  <img
                    tabIndex="0"
                    class="focus:outline-none"
                    src={img2}
                    alt="Chanel"
                  />
                </div>
                <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center border-gray-200 xl:pb-10 pb-16 pt-4 items-center">
                  <img
                    tabIndex="0"
                    class="focus:outline-none"
                    src={img7}
                    alt="Nike"
                  />
                </div>
                <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center border-gray-200 xl:pb-10 pb-16 items-center">
                  <img
                    tabIndex="0"
                    class="focus:outline-none"
                    src={img5}
                    alt="Toyota"
                  />
                </div>
              </div>
              <div className="flex flex-wrap justify-center lg:px-16">
                <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center  border-gray-200 xl:pt-10 items-center">
                  <img
                    tabIndex="0"
                    class="focus:outline-none"
                    src={img4}
                    alt="BlackBerry"
                  />
                </div>
                <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:mx-20 mx-10 xl:pt-10 lg:pt-10 md:pt-2 pt-16">
                  <img
                    tabIndex="0"
                    class="focus:outline-none"
                    src={img6}
                    alt="Mini"
                  />
                </div>
                <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16">
                  <img
                    tabIndex="0"
                    class="focus:outline-none"
                    src={img3}
                    alt="Honda"
                  />
                </div>
              </div>
            </div>
          </div>
        </dh-component>
      </div>
    </div>
  );
};

export default BusinessPartner;
