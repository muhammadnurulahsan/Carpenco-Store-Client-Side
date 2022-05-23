import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const AddProduct = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const updateData = {
      productName: data.product,
      price: data.price,
      minQuantity: data.mimQuantity,
      aviQuantity: data.aviQuantity,
      rating: data.rating,
      img: data.imgLink,
      description: data.description,
    };
    fetch(`https://carpenco-store.herokuapp.com/products`, {
      method: "POST",
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
            title: "Successfully",
            text: "Your Product has been Successfully Added!",
            icon: "success",
          });
          navigate("/products");
        }
      });
  };

  return (
    <div className="flex justify-center items-center my-5">
      <div className="card lg:w-[40%] w-fit bg-white drop-shadow-2xl">
        <div className="card-body">
          <h2 className="text-center font-montserrat font-medium  text-4xl">
            Add Product
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full">
              <div className="flex">
                <div className="mr-14">
                  <label className="label">
                    <span className="label-text text-base font-medium">
                      Product Name
                    </span>
                  </label>
                  <input
                    type="name"
                    placeholder="Enter Your Product Name"
                    className="input input-bordered input-success w-full"
                    {...register("product", {
                      required: true,
                    })}
                  />
                </div>
                <div className="">
                  <label className="label">
                    <span className="label-text text-base font-medium">
                      Product Price
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Your Product Price"
                    className="input input-bordered input-success w-full"
                    {...register("price", {
                      required: true,
                    })}
                  />
                </div>
              </div>
              <div className="flex">
                <div className="mr-14">
                  <label className="label">
                    <span className="label-text text-base font-medium">
                      Minimum Quantity
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Minimum Quantity"
                    className="input input-bordered input-success w-full"
                    {...register("mimQuantity", {
                      required: true,
                    })}
                  />
                </div>
                <div className="">
                  <label className="label">
                    <span className="label-text text-base font-medium">
                      Available Quantity
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Available Quantity"
                    className="input input-bordered input-success w-full"
                    {...register("aviQuantity", {
                      required: true,
                    })}
                  />
                </div>
              </div>

              <label className="label">
                <span className="label-text text-base font-medium">
                  Product Image Link
                </span>
              </label>
              <input
                type="link"
                placeholder="Enter Your Product Image Link"
                className="input input-bordered input-success w-full"
                {...register("imgLink", {
                  required: true,
                })}
              />
              <label className="label">
                <span className="label-text text-base font-medium">
                  Product Rating
                </span>
              </label>
              <input
                type="number"
                placeholder="Enter Your Product Rating"
                className="input input-bordered input-success w-full"
                {...register("rating", {
                  required: true,
                })}
              />
              <label className="label">
                <span className="label-text text-base font-medium">
                  Product Description
                </span>
              </label>
              <textarea
                type="text"
                name="Describe"
                className="textarea textarea-success"
                placeholder="Enter Your Product Description"
                {...register("description", {
                  required: true,
                })}
              ></textarea>
            </div>
            <input
              className="btn mt-8 w-full text-white"
              type="submit"
              value="Add Product"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
