import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";
import useAdmin from "./../../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div>
       <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet />
          {/* <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label> */}
        </div> 

        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-60 bg-amber-100 text-base-content">
            <li>
              <CustomLink to="/dashboard">My Profile</CustomLink>
            </li>
            {!admin && (
              <>
                <li>
                  <CustomLink to="/dashboard/my-reviews">My Review</CustomLink>
                </li>
                <li>
                  <CustomLink to="/dashboard/my-orders">My Orders</CustomLink>
                </li>
                <li>
                  <CustomLink to="/dashboard/add-review">
                    Add A Review
                  </CustomLink>
                </li>
              </>
            )}

            {admin && (
              <>
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
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
