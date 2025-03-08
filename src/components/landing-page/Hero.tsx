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
    <div className="max-w-7xl mx-auto px-4 relative pt-12">
      <div className="flex flex-col md:flex-row items-center gap-8 bg-border-image-source shadow-lg shadow-border rounded-2xl overflow-hidden">
        {/* Ribbon */}
        <div className="absolute top-16 w-80 h-11 md">
          <div
            className="bg-ribbon text-white text-xs md:text-sm py-2 px-4 font-medium leading-6"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 93% 50%, 100% 100%, 0% 100%)",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            {currentItem.ribbon}
          </div>
        </div>

        {/* Left Content */}
        <div className="w-full md:w-1/2 px-8 md:px-12 md:mt-[-100px]">
          {/* Rating and stats */}
          <div className="">
            <div className="flex items-center gap-4 mb-2">
              <div>
                <div className="">
                  <Image
                    src={Avatar1}
                    alt="User avatar"
                    width={100}
                    height={100}
                    className=""
                  />
                </div>
              </div>
              <div>
                <div className="flex text-yellow-400 text-sm">{"★★★★★"}</div>
                <p className="text-xs text-gray-600">
                  300+ Students Counseled | 100+ Industry Experts Onboarded
                </p>
              </div>
            </div>
          </div>

          <h1 className="font-bold text-3xl md:text-4xl text-gray-800 mb-4 tracking-tight">
            {currentItem.title}
          </h1>

          <p className="text-gray-600 mb-8">{currentItem.description}</p>

          <Link href={currentItem.buttonLink}>
            <Button
              variant="tertiary"
              size="lg"
              className="rounded-enquire shadow-button border-enquire bg-enquire-gradient text-black font-medium"
            >
              <span>{currentItem.buttonText}</span>
              <div className="ml-2 bg-white rounded-lg w-5 h-4 px-[2px] py-[2px]">
                <ArrowRightIcon className="" />
              </div>
            </Button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 h-full">
          <div className="relative md:w-[533px] md:h-[724px] w-full">
            <Image
              src={currentItem.imageSrc}
              alt="Hero image"
              fill
              className=""
            />
          </div>
        </div>
      </div>

      {/* Carousel indicators */}
      <div className="flex justify-center mt-6 gap-2">
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

      {/* <FeaturedOn /> */}
    </div>
  );
}
