"use client";
import hero1 from "../../../asset/Image1.jpg";
import hero2 from "../../../asset/Image2.jpg";
import hero3 from "../../../asset/Image3.jpg";
import hero4 from "../../../asset/Image4.jpg";
import hero6 from "../../../asset/Image6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const FarmerSpotlight = () => {
  return (
    <div className="max-w-[1170px] mx-auto mt-10 lg:mt-14 px-3 lg:px-0">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-center py-2 text-yellow bg-green-600 inline-block px-5 mb-5 lg:mb-10 rounded-lg">
          Farmers Spotlight
        </h2>
      </div>

      {/* Sub heading */}
      <div className="text-center">
        <h2 className="text-2xl lg:text-3xl mb-3 font-bold text-green">
          Meet Our Local Heroes:
        </h2>
        <p>
          At Farm2Table, we believe in celebrating the hardworking farmers who
          bring fresh, sustainable produce directly to your table. Our Farmer
          Spotlight showcases the incredible individuals behind the food you
          love, highlighting their passion, dedication, and unique stories. Each
          farmer plays a crucial role in nurturing the land and delivering
          quality products to our community.
        </p>
      </div>

      {/* Slider */}
      <div className="mt-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              className="min-h-[300px]"
              src={hero1}
              alt="hero"
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="min-h-[300px]"
              src={hero2}
              alt="hero"
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="min-h-[300px]"
              src={hero3}
              alt="hero"
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="min-h-[300px]"
              src={hero4}
              alt="hero"
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="min-h-[300px]"
              src={hero6}
              alt="hero"
              height={500}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default FarmerSpotlight;
