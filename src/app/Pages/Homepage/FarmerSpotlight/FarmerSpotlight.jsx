"use client";
import hero1 from "../../../asset/Image1.jpg";
import hero2 from "../../../asset/Image2.jpg";
import hero3 from "../../../asset/Image3.jpg";
import hero4 from "../../../asset/Image4.jpg";
import hero6 from "../../../asset/Image6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Import navigation styles
import { Navigation } from "swiper/modules"; // Import the Navigation module
import Image from "next/image";

const FarmerSpotlight = () => {
  return (
    <div className="max-w-[1170px] mx-auto mt-10 lg:mt-14 px-3 lg:px-0 mb-10">
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
      <div className="relative mt-10">
        {/* Navigation buttons */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

        <Swiper
          spaceBetween={20}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
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
          modules={[Navigation]} // Use Navigation module
          className="mySwiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="card bg-base-100 h-[550px]">
              <figure>
                <Image
                  className="min-h-[300px]"
                  src={hero1}
                  alt="hero"
                  height={500}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Rahim Mondal: Organic Farming Pioneer
                </h2>
                <p>
                  Rahim has been a passionate advocate for organic farming for
                  over 15 years, ensuring that his crops are grown without
                  chemicals and pesticides. His farm supplies some of the
                  freshest and most nutritious produce in the region.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="card bg-base-100 h-[550px]">
              <figure>
                <Image
                  className="min-h-[300px]"
                  src={hero2}
                  alt="hero"
                  height={500}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Karim Gain: Champion of Sustainability
                </h2>
                <p>
                  Karim has made it her mission to implement sustainable farming
                  practices that protect the environment. Her dedication to
                  water conservation and soil health is making a real difference
                  in the farming community.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="card bg-base-100 h-[550px]">
              <figure>
                <Image
                  className="min-h-[300px]"
                  src={hero3}
                  alt="hero"
                  height={500}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Monir Mia: Innovator in Urban Agriculture
                </h2>
                <p>
                  Monir Mia is a pioneer in farming and he is at the forefront
                  of urban agriculture, turning city spaces into thriving farms.
                  His innovative techniques help urban dwellers access fresh,
                  locally grown produce right in the heart of the city.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div className="card bg-base-100 h-[550px]">
              <figure>
                <Image
                  className="min-h-[300px]"
                  src={hero4}
                  alt="hero"
                  height={500}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Ranjit Das: Guardian of Heritage Seeds
                </h2>
                <p>
                  Ranjit Das is a professional farmer and he is dedicated to
                  preserving heritage seed varieties, growing heirloom crops
                  that have been passed down through generations. Her farm is a
                  living history of agricultural biodiversity.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 5 */}
          <SwiperSlide>
            <div className="card bg-base-100 h-[550px]">
              <figure>
                <Image
                  className="min-h-[300px]"
                  src={hero6}
                  alt="hero"
                  height={500}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Amena Begum: Advocate for Farm-to-Table
                </h2>
                <p>
                  Amena works tirelessly to connect local farmers with
                  restaurants and consumers, promoting the farm-to-table
                  movement. His passion for fresh, locally grown food is helping
                  strengthen the bond between growers and the community.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default FarmerSpotlight;
