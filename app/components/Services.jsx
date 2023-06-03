"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import Service1 from "/public/img/service-icon1.svg";
import Service2 from "/public/img/service-icon2.svg";
import Service3 from "/public/img/service-icon3.svg";

const service = [
  {
    icon: Service1,
    name: "Pharmacy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
  },
  {
    icon: Service2,
    name: "Haircuts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
  },
  {
    icon: Service3,
    name: "Cloths",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
  },
];

export const Services = () => {
  return (
    <div
      id="#Services"
      className="min-h-[850px] py-12 px-4 pt-32 bg-teal bg-center bg-no-repeat bg-cover"
    >
      <div className="mx-auto container h-[850px]">
        <div className="text-3xl lg:text-4xl text-center mb-8 text-cream font-semibold">
          Our Services
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          className="serviceSlider min-h-[550px]"
        >
          {service.map((item, index) => (
            <SwiperSlide
              key={index}
              className="bg-cream min-h-[350px] rounded-[60px] py-12 px-8"
            >
              <Image src={item.icon} alt={item.name} className="mb-8" />
              <div className="text-2xl font-medium mb-4">{item.name}</div>
              <div className="text-lg mb-8">{item.description}</div>
              <button className="btn-primary">Learn More</button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
