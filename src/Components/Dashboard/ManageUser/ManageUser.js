import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import deleteImg from "../../../Assets/delete.png";
import auth from "./../../../firebase.init";
import useAdmin from "./../../../Hooks/useAdmin";
import { useQuery } from "react-query";
import Loading from "./../../Loading/Loading";
import swal from "sweetalert";

const ManageUser = () => {
  const { data, isLoading, error, refetch } = useQuery("users", async () => {
    const res = await fetch(`https://carpenco-store.herokuapp.com/user`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return res.json();
  });

  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  const handleMakeAdmin = (email) => {
    swal({
      title: "Are You Sure to Make Admin?",
      text: "If OK, user will be made admin!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willMakeAdmin) => {
      if (willMakeAdmin && admin) {
        fetch(`https://carpenco-store.herokuapp.com/user/admin/${email}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
            "Access-Control-Allow-Origin": "*",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              swal("User has been made admin!", {
                icon: "success",
              });
            }
            refetch();
          });
      } else {
        swal("Successfully! User Info is Safe!", {
          icon: "success",
        });
      }
    });
  };

  const handleDelete = (email) => {
    swal({
      title: "Are You Sure to Delete?",
      text: "If OK, user will be deleted!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://carpenco-store.herokuapp.com/user/${email}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              swal("User has been deleted!", {
                icon: "success",
              });
            }
            refetch();
          });
      } else {
        swal("Successfully! User Info is Safe!", {
          icon: "success",
        });
      }
    });
  };

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return (
      <p>
        Something went Wrong!!! <br /> Please Try Again Later.
      </p>
    );
  }

  return (
    <div className="">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="text-center">
            <tr>
              <th></th>
              <th className="text-sm">Name</th>
              <th className="text-sm">Email</th>
              <th className="text-sm">User Role</th>
              <th className="text-sm">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data &&
              data?.map((user, index) => (
                <tr key={user?._id}>
                  <th className=""> {index + 1}</th>
                  <td> {user?.name} </td>
                  <td> {user?.email} </td>
                  <td>
                    {user?.role !== "admin" && (
                      <button
                        className="text-white btn btn-outline btn-success"
                        onClick={() => handleMakeAdmin(user?.email)}
                      >
                        Make an Admin
                      </button>
                    )}
                    {user?.role === "admin" && (
                      <button className="text-white btn-disabled btn no-animation px-12 bg-rose-400">
                        Admin
                      </button>
                    )}
                  </td>
                  <td>
                    <button onClick={() => handleDelete(user?.email)}>
                      <img src={deleteImg} className="w-8 h-8" alt="" />
                    </button>
                  </td>
                </tr>
              ))}
            {isLoading && <Loading />}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
