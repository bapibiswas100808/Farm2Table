import React from "react";
import customerImg from "../../../asset/happy-customer.jpg";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className="max-w-[1170px] mx-auto mt-10 lg:mt-14 px-3 lg:px-0 mb-10">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-center py-2 text-yellow bg-green-600 inline-block px-5 mb-5 lg:mb-10 rounded-lg">
          Customer Benefits!
        </h2>
      </div>

      {/* Subheading */}
      <div className="text-center">
        <h2 className="text-2xl lg:text-3xl mb-3 font-bold text-green">
          Discover the Benefits of Shopping with Us
        </h2>
        <p>
          Experience the joy of supporting local farmers while enjoying fresh,
          high-quality products delivered straight to your door. Our platform
          not only connects you to the best agricultural goods but also ensures
          that you are making a positive impact in your community. From diverse
          selections to unbeatable freshness, learn how our service enhances
          your shopping experience!
        </p>
      </div>

      {/* Benefits */}
      <div className="mt-10 flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <Image className="rounded-lg" src={customerImg} alt="" />
        </div>
        <div className="flex-1">
          <ul className="list-disc list-inside">
            <li>
              <strong>Farm-Fresh Produce:</strong> Enjoy the freshest
              ingredients directly from local farmers.
            </li>
            <li>
              <strong>Support Local Farmers:</strong> Your purchases help
              sustain the community.
            </li>
            <li>
              <strong>Diverse Selection:</strong> Explore a variety of products,
              from fruits to grains.
            </li>
            <li>
              <strong>Convenient Ordering:</strong> Shop from home and enjoy
              easy online ordering.
            </li>
            <li>
              <strong>Transparency:</strong> Know where your food comes from
              with detailed product information.
            </li>
            <li>
              <strong>Health Benefits:</strong> Make nutritious choices with
              fresh, local produce.
            </li>
            <li>
              <strong>Cost-Effectiveness:</strong> Enjoy competitive prices and
              bulk buying options.
            </li>
            <li>
              <strong>Loyalty Rewards:</strong> Join our loyalty program for
              exclusive discounts.
            </li>
            <li>
              <strong>Educational Resources:</strong> Access recipes and
              nutritional tips to enhance your cooking.
            </li>
            <li>
              <strong>Customer Testimonials:</strong> Hear from satisfied
              customers about their experiences.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
