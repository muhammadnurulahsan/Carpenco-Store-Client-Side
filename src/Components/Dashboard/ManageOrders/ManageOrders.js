import React from "react";
import deleteImg from "../../../Assets/delete.png";
import { useQuery } from "react-query";
import swal from "sweetalert";
import Loading from "../../Loading/Loading";

const ManageOrders = () => {
  const { data, isLoading, refetch } = useQuery("allOrders", async () => {
    const res = await fetch(`https://carpenco-store.herokuapp.com/orders`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return res.json();
  });

  const updateStatus = (_id) => {
    const status = {
      orderStatus: "Shipped",
      paymentStatus: "Paid",
    };
    swal({
      title: "Are You Sure Update Payment Status?",
      text: "If OK, Order will be Shipped!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willShipped) => {
      if (willShipped) {
        fetch(`https://carpenco-store.herokuapp.com/status/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(status),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              swal("Successfully! Order has been Shipped", {
                icon: "success",
              });
            }
            refetch();
          });
      } else {
        swal("Successfully! Order Info is Safe!", {
          icon: "success",
        });
      }
    });
  };

  const handleDelete = (_id) => {
    swal({
      title: "Are You Sure to Delete?",
      text: "If OK, Order will be deleted!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://carpenco-store.herokuapp.com/order/${_id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              refetch();
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
      {isLoading?.length === 0 ? (
        <Loading></Loading>
      ) : (
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
            <tbody className="">
              {data?.map((order, index) => (
                <tr key={order?._id}>
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
                  <td className="text-center">{order?.customerEmail}</td>
                  <td className="text-center">{order?.orderQuantity}</td>
                  <td className="text-center">{order?.totalPrice}</td>
                  <td className="text-center">{order.address}</td>
                  <td className="text-center">{order?.phone}</td>
                  <td className="text-center">{order?.orderStatus}</td>
                  <td className="text-center">{order?.paymentStatus}</td>
                  <td className="text-center">
                    {order?.orderStatus !== "Shipped" && (
                      <button
                        onClick={() => updateStatus(order?._id)}
                        className="btn btn-sm btn-outline btn-success text-white"
                      >
                        Payment Confirm
                      </button>
                    )}
                    {order?.orderStatus === "Shipped" && (
                      <button
                        onClick={() => updateStatus(order?._id)}
                        className="text-white btn-disabled btn btn-sm no-animation bg-emerald-400"
                      >
                        Payment Success
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
      )}
    </div>
  );
};

export default ManageOrders;
