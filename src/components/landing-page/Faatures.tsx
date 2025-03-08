"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Button from "./Button";

// Sample images - replace with your actual paths
import student from "../../../public/student.svg";
import engineer from "../../../public/engineer.svg";
import wrongCareer from "../../../public/wrong-career.svg";
import jobVanish from "../../../public/job-vanish.svg";
import commerceImg from "../../../public/commerce.svg";

// Define the interface for feature items
interface FeatureItem {
  id: string;
  number: string;
  title: string;
  emoji: string;
  description: string;
  image: string;
  imageAlt: string;
  buttonText: string;
  buttonLink: string;
  position: "left" | "right";
}

// Sample data for features
const featureItems: FeatureItem[] = [
  {
    id: "feature-1",
    number: "01",
    title: "What do I wanna be when I grow up?",
    emoji: "🤔",
    description:
      "8 out of 10 students have no clue about their dream job! You're not alone if you're scratching your head thinking, `Umm... what now?` Career confusion is real, but guess what? Exploring is part of the fun!",
    image: student,
    imageAlt: "Student thinking about career",
    buttonText: "Find Your Career Type",
    buttonLink: "#career-quiz",
    position: "left",
  },
  {
    id: "feature-2",
    number: "02",
    title: 'The "Engineering Default" Button',
    emoji: "👷",
    description:
      "Lots of students pick engineering after 12th, but half jump ship! Imagine signing up for a game only to realize you don't like it—yep, that's what happens when students choose a field just because \"everyone else is doing it\"!",
    image: engineer,
    imageAlt: "Engineer thinking",
    buttonText: "Explore 12 Other Career Types",
    buttonLink: "#explore-careers",
    position: "right",
  },
  {
    id: "feature-3",
    number: "03",
    title: "Oops, Wrong Career!",
    emoji: "😱",
    description:
      "29% of students switch careers after their bachelor's! It's like picking the wrong superpower and realizing you actually want a different one! Career changes happen when we don't explore enough early on.",
    image: wrongCareer,
    imageAlt: "Person confused about career choice",
    buttonText: "Explore Your Career Type",
    buttonLink: "#career-type",
    position: "left",
  },
  {
    id: "feature-4",
    number: "04",
    title: "The One-Year Job Vanish Trick",
    emoji: "🧙‍♂️",
    description:
      "30% of fresh grads leave their first jobs within a year! Imagine training for a big boss level, only to realize it's not the game you wanna play! Many young pros leave their first job just because it's not the right fit.",
    image: jobVanish,
    imageAlt: "Person at desk with laptop",
    buttonText: "Explore All Career Types Early",
    buttonLink: "#explore-all",
    position: "right",
  },
  {
    id: "feature-5",
    number: "05",
    title: "Commerce = More Than Just CA, BCom & BBA!",
    emoji: "💰",
    description:
      "A fun fact for the commerce squad—there are 12+ career options! Reality check: #Commerce isn't just about numbers and balance sheets—There are 12+ career options you probably haven't even heard of yet!",
    image: commerceImg,
    imageAlt: "Commerce concepts",
    buttonText: "Start Exploring Today",
    buttonLink: "#start-exploring",
    position: "left",
  },
];

const Features = () => {
  const [activeFeatures, setActiveFeatures] = useState<{
    [key: string]: boolean;
  }>({});
  const featureRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      // Check each feature element to see if it's in view
      Object.keys(featureRefs.current).forEach((featureId) => {
        const element = featureRefs.current[featureId];
        if (element) {
          const rect = element.getBoundingClientRect();
          // Mark as active when the top of the element is in the middle of the viewport
          const isVisible = rect.top < viewportHeight * 0.7;

          setActiveFeatures((prev) => ({
            ...prev,
            [featureId]: isVisible,
          }));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="md:text-5xl text-4xl font-bold mb-4 text-[#3E3E3E] tracking-tight">
            Why Are We Here? 🤔
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Because choosing a career shouldn't feel like a wild guess! We're
            here to guide students to the right path—no confusion, no regrets,
            just smart choices ❤️
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

          {/* Features */}
          <div className="space-y-32">
            {featureItems.map((feature, index) => (
              <div
                key={feature.id}
                ref={(el) => (featureRefs.current[feature.id] = el)}
                className={`relative ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex flex-col md:flex-row items-center`}
              >
                {/* Checkpoint */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div
                    className={`w-8 h-8 rounded-sm border-1 ${
                      activeFeatures[feature.id]
                        ? "bg-black border-#442D00"
                        : "bg-#442D00 border border-#000000/40%"
                    } transition-all ease-in-out duration-500 flex items-center justify-center`}
                  >
                    {activeFeatures[feature.id] && (
                      <svg
                        className="w-6 h-76 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    )}
                  </div>
                </div>

                {/* Content based on position */}
                <div
                  className={`md:w-1/2 ${
                    feature.position === "left"
                      ? "md:pr-16 text-right"
                      : "md:pl-16 text-left"
                  } mb-8 md:mb-0`}
                >
                  <div
                    className={`${
                      feature.position === "left"
                        ? "md:mr-0 md:ml-auto"
                        : "md:ml-0 md:mr-auto"
                    } max-w-md`}
                  >
                    <div className="text-9xl font-bold text-gray-100 opacity-60">
                      {feature.number}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 -mt-16">
                      {feature.title} <span>{feature.emoji}</span>
                    </h3>
                    <p className="text-gray-600 mb-6">{feature.description}</p>
                    <Button
                      variant="secondary"
                      size="semi"
                      className="inline-flex items-center justify-center bg-amber-400 text-black hover:bg-amber-500 transition-colors"
                    >
                      {feature.buttonText} →
                    </Button>
                  </div>
                </div>

                {/* Image section */}
                <div
                  className={`md:w-1/2 ${
                    feature.position === "left" ? "md:pl-16" : "md:pr-16"
                  }`}
                >
                  <div
                    className={`${
                      feature.position === "left"
                        ? "md:ml-0 md:mr-auto"
                        : "md:mr-0 md:ml-auto"
                    } max-w-md`}
                  >
                    <Image
                      src={feature.image}
                      alt={feature.imageAlt}
                      width={400}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
