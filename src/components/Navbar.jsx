import React from "react";
import { Link } from "react-router";

const Navbar = ({ RootData }) => {
  // console.log(RootData); /

  return (
    <div className="navbar bg-base-100 shadow-sm  mx-auto px-4">
      
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/readList">ReadList</Link>
            </li>
            {/* Dynamic Books */}
            {RootData &&
              RootData.map((book) => (
                <li key={book.bookId}>
                  <Link to={`/details/${book.bookId}`}>{book.category}</Link>
                </li>
              ))}
          </ul>
        </div>

        {/* Brand / Logo */}
        <Link className="btn btn-ghost text-xl normal-case" to="/">daisyUI</Link>
      </div>

      {/* Navbar Center - Desktop Menu */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/readList">ReadList</Link>
          </li>
          {RootData &&
            RootData.map((book) => (
              <li key={book.bookId}>
                <Link to={`/details/${book.bookId}`}>{book.category}</Link>
              </li>
            ))}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <button className="btn btn-primary">Button</button>
      </div>

    </div>
  );
};

export default Navbar;
