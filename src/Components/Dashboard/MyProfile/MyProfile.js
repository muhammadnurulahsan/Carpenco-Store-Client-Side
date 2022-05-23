import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useQuery } from "react-query";
import "./MyProfile.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Loading from "../../Loading/Loading";
import avatar from "../../../Assets/review-avatar.png";

const MyProfile = (e) => {
  const [user] = useAuthState(auth);
  const { data, isLoading, error } = useQuery("userProfile", async () => {
    const userData = await fetch(
      `https://carpenco-store.herokuapp.com/user/${user?.email}`,
      {
        method: "GET",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    return userData.json();
  });
  console.log(data);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="min-h-[75vh] grid place-content-center">
        <p>
          Something went Wrong! <br /> Please try Again later.
        </p>
      </div>
    );
  }
  return (
    <div className="">
      <div className="flex lg:justify-end justify-center pt-5 lg:mr-10">
        <Link to="update-profile">
          <button className="btn btn-outline">
            <FontAwesomeIcon className="mr-3" size="xl" icon={faPenToSquare} />
            Update Profile
          </button>
        </Link>
      </div>
      <div className=" bg-white flex items-center justify-center px-5 py-5">
        <div className="w-full mx-auto bg-white border border-gray-200 rounded-xl overflow-hidden text-gray-800">
          <div className="w-full h-36 md:h-48 bg-gray-100 bg-random"></div>
          <div className="rounded-full w-44 h-44 mx-auto md:mx-7 border-4 border-white bg-white -mt-28 md:-mt-32 z-10 relative overflow-hidden">
            <img src={data.img || avatar} alt="" className="w-full h-full" />
          </div>
          <div className="w-full px-8 pt-3 pb-8">
            <div className="-mx-3 md:flex">
              <div className="px-3 w-full md:w-2/3 text-center md:text-left mb-5">
                <h1 className="font-semibold text-2xl">
                  {data?.name || "Gest User"}
                </h1>
                <h3 className="text-xl">
                  {data?.education || "Full Stack Developer"}
                </h3>
                <h4 className="text-lg text-gray-500">
                  {data?.address || "Dhaka, Bangladesh"}
                </h4>
              </div>
              <div className="px-3 w-full md:w-1/2 mb-5">
                <ul className="text-center md:text-left">
                  <li className="inline-block md:block mb-2 mx-3">
                    <Link
                      to="#"
                      className="font-semibold text-blue-500 hover:text-blue-600 group"
                    >
                      <span className="inline-flex items-center justify-center w-8 h-8 text-lg rounded-full bg-blue-500 group-hover:bg-blue-600 text-white mr-2">
                        <i className="mdi mdi-phone"></i>
                      </span>{" "}
                      <span className="group-hover:underline">
                        Phone: {data?.phone}
                      </span>
                    </Link>
                  </li>
                  <li className="inline-block md:block mb-2 mx-3">
                    <Link
                      to="#"
                      className="font-semibold text-blue-500 hover:text-blue-600 group"
                    >
                      <span className="inline-flex items-center justify-center w-8 h-8 text-lg rounded-full bg-blue-500 group-hover:bg-blue-600 text-white mr-2">
                        <i className="mdi mdi-email-outline"></i>
                      </span>
                      <span className="group-hover:underline">
                        Email: <span>{user?.email}</span>
                      </span>
                    </Link>
                  </li>
                  <li className="inline-block md:block mb-2 mx-3">
                    <Link
                      to="#"
                      className="font-semibold text-blue-500 hover:text-blue-600 group"
                    >
                      <span className="inline-flex items-center justify-center w-8 h-8 text-lg rounded-full bg-blue-500 group-hover:bg-blue-600 text-white mr-2">
                        <i className="mdi mdi-web"></i>
                      </span>{" "}
                      <span className="group-hover:underline">
                        Website: {data.website}
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full text-center md:text-left">
              <p className="text-sm leading-tight">
                {data?.describe ||
                  "I'm a Jr. Full Stack Web Developer. I Like To Upgrade My Self Day By Day. I Have A Plan For Next 6 Months. I Will Learn React.js. After That I Will Start Learning Node.js along with TypeScript. Then I Will Dive Into Node.js. Beside These I Have Good Interest In Python and Django. I Wish I Could Learn Them Soon Insha'Allah. Also I Will Be Learning Backend Development After Sometime. I am Working 6-8 Hours Daily For Achieving My Goals As Soon As Possible."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
