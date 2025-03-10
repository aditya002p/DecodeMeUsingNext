"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CardProps, QuoteLeftSVG, QuoteRightSVG } from "./CardsData";

interface FeatureCardProps {
  card: CardProps;
  scale: any;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ card, scale }) => {
  return (
    <div className="sticky top-20 w-full pt-10">
      <motion.div style={{ scale }} className="rounded-3xl">
        <div
          className="relative flex flex-col md:flex-row items-center p-8 md:p-12 gap-8 md:h-[600px] rounded-t-[100px]"
          style={{
            backgroundColor: card.cardBackgroundColor,
            backgroundImage:
              card.id === 1 ? "none" : `url('/backgrounds/bg-${card.id}.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Quote SVG - alternating positions */}
          <div
            className={`py-24 px-28 absolute ${
              card.quotePosition === "topLeft"
                ? "top-6 left-6"
                : "top-6 right-6"
            } `}
          >
            {card.quotePosition === "topLeft" ? (
              <QuoteLeftSVG />
            ) : (
              <QuoteRightSVG />
            )}
          </div>

          {/* Image for first card - special positioning */}
          {card.id === 1 && (
            <div className="absolute -top-24 left-6 md:left-10">
              <Image
                src={card.image}
                alt={card.title}
                width={215}
                height={250}
                className="object-contain"
              />
            </div>
          )}

          {/* Text content */}
          <div
            className={`w-full md:max-w-3xl flex flex-col gap-4 ${
              card.id === 1 ? "mt-20 md:mt-5" : ""
            }`}
          >
            <h2 className="text-3xl md:text-3xl font-normal leading-tight">
              {card.title}
            </h2>
            <p className="text-lg md:text-5xl text-[#000000]">
              {card.description}
            </p>
          </div>

          {/* Image for cards 2-5 - default positioning */}
          {card.id !== 1 && (
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src={card.image}
                alt={card.title}
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default FeatureCard;
