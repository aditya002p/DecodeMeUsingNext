"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Button from "./Button";
import Link from "next/link";
import Hero1 from "../../../public/Hero1.svg";
import Hero2 from "../../../public/Hero2.svg";
import Hero3 from "../../../public/Hero3.svg";
import Avatar1 from "../../../public/avatar.svg";

// Carousel data structure
const carouselData = [
  {
    id: 1,
    title: "Career Exploration, Made Fun & Easy!",
    description:
      "Why should choosing a career be boring or stressful? Our career exploration portal has made it fun, simple & embarrassingly easy.",
    buttonText: "Explore Careers Today",
    buttonLink: "#explore",
    imageSrc: Hero3, // Path to your first carousel image
    ribbon: "India's 1st Career Exploration Platform",
  },
  {
    id: 2,
    title: "Confident in Your Career Choice? Test It with Us!",
    description:
      "Experience the real-world work done in the career of your choice and cross check your love for your beloved career!",
    buttonText: "Test Your Career Choice",
    buttonLink: "#test",
    imageSrc: Hero1, // Path to your second carousel image
    ribbon: "India's 1st Career Exploration Platform",
  },
  {
    id: 3,
    title: "Clueless About Your Career? Discover & Explore!",
    description:
      "Not sure what to choose or where to start from? Start exploring ALL careers via our career exploration portal & find your career type.",
    buttonText: "Find Your Career Type",
    buttonLink: "#find",
    imageSrc: Hero2, // Path to your third carousel image
    ribbon: "India's 1st Career Exploration Platform",
  },
  // Add more items as needed in the future
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Manual navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentItem = carouselData[currentSlide];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative pt-12">
      <div className="flex flex-col md:flex-row items-center gap-8 bg-border-image-source shadow-lg shadow-border rounded-2xl overflow-hidden">
        {/* Ribbon - Responsive positioning */}
        <div className="absolute top-8 sm:top-12 md:top-16 left-4 sm:left-6 md:left-6 z-10 md:w-80 w-auto">
          <div
            className="bg-ribbon text-white text-xs sm:text-sm py-2 px-4 font-medium leading-6"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 93% 50%, 100% 100%, 0% 100%)",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            {currentItem.ribbon}
          </div>
        </div>

        {/* Left Content */}
        <div className="w-full md:w-1/2 px-6 sm:px-8 md:px-12 pt-16 sm:pt-20 md:pt-0 md:mt-0 pb-8 order-2 md:order-1">
          {/* Rating and stats */}
          <div className="mb-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-14 sm:w-16 md:w-auto">
                <Image
                  src={Avatar1}
                  alt="User avatar"
                  width={150}
                  height={150}
                  className="w-full h-auto"
                />
              </div>
              <div>
                <div className="flex text-yellow-400 text-sm sm:text-base">
                  {"★★★★★"}
                </div>
                <p className="text-xs sm:text-sm text-gray-600">
                  300+ Students Counseled | 100+ Industry Experts Onboarded
                </p>
              </div>
            </div>
          </div>

          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-4 tracking-tight">
            {currentItem.title}
          </h1>

          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
            {currentItem.description}
          </p>

          <Link href={currentItem.buttonLink}>
            <Button
              variant="fill"
              size="lg"
              className="relative bg-enquire-gradient text-black font-medium rounded-full shadow-lg border border-[#FFFFFF1A] before:absolute before:inset-[-2px] before:rounded-full before:border before:border-[#FFFFFF33] before:-z-10 text-sm sm:text-base w-full sm:w-auto"
            >
              <span>{currentItem.buttonText}</span>
              <div className="ml-2 bg-white rounded-lg w-5 h-4 px-[2px] py-[2px] flex items-center justify-center">
                <ArrowRightIcon className="w-3 h-3" />
              </div>
            </Button>
          </Link>
        </div>

        {/* Right Image - Responsive sizing and ordering */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <div className="relative w-full aspect-[4/3] sm:aspect-square- md:aspect-auto md:w-full md:h-[600px] lg:h-[724px]">
            <Image
              src={currentItem.imageSrc}
              alt="Hero image"
              fill
              className="object-contain md:object-cover md:mt-0 mt-10"
              priority
            />
          </div>
        </div>
      </div>

      {/* Carousel indicators */}
      <div className="flex justify-center mt-4 sm:mt-6 gap-2 pb-6">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              currentSlide === index ? "w-6 bg-indigo-600" : "w-2 bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
