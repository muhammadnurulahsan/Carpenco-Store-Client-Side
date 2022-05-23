import React, { useState } from "react";
import swal from "sweetalert";
import deleteImg from "../../../Assets/delete.png";
import Loading from "../../Loading/Loading";

const ManageProducts = () => {
  const [products, setProducts] = useState();
  fetch(`https://carpenco-store.herokuapp.com/products`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      setProducts(data);
    });

  const handleDelete = (id) => {
    swal({
      title: "Are You Sure to Delete?",
      text: "If OK, items will be deleted!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://carpenco-store.herokuapp.com/products/${id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              swal("Product has been deleted!", {
                icon: "success",
              });
            }
            const newProducts = products?.filter(
              (product) => product._id !== id
            );
            setProducts(newProducts);
          });
      } else {
        swal("Successfully! Product Info is Safe!", {
          icon: "success",
        });
      }
    });
  };
  return (
    <div>
      {products?.length === 0 ? (
        <Loading></Loading>
      ) : (
        <div className="overflow-x-auto w-full pb-10">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Rating</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product, index) => (
                <tr key={product._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={product?.img} alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{product.customer}</div>
                        <div className="text-sm opacity-50">
                          {product.address}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {product.productName}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Carpenco Tools
                    </span>
                  </td>
                  <td>{product.price}</td>
                  <td>{product.aviQuantity}</td>
                  <td>{product.rating}</td>
                  <td>
                    <button onClick={() => handleDelete(product?._id)}>
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

export default ManageProducts;
