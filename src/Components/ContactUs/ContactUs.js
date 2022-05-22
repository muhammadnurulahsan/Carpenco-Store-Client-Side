import React from "react";
import "./ContactUs.css";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import bg from "../../Assets/contact.png";

const ContactUs = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      e.target.name.value === "" ||
      e.target.email.value === "" ||
      e.target.message.value === ""
    ) {
      swal({
        title: "Please fill up all the fields",
        text: "Your Input fields is Empty!",
        icon: "error",
      });
    } else {
      swal({
        title: "Massage Sent Successfully!",
        text: "We will get back to you as soon as Possiable!",
        icon: "success",
      });
      navigate("/");
    }
  };
  return (
    <div>
      <div
        style={{
          background: `url(${bg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="py-5 text-white"
      >
        <div className="lg:ml-28 py-10 ml-8">
          <h1 className="font-libreBasker font-medium text-6xl">Contact Us</h1>
          <h5 className="font-openSans font-medium text-xl py-5">
            Home{" "}
            <span className="font-montserrat font-light text-xl">
              / Contact Us
            </span>
          </h5>
        </div>
      </div>
      <div class="hero py-20">
        <div class="hero-content flex-col lg:flex-row">
          <div className="mx-5 lg:pr-20">
            <div className="">
              <h1 className="font-libreBasker font-light text-4xl pb-3">
                Contact Us Now
              </h1>
              <p className="font-openSans font-light text-lg">
                Please get in touch and our expert support <br />
                team will answer all your questions.
              </p>
            </div>
            <div className="py-10">
              <p className="font-libreBasker font-light text-4xl pb-3">
                Address
              </p>
              <p className="font-openSans font-light text-lg">
                375 E 58th St Brooklyn, NY 11203, United States
              </p>
            </div>
            <div className="">
              <p className="font-libreBasker font-light text-4xl pb-3">
                Phone Number & Email
              </p>
              <p className="font-openSans font-light text-lg pb-1">
                +1 010 582 5006
              </p>
              <p className="font-openSans font-light text-lg">
                motors@gmail.com
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center lg:pl-20 lg:pt-0 pt-20">
            <div className="card w-fit bg-white drop-shadow-2xl">
              <div className="card-body">
                <h2 className="text-center font-montserrat font-medium text-4xl">
                  Send Me a Message!
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text text-base	font-medium">
                        Name
                      </span>
                    </label>
                    <input
                      type="name"
                      name="name"
                      placeholder="Enter Your Name"
                      className="input input-bordered input-success w-full"
                    />

                    <label className="label">
                      <span className="label-text text-base font-medium">
                        Email
                      </span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      className="input input-bordered input-success w-full "
                    />
                    <label className="label">
                      <span className="label-text text-base font-medium">
                        Massage
                      </span>
                    </label>
                    <textarea
                      type="text"
                      name="message"
                      class="textarea textarea-success"
                      placeholder="Enter Your Massage"
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
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
