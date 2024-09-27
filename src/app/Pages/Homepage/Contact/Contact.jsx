import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[1170px] mx-auto mt-10 lg:mt-14 px-3 lg:px-0 pb-10">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-center py-2 text-yellow bg-green-600 inline-block px-5 mb-5 lg:mb-10 rounded-lg">
          Contact
        </h2>
      </div>

      {/* Subheading */}
      <div className="text-center">
        <h2 className="text-2xl lg:text-3xl mb-3 font-bold text-green">
          Get in Touch with Us!
        </h2>
        <p>
          We would love to hear from you! Whether you have questions, feedback,
          or just want to say hello, feel free to reach out. Our team is here to
          assist you and ensure you have the best experience possible.
        </p>
      </div>

      {/* contact */}
      <div className="hero mt-10">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10 items-start">
          <div className="text-center lg:text-left w-full">
            <h1 className="text-3xl font-bold text-green">
              Do Not Hesitate to Reach Out!
            </h1>
            <p className="py-6">
              Our dedicated team is here to help you with any questions you may
              have, whether it is about product availability, order placement,
              or our commitment to supporting local farmers. Visit our website
              for more information about our offerings and to discover how we
              can bring the freshest ingredients directly to your table. Your
              satisfaction is our top priority, and we look forward to
              connecting with you!
            </p>
            <p>
              <span className="text-lg font-bold mr-2">Phone:</span> +1 (555)
              123-4567
            </p>
            <p>
              <span className="text-lg font-bold mr-2">Email:</span>{" "}
              info@farm2table.com
            </p>
            <p>
              <span className="text-lg font-bold mr-2">Address:</span> 123,
              Badda Main Street, Dhaka 1212
            </p>
          </div>
          <div className="card w-full border border-green-500">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn project-btn">Contact Us</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
