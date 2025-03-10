"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CardProps, QuoteLeftSVG, QuoteRightSVG } from "./CardsData";

interface FeatureCardProps {
  card: CardProps;
  scale: any;
  isActive: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ card, scale, isActive }) => {
  // Function to determine text color based on background color
  const getTextColor = (bgColor: string) => {
    return bgColor === "#402E32" ? "text-white" : "text-black";
  };

  // Get quote color based on background
  const quoteColor = card.backgroundColor;

  return (
    <div className="sticky top-20 w-full pt-10">
      <motion.div
        style={{ scale }}
        className={`rounded-3xl w-full mx-auto max-w-6xl ${
          isActive ? "z-10" : "z-0"
        }`}
      >
        <div
          className={`relative flex flex-col md:flex-row items-center p-6 md:p-12 gap-6 md:gap-12 rounded-3xl overflow-hidden ${getTextColor(
            card.backgroundColor
          )}`}
          style={{
            backgroundColor: card.backgroundColor,
          }}
        >
          {/* Background pattern - same for all cards */}
          <div
            className="absolute inset-0 w-full h-full opacity-20"
            style={{
              backgroundImage: `url('/backgrounds/bg-pattern.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Quote SVG - alternating positions */}
          <div
            className={`absolute ${
              card.quotePosition === "topLeft"
                ? "top-4 left-4 md:top-6 md:left-6"
                : "top-4 right-4 md:top-6 md:right-6"
            }`}
          >
            {card.quotePosition === "topLeft" ? (
              <QuoteLeftSVG color={quoteColor} />
            ) : (
              <QuoteRightSVG color={quoteColor} />
            )}
          </div>

          {/* Content layout changes based on first card or other cards */}
          {card.id === 1 ? (
            <>
              {/* First card has special image positioning */}
              <div className="absolute -top-16 left-6 md:-top-20 md:left-10 z-10">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={180}
                  height={200}
                  className="object-contain"
                />
              </div>

              {/* Text content for first card */}
              <div className="w-full mt-16 md:mt-6 md:ml-48 flex flex-col gap-2 md:gap-4 z-10">
                <h2 className="text-2xl md:text-3xl font-medium leading-tight">
                  {card.title}
                </h2>
                <p className="text-lg md:text-2xl">{card.description}</p>
              </div>
            </>
          ) : (
            <>
              {/* Text content for other cards */}
              <div
                className={`w-full md:w-1/2 flex flex-col gap-2 md:gap-4 z-10 ${
                  card.quotePosition === "topRight"
                    ? "md:order-1"
                    : "md:order-2"
                }`}
              >
                <h2 className="text-xl md:text-2xl font-medium leading-tight">
                  {card.title}
                </h2>
                <p className="text-lg md:text-xl">{card.description}</p>
              </div>

              {/* Image for other cards */}
              <div
                className={`w-full md:w-1/2 flex justify-center items-center z-10 ${
                  card.quotePosition === "topRight"
                    ? "md:order-2"
                    : "md:order-1"
                }`}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={220}
                  height={220}
                  className="object-contain"
                />
              </div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default FeatureCard;
