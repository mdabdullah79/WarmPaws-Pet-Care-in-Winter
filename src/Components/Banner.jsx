import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Banner = () => {
  return (
    <div className="w-full h-[60vh] bg-blue-50 flex items-center justify-center">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} // ✅ Added Autoplay
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 3000, // ✅ Auto slide every 3 seconds
          disableOnInteraction: false, // Keeps autoplay active after interaction
        }}
        loop={true} // ✅ Infinite looping
        speed={1000} // ✅ Smooth transition speed (1s)q
        
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="bg-blue-500 text-white text-3xl font-bold h-[60vh] flex items-center justify-center">
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-600 text-white text-3xl font-bold h-[60vh] flex items-center justify-center">
            Slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-700 text-white text-3xl font-bold h-[60vh] flex items-center justify-center">
            Slide 3
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-800 text-white text-3xl font-bold h-[60vh] flex items-center justify-center">
            Slide 4
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
