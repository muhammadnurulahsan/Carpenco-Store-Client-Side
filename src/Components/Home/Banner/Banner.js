import React from "react";
import "./Banner.css";
import slider1 from "../../../Assets/slider-1.png";
import slider2 from "../../../Assets/slider-2.jpg";
import slider3 from "../../../Assets/slider-3.jpg";

const Banner = () => {
  return (
    <div>
      <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <img src={slider1} alt="" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              class="btn btn-circle btn-outline text-white lg:m-10"
            >
              ❮
            </a>
            <div>
              <h3 className="banner-title-text">Best Carpenter’s Company</h3>
              <h1 className="banner-middle-text">
                Professional & Quality <br /> Carpenter Service
              </h1>
            </div>
            <a
              href="#slide3"
              class="btn btn-circle btn-outline text-white lg:m-10"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img src={slider2} alt="" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              class="btn btn-circle btn-outline text-white lg:m-10"
            >
              ❮
            </a>
            <a
              href="#slide1"
              class="btn btn-circle btn-outline text-white lg:m-10"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img src={slider3} alt="" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              class="btn btn-circle btn-outline text-white lg:m-10"
            >
              ❮
            </a>
            <a
              href="#slide2"
              class="btn btn-circle btn-outline text-white lg:m-10"
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
