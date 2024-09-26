"use client";
import banner1 from "../../../asset/Banner1.jpg";
import banner2 from "../../../asset/Banner2.jpg";
import banner3 from "../../../asset/Banner3.jpg";
import banner4 from "../../../asset/Banner4.jpg";
import banner5 from "../../../asset/Banner5.jpg";
import banner6 from "../../../asset/Banner6.jpg";
import Image from "next/image";

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

import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Link from "next/link";
const Banner = () => {
  const [typewriterKey, setTypewriterKey] = useState(0);
  const resetTypewriter = () => {
    setTypewriterKey((prevKey) => prevKey + 1);
  };
  return (
    <div className="banner-area">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={resetTypewriter}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="lg:h-screen">
            <div className="relative hero min-h-screen">
              <Image
                src={banner1}
                alt="Farm2Table Banner"
                layout="fill"
                objectFit="cover"
                className="z-0"
              />
              <div className="hero-overlay bg-opacity-60 z-10 pointer-events-none"></div>
              <div className="hero-content text-center text-neutral-content z-20 relative">
                <div className="max-w-lg">
                  <h1 className="mb-5 text-5xl font-bold text-yellow">
                    F
                    <Typewriter
                      key={typewriterKey}
                      words={["arm2Table"]}
                      loop={5}
                      cursor
                      cursorStyle=""
                      typeSpeed={60}
                      deleteSpeed={60}
                      delaySpeed={2000}
                    />
                  </h1>
                  <p className="mb-5 text-white">
                    Farm2Table connects local farmers directly with consumers,
                    eliminating middlemen. Enjoy fresh produce at fair prices
                    while supporting sustainable agriculture. Join us today!
                  </p>
                  <Link href="/login" className="project-btn">
                    Join Us!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="lg:h-screen">
            <div className="relative hero min-h-screen">
              <Image
                src={banner2}
                alt="Farm2Table Banner"
                layout="fill"
                objectFit="cover"
                className="z-0"
              />
              <div className="hero-overlay bg-opacity-60 z-10 pointer-events-none"></div>
              <div className="hero-content text-center text-neutral-content z-20 relative">
                <div className="max-w-lg">
                  <h1 className="mb-5 text-5xl font-bold text-yellow">
                    F
                    <Typewriter
                      key={typewriterKey}
                      words={["arm2Table"]}
                      loop={5}
                      cursor
                      cursorStyle=""
                      typeSpeed={60}
                      deleteSpeed={60}
                      delaySpeed={2000}
                    />
                  </h1>
                  <p className="mb-5 text-white">
                    Farm2Table connects local farmers directly with consumers,
                    eliminating middlemen. Enjoy fresh produce at fair prices
                    while supporting sustainable agriculture. Join us today!
                  </p>
                  <Link href="/login" className="project-btn">
                    Join Us!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="lg:h-screen">
            <div className="relative hero min-h-screen">
              <Image
                src={banner3}
                alt="Farm2Table Banner"
                layout="fill"
                objectFit="cover"
                className="z-0"
              />
              <div className="hero-overlay bg-opacity-60 z-10 pointer-events-none"></div>
              <div className="hero-content text-center text-neutral-content z-20 relative">
                <div className="max-w-lg">
                  <h1 className="mb-5 text-5xl font-bold text-yellow">
                    F
                    <Typewriter
                      key={typewriterKey}
                      words={["arm2Table"]}
                      loop={5}
                      cursor
                      cursorStyle=""
                      typeSpeed={60}
                      deleteSpeed={60}
                      delaySpeed={2000}
                    />
                  </h1>
                  <p className="mb-5 text-white">
                    Farm2Table connects local farmers directly with consumers,
                    eliminating middlemen. Enjoy fresh produce at fair prices
                    while supporting sustainable agriculture. Join us today!
                  </p>
                  <Link href="/login" className="project-btn">
                    Join Us!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="lg:h-screen">
            <div className="relative hero min-h-screen">
              <Image
                src={banner4}
                alt="Farm2Table Banner"
                layout="fill"
                objectFit="cover"
                className="z-0"
              />
              <div className="hero-overlay bg-opacity-60 z-10 pointer-events-none"></div>
              <div className="hero-content text-center text-neutral-content z-20 relative">
                <div className="max-w-lg">
                  <h1 className="mb-5 text-5xl font-bold text-yellow">
                    F
                    <Typewriter
                      key={typewriterKey}
                      words={["arm2Table"]}
                      loop={5}
                      cursor
                      cursorStyle=""
                      typeSpeed={60}
                      deleteSpeed={60}
                      delaySpeed={2000}
                    />
                  </h1>
                  <p className="mb-5 text-white">
                    Farm2Table connects local farmers directly with consumers,
                    eliminating middlemen. Enjoy fresh produce at fair prices
                    while supporting sustainable agriculture. Join us today!
                  </p>
                  <Link href="/login" className="project-btn">
                    Join Us!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide>
          <div className="lg:h-screen">
            <div className="relative hero min-h-screen">
              <Image
                src={banner5}
                alt="Farm2Table Banner"
                layout="fill"
                objectFit="cover"
                className="z-0"
              />
              <div className="hero-overlay bg-opacity-60 z-10 pointer-events-none"></div>
              <div className="hero-content text-center text-neutral-content z-20 relative">
                <div className="max-w-lg">
                  <h1 className="mb-5 text-5xl font-bold text-yellow">
                    F
                    <Typewriter
                      key={typewriterKey}
                      words={["arm2Table"]}
                      loop={5}
                      cursor
                      cursorStyle=""
                      typeSpeed={60}
                      deleteSpeed={60}
                      delaySpeed={2000}
                    />
                  </h1>
                  <p className="mb-5 text-white">
                    Farm2Table connects local farmers directly with consumers,
                    eliminating middlemen. Enjoy fresh produce at fair prices
                    while supporting sustainable agriculture. Join us today!
                  </p>
                  <Link href="/login" className="project-btn">
                    Join Us!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 6 */}
        <SwiperSlide>
          <div className="lg:h-screen">
            <div className="relative hero min-h-screen">
              <Image
                src={banner6}
                alt="Farm2Table Banner"
                layout="fill"
                objectFit="cover"
                className="z-0"
              />
              <div className="hero-overlay bg-opacity-60 z-10 pointer-events-none"></div>
              <div className="hero-content text-center text-neutral-content z-20 relative">
                <div className="max-w-lg">
                  <h1 className="mb-5 text-5xl font-bold text-yellow">
                    F
                    <Typewriter
                      key={typewriterKey}
                      words={["arm2Table"]}
                      loop={5}
                      cursor
                      cursorStyle=""
                      typeSpeed={60}
                      deleteSpeed={60}
                      delaySpeed={2000}
                    />
                  </h1>
                  <p className="mb-5 text-white">
                    Farm2Table connects local farmers directly with consumers,
                    eliminating middlemen. Enjoy fresh produce at fair prices
                    while supporting sustainable agriculture. Join us today!
                  </p>
                  <Link href="/login" className="project-btn">
                    Join Us!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
