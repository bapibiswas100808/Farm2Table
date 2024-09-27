import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../asset/Farm2Table.png";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="text-lg">
        <Link href="/">Home</Link>
      </li>
      <li className="text-lg">
        <Link href="/allProducts">Products</Link>
      </li>
      <li className="text-lg">
        <Link href="/dashboard">Dashboard</Link>
      </li>
      <li className="text-lg">
        <Link href="/livemarket">Live Market</Link>
      </li>
    </>
  );
  return (
    <div className=" bg-[#28a745] sticky top-0 z-10 navbar">
      <div className="navbar max-w-[1170px] mx-auto text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-yellow-500 rounded-box z-[10] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link href="/" className=" flex items-center">
            <Image className="" src={logo} alt="" height={60} />
            <span className="text-[#FFD700] font-bold text-2xl hidden md:block">
              Farm2Table
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link className="project-btn" href="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
