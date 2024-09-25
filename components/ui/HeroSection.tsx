"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="py-12">
      <div className="container mt-4 mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-12">
        <div className="text-left space-y-4 md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            SIMPLE CHEAP SHOPPING AND PRACTICAL
          </h1>
          <p className="text-gray-500 text-lg">
            The online shop shoes website offers a user-friendly platform with
            an extensive catalog and seamless checkout, providing a convenient
            shopping experience.
          </p>
          <div className="flex justify-start space-x-4 mt-6">
            <Link
              href="#"
              className="bg-primary text-secondary py-3 px-6 rounded-lg text-lg font-semibold"
            >
              Shop Now
            </Link>
            <Link
              href="#"
              className="border border-primary text-primary py-3 px-6 rounded-lg text-lg font-semibold"
            >
              Order Custom
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 hidden md:mt-0 md:inline">
          <Image
            src="/images/herosection.svg"
            width={800}
            height={800}
            alt="Shoes"
            className="w-full object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
