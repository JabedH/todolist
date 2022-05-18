// import { signOut } from "firebase/auth";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const handleLogout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  const MenuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/addnewlist">Add New List</Link>
      </li>

      <li>
        <Link to="/mylist">My List</Link>
      </li>

      <li>
        {user ? (
          <Link onClick={handleLogout} to="">
            Logout
          </Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
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
            {MenuItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">To Do List</a>
      </div>
      <div className="navbar-end hidden lg:flex ">
        <ul className="menu menu-horizontal p-0 ">{MenuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
