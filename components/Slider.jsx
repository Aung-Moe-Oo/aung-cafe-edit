import React from "react";
import Image from "next/image";
import hero from "../img/hero.jpg";
import hero2 from "../img/hero2.jpg";
import hero3 from "../img/hero3.jpg";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

const Slider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
      spaceBetween={100}
      slidesPerView={1}
      navigation
      effectFade
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="flex flex-col items-center justify-center relative w-full lg:h-96 h-80 bg-black"
    >
      <SwiperSlide className="relative flex flex-col items-center justify-center">
        <Image
          alt="Background Image"
          src={hero}
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0 bg-cover bg-center bg-no-repeat opacity-60"
          priority
        />
        <div className="flex flex-col mb-0 z-10 text-white items-center ">
          <h3 className="lg:text-2xl md:text-sm">
            Get Best Discount On All flavor
          </h3>
          <h1 className="font-extrabold lg:text-4xl md:text-xl mt-6">
            Buy Best Quality Coffee
          </h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative flex flex-col items-center justify-center">
        <Image
          alt="Background Image"
          src={hero2}
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0 bg-cover bg-center bg-no-repeat opacity-60"
          priority
        />
        <div className="flex flex-col mb-0 z-10 text-white items-center ">
          <h3 className="lg:text-2xl md:text-sm">
            Get Best Discount On All flavor
          </h3>
          <h1 className="font-extrabold lg:text-4xl md:text-xl mt-6">
            Buy Best Quality Coffee
          </h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative flex flex-col items-center justify-center">
        <Image
          alt="Background Image"
          src={hero3}
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0 bg-cover bg-center bg-no-repeat opacity-60"
          priority
        />
        <div className="flex flex-col mb-0 z-10 text-white items-center ">
          <h3 className="lg:text-2xl md:text-sm">
            Get Best Discount On All flavor
          </h3>
          <h1 className="font-extrabold lg:text-4xl md:text-xl mt-6">
            Buy Best Quality Coffee
          </h1>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
