import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import avatar from "../../Assets/user-avatar.jpg";
import auth from "../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";
import useAdmin from "../../Hooks/useAdmin";

const Header = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const logout = () => {
    signOut(auth);
  };

  const menuItems = (
    <>
      <li>
        <CustomLink to="/home">Home</CustomLink>
      </li>
      <li>
        <CustomLink to="/blogs">Blogs</CustomLink>
      </li>
      <li>
        <CustomLink to="/my-portfolio">My Portfolio</CustomLink>
      </li>
      <li>
        <CustomLink to="/contact-us">Contact Us</CustomLink>
      </li>
      {user && (
        <li>
          <CustomLink to="/dashboard">Dashboard</CustomLink>
        </li>
      )}

      {!user && (
        <>
          <li>
            <CustomLink to="/login">Login</CustomLink>
          </li>
          <li>
            <CustomLink to="/register">Register</CustomLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="sticky top-0 bg-amber-100 z-50">
      <div className="navbar justify-between lg:px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/">
            <img
              className="w-56"
              src={require("../../Assets/logo-1.png")}
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        {user && (
          <>
            <div className="flex-none">
              <div className="dropdown dropdown-end mr-4">
                <label tabIndex="0" className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </label>
                <div
                  tabIndex="0"
                  className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    <span className="font-bold text-lg">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    {!user?.photoURL ? (
                      <img src={avatar} alt="" />
                    ) : (
                      <img src={user?.photoURL} alt="" />
                    )}
                  </div>
                </label>
                <ul
                  tabIndex="0"
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    {!user.displayName ? (
                      <h6 className="font-bold text-teal-300"> Hello! User</h6>
                    ) : (
                      <h6 className="font-bold text-teal-300">
                        Hello! {user.displayName}
                      </h6>
                    )}
                  </li>
                  {admin ? (
                    <>
                      <li>
                        <CustomLink to="/dashboard">My Profile</CustomLink>
                      </li>
                      <li>
                        <CustomLink to="/dashboard/manage-user">
                          Manage User
                        </CustomLink>
                      </li>
                      <li>
                        <CustomLink to="/dashboard/manage-orders">
                          Manage All Orders
                        </CustomLink>
                      </li>
                      <li>
                        <CustomLink to="/dashboard/add-product">
                          Add product
                        </CustomLink>
                      </li>
                      <li>
                        <CustomLink to="/dashboard/manage-products">
                          Manage Product
                        </CustomLink>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <CustomLink to="/dashboard">My Profile</CustomLink>
                      </li>
                      <li>
                        <CustomLink to="/dashboard/my-reviews">
                          My Review
                        </CustomLink>
                      </li>
                      <li>
                        <CustomLink to="/dashboard/my-orders">
                          My Orders
                        </CustomLink>
                      </li>
                      <li>
                        <CustomLink to="/dashboard/add-review">
                          Add A Review
                        </CustomLink>
                      </li>
                    </>
                  )}
                  <li>
                    <Link onClick={logout} to="#">
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
