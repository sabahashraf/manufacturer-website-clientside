import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        <h2 className="text-4xl">Dashboard</h2>
        <Outlet></Outlet>
        <label
          for="dashboard-drawer"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div class="drawer-side">
        <label for="dashboard-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/*   <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/myOrders">My Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/addReview">Add a review</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
