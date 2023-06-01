"use client";

import Link from "next/link";

const MenuItem = ({ label }) => {
  return (
    <Link
      href={`#${label}`}
      className="text-lg cursor-pointer transition duration-200 p-2 w-full text-center hover:text-orange"
    >
      {label}
    </Link>
  );
};

export default MenuItem;
