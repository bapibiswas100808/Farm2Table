import React from "react";
import Image from "next/image";
import field from "../../../asset/flow/field.jpg";
import farmer from "../../../asset/flow/farmer.jpg";
import farm2table from "../../../asset/flow/Farm2Table.png";
import consumer from "../../../asset/flow/food.jpg";

const HowItWorks = () => {
  return (
    <div className="max-w-[1170px] mx-auto mt-10 lg:mt-14 px-3 lg:px-0 mb-10">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-center py-2 text-yellow bg-green-600 inline-block px-5 mb-5 lg:mb-10 rounded-lg">
          How It Works!
        </h2>
      </div>

      {/* Subheading */}
      <div className="text-center">
        <h2 className="text-2xl lg:text-3xl mb-3 font-bold text-green">
          Look How Our Process Works
        </h2>
        <p>
          Our platform empowers farmers to showcase their products directly to
          consumers. Farmers can easily post their fresh produce, grains, and
          other agricultural items, making it accessible for anyone to browse
          and purchase. Simply explore our categories, select your desired
          products, and add them to your cart. Enjoy a seamless checkout
          process, and support local farmers while enjoying high-quality,
          sustainable goods delivered right to your doorstep!
        </p>
      </div>

      {/* Flow Chart */}
      <div className="text-center mt-5">
        <ul className="steps steps-vertical lg:steps-horizontal lg:space-x-3 space-y-3 lg:space-y-0">
          <li className="step step-warning relative">
            <Image className="w-full h-[300px]" src={field} alt="field" />
            <h2 className="text-yellow-500 text-4xl font-bold absolute top-2/3 left-1/2 -translate-x-1/2 bg-green-700 p-2">
              Field
            </h2>
          </li>
          <li className="step step-warning relative">
            <Image className="w-full h-[300px]" src={farmer} alt="field" />
            <h2 className="text-yellow-500 text-4xl font-bold absolute top-2/3 left-1/2 -translate-x-1/2 bg-green-700 p-2">
              Farmer
            </h2>
          </li>
          <li className="step step-warning relative">
            <Image className="w-full h-[300px]" src={farm2table} alt="field" />
          </li>
          <li className="step step-warning relative">
            <Image className="w-full h-[300px]" src={consumer} alt="field" />
            <h2 className="text-yellow-500 text-4xl font-bold absolute top-2/3 left-1/2 -translate-x-1/2 bg-green-700 p-2">
              Consumer
            </h2>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HowItWorks;
