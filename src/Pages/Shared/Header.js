import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  const menuItems = (
    <>
      <li>
        <Link className="text-xl hover:bg-accent mr-3" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="text-xl hover:bg-accent mr-3" to="/blogs">
          Blogs
        </Link>
      </li>
      <li>
        <Link className="text-xl hover:bg-accent mr-3" to="/portfolio">
          Portfolio
        </Link>
      </li>
      {user && (
        <li>
          <Link className="text-xl hover:bg-accent mr-3" to="/dashboard">
            Dashboard
          </Link>
        </li>
      )}
      {user ? (
        <>
          <p className="text-xl text-primary font-bold my-auto ml-48">
            Hi, {user.displayName}
          </p>
          <button
            onClick={logout}
            className="btn btn-ghost text-xl hover:bg-accent font-normal"
          >
            Sign Out
          </button>
        </>
      ) : (
        <li>
          <Link className="text-xl hover:bg-accent mr-3" to="/login">
            Login
          </Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost  lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl ">
          PowerPaintingTools
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <label
          tabindex="1"
          htmlFor="dashboard-drawer"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Header;
