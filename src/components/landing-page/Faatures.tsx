"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Button from "./Button";
import student from "../../../public/student.svg";
import engineer from "../../../public/engineer.svg";
import wrongCareer from "../../../public/wrong-career.svg";
import jobVanish from "../../../public/job-vanish.svg";
import commerceImg from "../../../public/commerce.svg";
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
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isTimelineActive, setIsTimelineActive] = useState(false);

  const featureRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const indicatorRef = useRef<HTMLDivElement | null>(null);
  const checkpointsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        const allActive = featureItems.reduce((acc, feature) => {
          acc[feature.id] = true;
          return acc;
        }, {} as { [key: string]: boolean });

        setActiveFeatures(allActive);
        return;
      }

      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      if (sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const sectionTop = sectionRect.top + window.scrollY;
        const sectionBottom = sectionRect.bottom + window.scrollY;
        const isSectionVisible =
          scrollPosition + viewportHeight > sectionTop &&
          scrollPosition < sectionBottom;

        setIsTimelineActive(isSectionVisible);

        if (!isSectionVisible) return;
      }

      if (timelineRef.current) {
        const timelineElement = timelineRef.current;
        const timelineRect = timelineElement.getBoundingClientRect();
        const timelineTop = timelineRect.top + window.scrollY;
        const timelineHeight = timelineRect.height;
        const timelineBottom = timelineTop + timelineHeight;

        const visiblePercentage = Math.min(
          Math.max(
            (scrollPosition + viewportHeight * 0.6 - timelineTop) /
              timelineHeight,
            0
          ),
          1
        );

        setScrollPosition(visiblePercentage);

        // Apply the gradient based on scroll position
        timelineElement.style.background = `linear-gradient(to bottom, #442D00 ${
          visiblePercentage * 100
        }%, #D9D9D9 ${visiblePercentage * 100}%)`;

        // Position the indicator dot along the timeline
        if (indicatorRef.current) {
          indicatorRef.current.style.top = `${visiblePercentage * 100}%`;
          indicatorRef.current.style.opacity = isTimelineActive ? "1" : "0";
        }

        // Update the checkpoints based on the current scroll position
        checkpointsRef.current.forEach((checkpoint, index) => {
          if (checkpoint) {
            const checkpointPosition = index / (featureItems.length - 1);

            // Set active state
            const isActive = visiblePercentage >= checkpointPosition;

            // Update visibility and style
            checkpoint.style.backgroundColor = isActive ? "#442D00" : "#D9D9D9";
            checkpoint.style.borderColor = isActive ? "#442D00" : "#D9D9D9";
            checkpoint.style.opacity = isActive ? "1" : "0.6";

            // For the checkmark icon
            const checkmarkElement = checkpoint.querySelector("svg");
            if (checkmarkElement) {
              checkmarkElement.style.opacity = isActive ? "1" : "0";
            }
          }
        });

        // Check each feature element to see if it's in view
        featureItems.forEach((feature, index) => {
          const element = featureRefs.current[feature.id];
          if (element) {
            const checkpointPosition = index / (featureItems.length - 1);
            // Mark as active when the scroll position passes this point
            const isVisible = visiblePercentage >= checkpointPosition;

            setActiveFeatures((prev) => ({
              ...prev,
              [feature.id]: isVisible,
            }));
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isTimelineActive]);

  return (
    <section
      id="features"
      className="py-20 relative overflow-y-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        {/* Title Section with heading and description */}
        <div className="text-center mb-24 relative">
          <h2 className="md:text-5xl text-4xl font-bold mb-4 text-[#3E3E3E] tracking-tight">
            Why Are We Here?{" "}
            <span className="inline-block align-middle ml-2">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="24"
                  cy="24"
                  r="23"
                  fill="#FFD966"
                  stroke="#3A3A3A"
                  strokeWidth="2"
                />
                <path
                  d="M18 22C18 22 20 19 24 19C28 19 30 22 30 22"
                  stroke="#3A3A3A"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="17" cy="16" r="2" fill="#3A3A3A" />
                <circle cx="31" cy="16" r="2" fill="#3A3A3A" />
              </svg>
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Because choosing a career shouldn&apos;t feel like a wild guess!
            We&apos;re here to guide students to the right path—no confusion, no
            regrets, just smart choices <span className="inline-block">❤️</span>
          </p>
        </div>

        <div className="relative">
          {/* Timeline container - visible only on md screens and up */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 h-full hidden md:block"
            style={{ width: "8px" }}
          >
            {/* Main timeline line */}
            <div
              ref={timelineRef}
              className="h-full w-full bg-[#D9D9D9] transition-all duration-300 ease-in-out"
              style={{ marginTop: "60px", marginBottom: "60px" }}
            ></div>

            {/* Moving indicator dot */}
            <div
              ref={indicatorRef}
              className="absolute w-6 h-6 bg-[#442D00] rounded-full left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out z-20"
              style={{
                boxShadow: "0 0 8px rgba(68, 45, 0, 0.7)",
                marginTop: "60px",
              }}
            ></div>

            {/* Checkpoint markers */}
            {featureItems.map((feature, index) => (
              <div
                key={`checkpoint-${feature.id}`}
                ref={(el) => (checkpointsRef.current[index] = el)}
                className="absolute w-8 h-8 rounded-sm border transform -translate-x-1/2 left-1/2 flex items-center justify-center transition-all duration-300 ease-in-out z-10"
                style={{
                  top: `${(index / (featureItems.length - 1)) * 100}%`,
                  marginTop: "60px",
                  backgroundColor: activeFeatures[feature.id]
                    ? "#442D00"
                    : "#D9D9D9",
                  borderColor: activeFeatures[feature.id]
                    ? "#442D00"
                    : "#D9D9D9",
                  opacity: activeFeatures[feature.id] ? 1 : 0.6,
                }}
              >
                <svg
                  className="w-6 h-6 text-white transition-opacity duration-300"
                  style={{ opacity: activeFeatures[feature.id] ? 1 : 0 }}
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
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="space-y-32 md:space-y-64">
            {featureItems.map((feature, index) => (
              <div
                key={feature.id}
                ref={(el) => (featureRefs.current[feature.id] = el)}
                className={`relative flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center`}
              >
                {/* Content based on position */}
                <div
                  className={`w-full md:w-1/2 ${
                    feature.position === "left"
                      ? "md:pr-16 md:text-right"
                      : "md:pl-16 md:text-left"
                  } mb-8 md:mb-0`}
                >
                  <div
                    className={`${
                      feature.position === "left"
                        ? "md:mr-0 md:ml-auto"
                        : "md:ml-0 md:mr-auto"
                    } max-w-md relative`}
                  >
                    {/* Number positioned at top of content */}
                    <div className="text-7xl md:text-8xl font-bold bg-custom-gradient bg-clip-text text-transparent mb-2 absolute -top-20 md:block hidden">
                      {feature.number}
                    </div>

                    {/* Title and content overlay */}
                    <div className="-mt-12 md:-mt-16 relative z-10">
                      <h3 className="text-2xl font-bold mb-2">
                        {feature.title} <span>{feature.emoji}</span>
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {feature.description}
                      </p>
                      <Button
                        variant="secondary"
                        size="lg"
                        className="md:w-80 relative bg-enquire-gradient text-black font-medium rounded-full shadow-lg border border-[#FFFFFF1A] before:absolute before:inset-[-2px] before:rounded-full before:border before:border-[#FFFFFF33] before:-z-10 text-sm sm:text-base w-full sm:w-auto"
                      >
                        <span>{feature.buttonText} </span>
                        <div className="ml-2 bg-white rounded-lg w-5 h-4 px-[2px] py-[2px] flex items-center justify-center">
                          <ArrowRightIcon className="w-3 h-3" />
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Image section */}
                <div
                  className={`w-full md:w-1/2 ${
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
