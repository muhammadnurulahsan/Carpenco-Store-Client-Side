import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import Loading from "../../Loading/Loading";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../PaymentForm/PaymentForm";

const stripePromise = loadStripe(
  "pk_test_51L5YRmB4bgoHxdHX6lNi6GMhjx3e7mdTs3Lhxxd40Urp5TjgX99sAafo2bKAHF2jlKOp5a4mp2byA400W7zlJPYz007MN03kjE"
);
const Payment = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery("myOrders", async () => {
    const data = await fetch(
      `https://carpenco-store.herokuapp.com/orders/${id}`,
      {
        method: "GET",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    return data.json();
  });

  if (isLoading) {
    return (
      <div className="min-h-[75vh] grid place-content-center">
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <div className="h-full">
        <div className="h-full w-full grid place-content-center gap-4">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={data.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{data.name}</h2>
              <div className="flex space-x-4">
                <p>Order Quantity:</p> <p>{data.orderQuantity}</p>
              </div>
              <div className="flex space-x-4">
                <p>Total Price:</p> <p>{data.totalPrice}</p>
              </div>
              <p>
                Please Pay{" "}
                <span className="text-teal-500">${data.totalPrice}</span> To
                Confirm The Order
              </p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <Elements stripe={stripePromise}>
                <PaymentForm order={data} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
