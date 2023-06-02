"use client";

import Image from "next/image";
import { useState } from "react";
import dog1 from "/public/img/dog-1.jpg";
import dog2 from "/public/img/dog-2.jpg";
import dog3 from "/public/img/dog-3.jpg";
import dog4 from "/public/img/dog-4.jpg";
import dog5 from "/public/img/dog-5.jpg";

const dogs = [
  {
    id: 1,
    name: "Labrador Retriever",
    imageUrl: dog1,
  },
  {
    id: 2,
    name: "German Shepherd",
    imageUrl: dog2,
  },
  {
    id: 3,
    name: "Golden Retriever",
    imageUrl: dog3,
  },
  {
    id: 4,
    name: "Bulldog",
    imageUrl: dog4,
  },
  {
    id: 5,
    name: "Poodle",
    imageUrl: dog5,
  },
];

const Breeds = () => {
  const [dogDetail, setDogDetail] = useState(dogs[0]);

  const getDog = (id) => {
    const dog = dogs.find((dog) => {
      return dog.id === id;
    });
    setDogDetail(dog);
  };

  return (
    <div
      id="Dogs"
      className="py-6 pt-32 bg-orange overflow-hidden flex flex-col lg:flex-row"
    >
      <div className="hidden xl:flex xl:w-[30%] xl:pl-[160px]">
        <Image
          src="/img/walking-dog.png"
          alt="walking-dog"
          height={230}
          width={230}
        />
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-2 text-center text-white">
        {/* pet detail */}
        <div className="flex flex-col lg:w-[30%] pb-6 lg:py-2 justify-center items-center ">
          <div className="text-xl mb-2">{dogDetail.name}</div>
          <div className=" mx-auto">
            <Image
              src={dogDetail.imageUrl}
              alt={dogDetail.name}
              width={200}
              height={200}
              className="rounded-full border-4 border-white"
            />
          </div>
        </div>
        {/* pet list */}
        <div className="relative lg:w-[60%] flex-1 flex gap-6 flex-wrap items-center justify-center ">
          {dogs.map((dog) => (
            <Image
              key={dog.id}
              onClick={() => getDog(dog.id)}
              src={dog.imageUrl}
              alt={dog.name}
              width={120}
              height={120}
              className="rounded-full cursor-pointer hover:opacity-90"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breeds;
