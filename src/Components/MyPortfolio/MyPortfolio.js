import React from "react";
import bg from "../../Assets/my-portfolio.jpg";

const MyPortfolio = () => {
  return (
    <div>
      <div
        style={{
          background: `url(${bg})`,
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="py-5"
      >
        <div className="lg:ml-28 py-10 ml-10 text-white">
          <h1 className="font-libreBasker font-medium text-6xl">
            My Portfolio
          </h1>
          <h5 className="font-openSans text-xl font-medium py-5">
            Home{" "}
            <span className="font-montserrat font-light text-xl">
              / My Portfolio
            </span>
          </h5>
        </div>
      </div>

      <div className="lg:mx-28">
        <div class="hero min-h-screen w-full">
          <div class="hero-content flex-col lg:flex-row">
            <img
              alt=""
              src={require("../../Assets/about.png")}
              class="lg:mt-0 mt-16 lg:w-1/3 w-fit"
            />
            <div class="mx-5">
              <h1 class="font-libreBasker text-4xl lg:mt-0 mt-8">
                Assalamualaikum <br /> Warahmatullahi Wabarakatuh
              </h1>
              <h1 class="font-libreBasker text-2xl pt-6">
                Muhammad Nurul Ahsan
              </h1>
              <p class="py-6 font-openSans font-light text-lg">
                Alhamdulillah I'm a student of Qawmi Madrasha at Arabic
                University of Dhaka. also I'm a student of programming hero
                batch-5 with a passion for web development. I'm currently
                learning React.js and Node.js.
              </p>
              <p class="font-openSans font-light text-lg">
                I'm a Jr. Full Stack Web Developer. I Like To Upgrade My Self
                Day By Day. I Have A Plan For Next 6 Months. I Will Learn
                React.js. After That I Will Start Learning Node.js along with
                TypeScript. Then I Will Dive Into Node.js. Beside These I Have
                Good Interest In Python and Django. I Wish I Could Learn Them
                Soon Insha'Allah. Also I Will Be Learning Backend Development
                After Sometime. I am Working 6-8 Hours Daily For Achieving My
                Goals As Soon As Possible.
              </p>
            </div>
          </div>
        </div>
        <div class="hero pb-20 w-full">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <img
              alt=""
              src={require("../../Assets/goal.png")}
              class="w-full rounded-lg shadow-2xl"
            />
            <div class="mx-4">
              <h1 class="font-libreBasker text-3xl font-medium lg:mt-0 mt-8">
                What is my goal objective?
              </h1>
              <p class="font-openSans font-light text-lg pt-6">
                I want to be a Senior Full Stack professional web developer. The
                main objective when working as a developer is to be productive
                and deliver value to the company. To gain confidence and fame
                using my potential in the field of “Web Development”, and
                express my innovative creative skills for self and company
                growth.
              </p>
              <p class="font-openSans font-light text-lg py-6">
                To take a challenging role as Front End Web Developer in a
                highly technical company where I could utilize my skills in Web
                Design, Front-End Web Development, Software, and CMS/e-Commerce
                and use these skills in providing quality service to the
                company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
