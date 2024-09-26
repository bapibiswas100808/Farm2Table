"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const [show, setShow] = useState("");
  return (
    <div className="max-w-[1170px] mx-auto px-3 lg:px-0">
      <h2 className="py-10 mt-1 text-yellow bg-green-500 font-bold text-center text-4xl">
        Welcome to Farm2Table
      </h2>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <div className="text-center lg:text-left flex-1">
            <h1 className="text-3xl font-bold text-green">
              Login to Continue Enjoying Farm-Fresh Goodness!
            </h1>
            <p className="py-6">
              Farm2Table is revolutionizing the way farmers and consumers
              connect by eliminating middlemen and ensuring fair pricing for
              everyone involved. By directly linking local farmers with
              consumers, the platform allows farmers to sell their fresh,
              high-quality produce at a price that reflects their hard work,
              while consumers enjoy access to affordable, farm-fresh goods.
              Whether you are a farmer looking to expand your reach or a
              consumer wanting to support local agriculture, Farm2Table makes
              the process simple and transparent. Login now to experience a
              marketplace built on trust, sustainability, and community.
            </p>
          </div>
          <div className="card bg-base-100 w-full  shrink-0 shadow-2xl flex-1">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={show ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn project-btn">Login</button>
              </div>
            </form>
            <div className="pl-8 pb-8">
              <div className="inline-block cursor-pointer">
                <p className="flex items-center gap-2 project-btn">
                  <span>Sign in With Google</span>
                  <FcGoogle className="text-lg" />
                </p>
              </div>
              <p>Are you New to Farm2Table?</p>
              <p>
                Please
                <span className="ml-2 text-blue-500 underline">
                  <Link href="/register">Register Here</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
