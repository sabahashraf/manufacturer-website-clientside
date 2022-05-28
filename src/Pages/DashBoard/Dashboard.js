import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content my-5">
          <li>
            <Link className="text-xl hover:bg-accent " to="/dashboard">
              My Profile
            </Link>
          </li>
          {!admin && (
            <>
              <li>
                <Link
                  className="text-xl hover:bg-accent "
                  to="/dashboard/myOrders"
                >
                  My Orders
                </Link>
              </li>
              <li>
                <Link
                  className="text-xl hover:bg-accent "
                  to="/dashboard/addReview"
                >
                  Add a review
                </Link>
              </li>
            </>
          )}
          {admin && (
            <>
              <li>
                <Link
                  className="text-xl hover:bg-accent "
                  to="/dashboard/users"
                >
                  Make Admin
                </Link>
              </li>
              <li>
                <Link
                  className="text-xl hover:bg-accent "
                  to="/dashboard/addProduct"
                >
                  Add Product
                </Link>
              </li>
              <li>
                <Link
                  className="text-xl hover:bg-accent "
                  to="/dashboard/manageProduct"
                >
                  Manage Product
                </Link>
              </li>
              <li>
                <Link
                  className="text-xl hover:bg-accent "
                  to="/dashboard/manageOrders"
                >
                  Manage Orders
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
