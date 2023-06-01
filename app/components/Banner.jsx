import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div
      className="pt-32 pb-20 w-[90%] mx-auto lg:pt-0 min-h-[400px] lg:min-h-[850px] max-w-[1440px]
     flex flex-col justify-center space-y-10 lg:space-y-0 lg:flex-row lg:gap-x-4 items-center"
    >
      <div className="max-w-[600px] flex flex-col container mx-auto items-center justify-start">
        <h1 className="text-center lg:text-left text-5xl lg:text-6xl uppercase font-bold tracking-wider mb-4">
          We take care of <span className="text-orange">your pet</span>
        </h1>
        <p className="text-center lg:text-left text-lg mb-10">
          We provide exceptional care and services tailored to meet the unique
          needs of your beloved furry companions. We are committed to ensuring
          the well-being and happiness of every dog in our care.
        </p>
        <button className="btn btn-orange text-lg">Learn more</button>
      </div>
      <Image src="/img/banner.png" alt="banner" width={280} height={280} />
    </div>
  );
};

export default Banner;
