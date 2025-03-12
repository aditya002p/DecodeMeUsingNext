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
// Assuming you have this SVG in your assets folder
import backgroundSvg from "../../../public/FeaturesBg.svg";

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
    emoji: "🤖",
    description:
      "Lots of students pick engineering after 12th, but half jump ship! Imagine signing up for a game only to realize you don't like it—yep, that's what happens when students choose a field just because \"everyone else is doing it\"! 🚀",
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
      const isMobile = window.innerWidth < 768;

      // For mobile devices, activate all features at once and no timeline
      if (isMobile) {
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

        // Calculate how much of the timeline should be filled based on scroll position
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

        // Update checkpoints (boxes with checkmarks) based on scroll position
        checkpointsRef.current.forEach((checkpoint, index) => {
          if (checkpoint) {
            const checkpointPosition = index / (featureItems.length - 1);

            // Determine if this checkpoint should be active
            const isActive = visiblePercentage >= checkpointPosition;

            // Update visibility and style
            checkpoint.style.backgroundColor = isActive ? "#442D00" : "#D9D9D9";
            checkpoint.style.borderColor = isActive ? "#442D00" : "#D9D9D9";
            checkpoint.style.opacity = isActive ? "1" : "0.6";

            // Update the checkmark icon visibility
            const checkmarkElement = checkpoint.querySelector("svg");
            if (checkmarkElement) {
              checkmarkElement.style.opacity = isActive ? "1" : "0";
            }
          }
        });

        // Activate features based on scroll position
        featureItems.forEach((feature, index) => {
          const element = featureRefs.current[feature.id];
          if (element) {
            const checkpointPosition = index / (featureItems.length - 1);
            const isVisible = visiblePercentage >= checkpointPosition;

            // Update the active state for this feature
            setActiveFeatures((prev) => ({
              ...prev,
              [feature.id]: isVisible,
            }));
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isTimelineActive]);

  return (
    <section id="features" className="my-40 relative" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:justify-center sm:items-center">
        {/* Title Section with heading and description */}
        <div className="text-center mb-24 relative">
          <h2 className="lg:text-5xl text-4xl font-bold mb-4 text-[#3E3E3E] tracking-tight">
            Why Are We Here? 🤔
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
            className="absolute left-1/2 transform -translate-x-1/2 h-full hidden lg:block"
            style={{ width: "8px" }}
          >
            {/* Main timeline line */}
            <div
              ref={timelineRef}
              className="h-full w-full bg-[#D9D9D9] transition-all duration-300 ease-in"
              style={{ marginTop: "60px", marginBottom: "60px" }}
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
                  feature.position === "left"
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                } items-center ${
                  activeFeatures[feature.id] ? "opacity-100" : "opacity-70"
                } transition-opacity duration-500`}
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
                    <div className="-mt-12 md:-mt-16 relative z-10 items-start">
                      <h3 className="text-2xl font-bold mb-2 lg:w-[370px] text-start">
                        {feature.title} <span>{feature.emoji}</span>
                      </h3>
                      <p className="text-gray-600 mb-6 text-start lg:w-[400px] text-sm leading-6">
                        {feature.description}
                      </p>
                      <Button
                        variant="figma"
                        size="lg"
                        className="font-medium drop-shadow-lg"
                      >
                        {feature.buttonText}
                        <div className="ml-3 bg-white rounded-lg w-5 h-4 py-[3px] px-[3.19px]">
                          <svg
                            width="15"
                            height="9"
                            viewBox="0 0 15 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.4915 4.37827L8.99655 1.87741C8.95639 1.83938 8.90604 1.81384 8.85164 1.80392C8.79723 1.79399 8.74111 1.80011 8.69011 1.82151C8.63912 1.84292 8.59545 1.87869 8.56442 1.92448C8.5334 1.97026 8.51636 2.02408 8.51538 2.07938V4.12878H3.67404C3.55588 4.12878 3.44256 4.17572 3.35901 4.25927C3.27545 4.34282 3.22852 4.45614 3.22852 4.5743C3.22852 4.69246 3.27545 4.80578 3.35901 4.88933C3.44256 4.97289 3.55588 5.01982 3.67404 5.01982H8.51538V7.06923C8.51636 7.12452 8.5334 7.17834 8.56442 7.22413C8.59545 7.26991 8.63912 7.30569 8.69011 7.32709C8.74111 7.3485 8.79723 7.35461 8.85164 7.34469C8.90604 7.33476 8.95639 7.30923 8.99655 7.2712L11.4915 4.77033C11.5185 4.74531 11.54 4.71498 11.5547 4.68125C11.5694 4.64752 11.577 4.61111 11.577 4.5743C11.577 4.5375 11.5694 4.50109 11.5547 4.46735C11.54 4.43362 11.5185 4.4033 11.4915 4.37827Z"
                              fill="#2A2A2A"
                            />
                          </svg>
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Image section with SVG background */}
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
                    } max-w-md relative`}
                  >
                    {/* SVG Background Pattern */}
                    <div className="absolute inset-0 -z-10 transform scale-125 opacity-30">
                      <Image
                        src={backgroundSvg}
                        alt="Background pattern"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>

                    {/* Feature Image */}
                    <div
                      className={`
                      rounded-lg overflow-hidden transform transition-all duration-500
                    `}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.imageAlt}
                        width={400}
                        height={400}
                        className="rounded-lg z-10 relative"
                      />
                    </div>
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
