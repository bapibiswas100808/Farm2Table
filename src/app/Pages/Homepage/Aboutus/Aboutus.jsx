import Image from "next/image";
import React from "react";
import aboutImage from "../../../asset/Banner6.jpg";

const Aboutus = () => {
  return (
    <div className="max-w-[1170px] mx-auto mt-10 lg:mt-14 px-3 lg:px-0">
      <div className="text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-center py-2 text-yellow bg-green-600 inline-block px-5 mb-5 lg:mb-10 rounded-lg">
          About Us
        </h2>
      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <div className="flex-1">
            <Image
              src={aboutImage}
              className="w-full rounded-lg shadow-2xl"
              alt=""
            />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl lg:text-3xl font-bold text-green mb-5">
              Welcome to Farm2Table – Where Freshness Meets Community!
            </h1>
            <p className="">
              <span className="text-xl font-bold me-2">Mission:</span>
              At Farm2Table, our mission is to connect local farmers directly
              with consumers, ensuring fresh, organic produce reaches every
              household while supporting sustainable farming practices. We
              eliminate middlemen, providing fair prices for both farmers and
              consumers, and champion a transparent food supply chain that
              promotes health, community, and the environment.
            </p>
            <br />
            <p>
              <span className="text-xl font-bold me-2">Vision:</span>
              We envision a world where everyone has access to fresh, local
              produce, fostering a healthier lifestyle and a more resilient,
              eco-friendly agriculture system. By empowering farmers and
              simplifying food access, we aim to create a impact on food
              sustainability and community well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
