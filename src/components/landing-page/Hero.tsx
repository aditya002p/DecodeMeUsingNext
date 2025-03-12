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
import Arrow1 from "../../../public/Arrow.png";

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
  const [animating, setAnimating] = useState(false);

  // Auto-advance carousel with smooth transition
  useEffect(() => {
    const interval = setInterval(() => {
      if (!animating) {
        setAnimating(true);
        setTimeout(() => {
          setCurrentSlide((prev) => (prev + 1) % carouselData.length);
          setTimeout(() => {
            setAnimating(false);
          }, 500); // Time to complete fade-in animation
        }, 500); // Time to complete fade-out animation
      }
    }, 7000); // Longer interval for better readability

    return () => clearInterval(interval);
  }, [animating]);

  // Manual navigation
  const goToSlide = (index) => {
    if (!animating && index !== currentSlide) {
      setAnimating(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setTimeout(() => {
          setAnimating(false);
        }, 500);
      }, 500);
    }
  };

  const currentItem = carouselData[currentSlide];

  return (
    <div className="max-w-7xl max-h-[724px] rounded-[30px] mx-auto px-4 sm:px-6 relative pt-12 shadow-hero-shadow bg-background-hero">
      <div className="flex flex-col lg:flex-row items-center gap-8 bg-border-image-source shadow-hero-shadow rounded-2xl overflow-hidden max-h-[724px] relative">
        {/* Content section first on all screens */}
        <div
          className={`w-full h-full lg:w-1/2 px-6 sm:px-8 lg:px-12 pt-8 lg:pt-16 pb-8 order-2 lg:order-1 relative transition-opacity duration-500 ${
            animating ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Ribbon - Attached to left of content div on small screens, and to parent div on large screens */}
          <div className="lg:hidden absolute top-0 left-0 z-10">
            <div
              className="bg-ribbon text-white text-xs sm:text-sm py-1 px-3 sm:py-2 sm:px-4 font-medium leading-6"
              style={{
                clipPath:
                  "polygon(0% 0%, 100% 0%, 93% 50%, 100% 100%, 0% 100%)",
                fontFamily: "Poppins, sans-serif",
                maxWidth: "100%",
                width: "fit-content",
              }}
            >
              {currentItem.ribbon}
            </div>
          </div>

          {/* Rating and stats - Row format on all screens */}
          <div className="mb-6 mt-6 lg:mt-0">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-14 sm:w-16 lg:w-auto">
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

          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-800 mb-4 tracking-tight">
            {currentItem.title}
          </h1>

          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
            {currentItem.description}
          </p>

          <Link href={currentItem.buttonLink}>
            <Button
              variant="fill"
              size="lg"
              className="relative bg-enquire-gradient text-black font-medium rounded-full border border-[#FFFFFF1A] before:absolute before:inset-[-2px] before:rounded-full before:border before:border-[#FFFFFF33] before:-z-10 text-sm sm:text-base w-full sm:w-auto shadow-custom-light shadow-custom-strong"
            >
              <span>{currentItem.buttonText}</span>
              <div className="ml-2 bg-white rounded-lg w-5 h-4 px-[2px] py-[2px] flex items-center justify-center">
                <ArrowRightIcon className="w-3 h-3" />
              </div>
            </Button>
          </Link>
        </div>

        {/* Image second on all screens, right side on large screens */}
        <div
          className={`w-full lg:w-1/2 order-1 lg:order-2 relative transition-opacity duration-500 ${
            animating ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Ribbon - Only on large screens, attached to top left of parent div */}
          <div className="hidden lg:block absolute top-0 left-0 z-10 translate-x-[-233%]">
            <div
              className="bg-ribbon text-white text-sm py-2 px-4 font-medium leading-6"
              style={{
                clipPath:
                  "polygon(0% 0%, 100% 0%, 93% 50%, 100% 100%, 0% 100%)",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {currentItem.ribbon}
            </div>
          </div>

          <div className="relative w-full aspect-square sm:aspect-square lg:aspect-auto lg:h-[520px]">
            <Image
              src={currentItem.imageSrc}
              alt="Hero image"
              fill
              className="object-cover w-full"
              priority
            />
          </div>

          {/* Carousel indicators - Bottom center on all screens */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
            <div className="flex justify-center gap-2 py-2 px-4 rounded-full">
              {carouselData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === index
                      ? "w-6 bg-white"
                      : "w-2 bg-gray-300 hover:bg-gray-100"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Arrow decoration - large screens only */}
      <div
        className="relative w-full pointer-events-none hidden lg:block"
        style={{ top: "0px", paddingRight: "0rem", textAlign: "left" }}
      >
        <div style={{ position: "absolute" }}>
          <Image src={Arrow1} alt="Arrow" width={293} height={300} />
        </div>
      </div>
    </div>
  );
}
