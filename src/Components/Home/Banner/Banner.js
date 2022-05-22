import React from "react";
import slider1 from "../../../Assets/slider-1.png";
import slider2 from "../../../Assets/slider-2.jpg";
import slider3 from "../../../Assets/slider-3.jpg";

const Banner = () => {
  return (
    <div>
      <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <img src={slider1} className="lg:h-fit h-full" alt="" />
          <div class="absolute flex justify-between transform -translate-y-1/2 lg:left-5 left-1 right-1 lg:right-5 top-1/2">
            <a
              href="#slide2"
              class="btn btn-circle btn-outline  lg:mt-24 mt-52 text-white hover:bg-yellow-600"
            >
              ❮
            </a>
            <div className="lg:mr-60 lg:mx-0 mx-3 text-white font-montserrat">
              <h3 className="lg:text-3xl text-2xl	font-semibold">
                Best Carpenter’s Company
              </h3>
              <h1 className="lg:text-4xl text-2xl	font-semibold uppercase py-3 text-yellow-600">
                Professional & Quality <br /> Carpenter Services.
              </h1>
              <h3 className="lg:text-2xl text-xl font-light pb-6">
                Carpenters construct, repair and install wooden building
                frameworks <br /> and structures from indoors to outdoors on
                many projects.
              </h3>
              <button class="btn btn-outline btn-warning px-10">
                Read More
              </button>
            </div>
            <a
              href="#slide2"
              class="btn btn-circle btn-outline  lg:mt-24 mt-52 text-white hover:bg-yellow-600"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img src={slider2} className="lg:h-fit h-full" alt="" />
          <div class="absolute flex justify-between transform -translate-y-1/2 lg:left-5 left-1 right-1 lg:right-5 top-1/2">
            <a
              href="#slide3"
              class="btn btn-circle btn-outline  lg:mt-24 mt-52 text-white hover:bg-yellow-600"
            >
              ❮
            </a>
            <div className="lg:ml-60 lg:mx-0 mx-3  text-white font-montserrat text-right">
              <h3 className="lg:text-3xl text-2xl	font-semibold">
                Fine Carpenter Tools
              </h3>
              <h1 className="lg:text-4xl text-3xl	font-semibold py-3 uppercase text-yellow-600">
                Complete furnishing <br /> with best quality
              </h1>
              <h3 className="lg:text-2xl text-xl font-light pb-6">
                Carpenters construct, repair and install wooden building
                frameworks <br /> and structures from indoors to outdoors on
                many projects.
              </h3>
              <button class="btn btn-outline btn-warning px-10">
                Read More
              </button>
            </div>
            <a
              href="#slide3"
              class="btn btn-circle btn-outline  lg:mt-24 mt-52 text-white hover:bg-yellow-600"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img src={slider3} className="lg:h-fit h-screen" alt="" />
          <div class="absolute flex justify-between transform -translate-y-1/2 lg:left-5 left-1 right-1 lg:right-5 top-1/2">
            <a
              href="#slide1"
              class="btn btn-circle btn-outline  lg:mt-24 mt-52 text-white hover:bg-yellow-600"
            >
              ❮
            </a>
            <div className="lg:mr-60 lg:mx-0 mx-3 text-white font-montserrat">
              <h3 className="lg:text-3xl text-2xl	font-semibold">
                Woodworker Hand Tool
              </h3>
              <h1 className="lg:text-4xl text-3xl	font-semibold uppercase py-3 text-yellow-600">
                Woodwork that shows <br /> Our best standard
              </h1>
              <h3 className="lg:text-2xl text-xl font-light pb-6">
                Carpenters construct, repair and install wooden building
                frameworks <br /> and structures from indoors to outdoors on
                many projects.
              </h3>
              <button class="btn btn-outline btn-warning px-10">
                Read More
              </button>
            </div>
            <a
              href="#slide1"
              class="btn btn-circle btn-outline  lg:mt-24 mt-52 text-white hover:bg-yellow-600"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
