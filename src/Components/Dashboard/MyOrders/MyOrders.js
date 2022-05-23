import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import deleteImg from "../../../Assets/delete.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import loading from "../../../Assets/loading.gif";
import swal from "sweetalert";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState();

  fetch(`https://carpenco-store.herokuapp.com/orders?email=${user?.email}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      setIsLoading(false);
      setOrders(data);
    });

  const handleDelete = (id) => {
    swal({
      title: "Are You Sure to Delete?",
      text: "If OK, Order will be deleted!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://carpenco-store.herokuapp.com/order/${id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              swal("Order has been deleted!", {
                icon: "success",
              });
            }
          });
      } else {
        swal("Successfully! Order Info is Safe!", {
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      {orders?.length > 0 ? (
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead className="text-center">
              <tr>
                <th></th>
                <th>Product Name</th>
                <th>Customer Name</th>
                <th>Email</th>
                <th>Order Quantity</th>
                <th>Total Price</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Order Status</th>
                <th>Payment Status</th>
                <th>Payment Action</th>
                <th>Order Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order, index) => (
                <tr key={order._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={order?.img} alt="" />
                        </div>
                      </div>
                      <div className="text-start">
                        <td className="text-center">
                          {order.name}
                          <br />
                          <span className="badge badge-ghost badge-sm">
                            Carpenco Tools
                          </span>
                        </td>
                      </div>
                    </div>
                  </td>
                  <td className="">
                    <div className="font-bold">{order.customer}</div>
                    <div className="text-sm opacity-50">{order.address}</div>
                  </td>
                  <td className="text-center">{order.customerEmail}</td>
                  <td className="text-center">{order.orderQuantity}</td>
                  <td className="text-center">{order.totalPrice}</td>
                  <td className="text-center">{order.address}</td>
                  <td className="text-center">{order.phone}</td>
                  <td className="text-center">{order.orderStatus}</td>
                  <td className="text-center">{order.paymentStatus}</td>
                  <td className="text-center">
                    {order.paymentStatus === "Unpaid" && (
                      <>
                        <Link to={`/dashboard/payment/${order._id}`}>
                          <button className="btn btn-sm btn-outline btn-success text-white">
                            Pay Now
                          </button>
                        </Link>
                      </>
                    )}
                    {order?.orderStatus === "Complete" && (
                      <button className="text-white btn-disabled btn btn-sm no-animation bg-rose-400">
                        Payment Accept
                      </button>
                    )}

                    {order?.orderStatus === "Shipped" && (
                      <button className="text-white btn-disabled btn btn-sm no-animation bg-rose-400">
                        Payment Accepted
                      </button>
                    )}

                    {order?.paymentStatus === "Pending" && (
                      <button className="text-white btn-disabled btn btn-sm no-animation bg-rose-400">
                        Payment is Pending
                      </button>
                    )}
                  </td>
                  <td className="text-center">
                    <button onClick={() => handleDelete(order?._id)}>
                      <img src={deleteImg} className="w-8 h-8" alt="" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <>
          {isLoading === true ? (
            <div className="text-center py-3">
              <div
                style={{ height: "50vh" }}
                className="flex justify-center items-center"
              >
                <img src={loading} alt="" />
              </div>
              <h1 className="text-2xl font-bold">
                Data is loading, Please wait.....
              </h1>
            </div>
          ) : (
            <div className="py-5 lg:pt-60 text-center">
              <h2 className="text-2xl text-center font-bold">
                You Haven't Added Any Order Yet! <br /> Please Order Now.
              </h2>
              <div className="py-3">
                <Link to="/products">
                  <button className="btn btn-error btn-outline px-4 py-2">
                    Order Now
                    <FontAwesomeIcon
                      icon={faSquarePlus}
                      className="ml-3"
                      style={{ fontSize: "1.5rem" }}
                    />
                  </button>
                </Link>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MyOrder;
