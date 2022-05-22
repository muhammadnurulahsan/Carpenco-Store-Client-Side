import React, { useRef } from "react";
import bg from "../../Assets/rest-password.jpg";
import { sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import auth from "./../../firebase.init";

const ResetPassword = () => {
  const emailRef = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    console.log(email);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast("Successfully Sent Your Reset Email", {
          id: "resetEmailPassword",
        });
      })
      .catch(() => {
        toast("Sorry! Your Email input is empty", { id: "resetpassword" });
      });
  };
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="py-5 text-black">
        <div className="lg:ml-28 py-10 ml-8">
          <h1 className="font-libreBasker font-medium text-6xl">
            Reset Password
          </h1>
          <h5 className="font-openSans font-medium text-xl pt-5">
            Home
            <span className="font-montserrat font-light text-xl">
              / Reset Password
            </span>
          </h5>
        </div>
      </div>

      <div className="flex justify-center items-center pb-20">
        <div className="card w-fit lg:w-[40%] mx-5 bg-white drop-shadow-2xl">
          <div className="card-body">
            <h2 className="text-center font-montserrat font-medium text-4xl">
              Forgot your password?
            </h2>
            <p className="text-center font-openSans font-light text-lg">
              Enter your email address below and we'll send you a link to reset
              your password.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-control w-full px-5 pt-5">
                <label className="label">
                  <span className="label-text text-base font-medium">
                    Email
                  </span>
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered input-success w-full "
                />

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked="checked"
                    class="checkbox checkbox-accent mr-4"
                  />
                  <p class="my-5">
                    I accept the
                    <span className="text-blue-700">Terms and Conditions</span>
                  </p>
                </div>

                <input
                  className="btn w-full text-white"
                  type="submit"
                  value="Reset password"
                />
                <Link to="/login">
                  <p class="text-base font-montserrat mt-5 text-center">
                    <FontAwesomeIcon icon={faArrowLeftLong} className="mr-3" />
                    Back to Login
                  </p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
