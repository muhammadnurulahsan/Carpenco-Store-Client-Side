import React from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../../firebase.init";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const UpdateProfile = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const updateData = {
      img: data.img,
      name: data.name,
      phone: data.phone,
      website: data.website,
      address: data.address,
      describe: data.describe,
      education: data.education,
    };
    fetch(`https://carpenco-store.herokuapp.com/user/update/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          swal({
            title: "Success",
            text: "Profile Updated",
            icon: "success",
          });
          navigate("/dashboard");
        }
      });
  };

  return (
    <div className="flex justify-center items-center py-5">
      <div className="card lg:w-[40%] w-fit bg-white drop-shadow-2xl">
        <div className="card-body">
          <h2 className="text-center font-montserrat font-medium  text-4xl">
            Update Profile
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full">
              <div className="flex">
                <div className="mr-14">
                  <label className="label">
                    <span className="label-text text-base font-medium">
                      Name
                    </span>
                  </label>
                  <input
                    type="name"
                    placeholder="Enter Your Name"
                    className="input input-bordered input-success w-full"
                    {...register("name", {
                      required: true,
                    })}
                  />
                </div>
                <div className="">
                  <label className="label">
                    <span className="label-text text-base font-medium">
                      Education
                    </span>
                  </label>
                  <input
                    type="name"
                    placeholder="Enter Your Education"
                    className="input input-bordered input-success w-full"
                    {...register("education", {
                      required: true,
                    })}
                  />
                </div>
              </div>
              <div className="">
                <label className="label">
                  <span className="label-text text-base font-medium">
                    Phone Number
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Enter Your Phone Number"
                  className="input input-bordered input-success w-full"
                  {...register("phone", {
                    required: true,
                  })}
                />
              </div>
              <label className="label">
                <span className="label-text text-base font-medium">
                  Your Website Link
                </span>
              </label>
              <input
                type="link"
                placeholder="Enter Your Website Link"
                className="input input-bordered input-success w-full"
                {...register("website", {
                  required: true,
                })}
              />
              <label className="label">
                <span className="label-text text-base font-medium">
                  Address
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Address"
                className="input input-bordered input-success w-full"
                {...register("address", {
                  required: true,
                })}
              />
              <label className="label">
                <span className="label-text text-base font-medium">
                  Profile Image
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Profile Image"
                className="input input-bordered input-success w-full"
                {...register("img", {
                  required: true,
                })}
              />
              <label className="label">
                <span className="label-text text-base font-medium">
                  Describe you
                </span>
              </label>
              <textarea
                type="text"
                name="Describe"
                className="textarea textarea-success"
                placeholder="Enter Your Describe"
                {...register("describe", {
                  required: true,
                })}
              ></textarea>
            </div>
            <input
              className="btn mt-8 w-full text-white"
              type="submit"
              value="Update"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
