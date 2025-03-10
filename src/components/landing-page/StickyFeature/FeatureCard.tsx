"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CardProps, QuoteLeftSVG, QuoteRightSVG } from "./CardsData";

interface FeatureCardProps {
  card: CardProps;
  scale: any;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ card, scale }) => {
  // Generate quote color based on card background
  const quoteColor = card.cardBackgroundColor;

  return (
    <div className="sticky top-20 w-full pt-10">
      <motion.div style={{ scale }} className="rounded-3xl mx-auto">
        <div
          className="relative flex flex-col md:flex-row items-center p-6 md:p-12 gap-8 md:h-[600px] rounded-t-[64px] w-full md:w-[1300px] mx-auto overflow-hidden"
          style={{
            backgroundColor: card.cardBackgroundColor,
            backgroundImage: `url(${card.backgroundCardImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Quote SVG - alternating positions */}
          <div
            className={`absolute z-10 ${
              card.quotePosition === "topLeft"
                ? "top-6 left-6"
                : "top-6 right-6"
            }`}
          >
            {card.quotePosition === "topLeft" ? (
              <QuoteLeftSVG color={quoteColor} />
            ) : (
              <QuoteRightSVG color={quoteColor} />
            )}
          </div>

          {/* Content layout changes based on card ID and quote position */}
          {card.id === 1 ? (
            // First card with special layout
            <>
              <div className="w-full md:w-1/2 flex flex-col gap-4 z-10 order-2 md:order-1 mt-20 md:mt-0 md:pl-8">
                <h2 className="text-2xl md:text-3xl font-normal leading-tight">
                  {card.title}
                </h2>
                <p className="text-lg md:text-[54px] leading-tight text-[#000000]">
                  <span className="font-bold">{card.boldTextPart}</span>
                  <span>{card.regularTextPart}</span>
                </p>
              </div>
              <div className="absolute -top-16 left-10 md:relative md:order-2 w-full md:w-1/2 flex justify-start">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={215}
                  height={250}
                  className="object-contain"
                  priority
                />
              </div>
            </>
          ) : (
            // All other cards with alternating layouts
            <>
              <div
                className={`w-full md:w-1/2 flex flex-col gap-4 z-10 ${
                  card.quotePosition === "topLeft"
                    ? "order-2 md:order-1 md:pl-32"
                    : "order-2 md:order-1 md:pl-8"
                }`}
              >
                <h2 className="text-2xl md:text-3xl font-normal leading-tight">
                  {card.title}
                </h2>
                <p className="text-lg md:text-[54px] leading-tight text-[#000000]">
                  {card.description}
                </p>
              </div>
              <div
                className={`w-full md:w-1/2 flex justify-center order-1 ${
                  card.quotePosition === "topLeft" ? "md:order-2" : "md:order-2"
                }`}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={250}
                  height={250}
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
