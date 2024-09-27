"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      name: "Aminul Haque",
      rating: 4.5,
      reviewText:
        "The products were fresh, and it felt great to support local farmers. Delivery was quick and hassle-free!",
      date: "2024-09-25",
      profileImage: "https://i.ibb.co/dDY5HgT/review1.jpg",
    },
    {
      id: 2,
      name: "Shahnaz Begum",
      rating: 5,
      reviewText:
        "Amazing service! The quality of the fruits and grains was excellent, and the platform was very easy to use. Highly satisfied!",
      date: "2024-09-20",
      profileImage: "https://i.ibb.co/XFK7rRn/review4.jpg",
    },
    {
      id: 3,
      name: "Rafiq Islam",
      rating: 4,
      reviewText:
        "Overall a good experience. Some items were out of stock, but the ones I received were fresh. I will definitely order again!",
      date: "2024-09-18",
      profileImage: "https://i.ibb.co/4JLgwJ1/review2.jpg",
    },
    {
      id: 4,
      name: "Nazia Rahman",
      rating: 4.8,
      reviewText:
        "Fantastic platform! I loved the variety of products, and everything was fresh and well-packaged. I will recommend it to my friends.",
      date: "2024-09-17",
      profileImage: "https://i.ibb.co/k6M95g0/review5.jpg",
    },
    {
      id: 5,
      name: "Kamal Uddin",
      rating: 4.3,
      reviewText:
        "Great experience! The checkout process was smooth, and I really appreciate the quality of the local produce.",
      date: "2024-09-15",
      profileImage: "https://i.ibb.co/tQ7LFy6/review3.jpg",
    },
  ];

  return (
    <div className="max-w-[1170px] mx-auto mt-10 lg:mt-14 px-3 lg:px-0 mb-10">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-center py-2 text-yellow bg-green-600 inline-block px-5 mb-5 lg:mb-10 rounded-lg">
          Testimonials!
        </h2>
      </div>

      {/* Subheading */}
      <div className="text-center">
        <h2 className="text-2xl lg:text-3xl mb-3 font-bold text-green">
          Hear What Our Customers Have to Say!
        </h2>
        <p>
          Discover how our platform has transformed the shopping experience for
          customers just like you. From the ease of use to the freshness of
          products, see why our community loves shopping with us and how we have
          made a difference in their daily lives.
        </p>
      </div>

      {/* Slider */}
      <div className="">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {reviews?.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center border border-green-500 py-5 px-10 mx-10 lg:mx-24 my-10">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review?.rating}
                  readOnly
                />
                <p className="max-w-[500px] py-5">{review?.reviewText}</p>
                <h2>{review?.name}</h2>
                <p>{review?.date}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
