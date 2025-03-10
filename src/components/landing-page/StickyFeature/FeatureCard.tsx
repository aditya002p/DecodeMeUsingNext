"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CardProps, QuoteLeftSVG, QuoteRightSVG } from "./CardsData";

interface FeatureCardProps {
  card: CardProps;
  scale: any;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ card, scale }) => {
  // Determine if card is first card for special styling
  const isFirstCard = card.id === 1;

  // Manually assign quote colors based on card id
  const getQuoteColor = (id: number) => {
    switch (id) {
      case 1:
        return "#E6CB30";
      case 2:
        return "#E6E6DC";
      case 3:
        return "#58441D";
      case 4:
        return "#E1C834";
      case 5:
        return "#E6E6DC";
      case 6:
        return "#563B06";
      case 7:
        return "#E1C834";
      default:
        return "#E6CB30";
    }
  };

  const quoteColor = getQuoteColor(card.id);

  return (
    <div className="sticky top-0 sm:top-4 md:top-20 w-full pt-6 sm:pt-8 md:pt-10">
      <motion.div style={{ scale }} className="rounded-3xl mx-auto">
        <div
          className="relative flex flex-col md:flex-row items-center p-4 sm:p-6 md:p-12 gap-4 sm:gap-6 md:gap-8 min-h-[400px] sm:min-h-[500px] md:h-[600px] rounded-t-[32px] sm:rounded-t-[48px] md:rounded-t-[64px] w-full max-w-[1300px] mx-auto"
          style={{
            backgroundColor: card.cardBackgroundColor,
          }}
        >
          {/* Background Image with lower opacity */}
          <div
            className="absolute inset-0 z-0 opacity-20 rounded-t-[32px] sm:rounded-t-[48px] md:rounded-t-[64px] overflow-hidden"
            style={{
              backgroundImage: `url(${card.backgroundCardImage.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Quote SVG - alternating positions with manually assigned colors */}
          <div
            className={`absolute z-20 ${
              card.quotePosition === "topLeft"
                ? "top-2 sm:top-4 md:top-6 left-2 sm:left-4 md:left-6"
                : "top-2 sm:top-4 md:top-6 right-2 sm:right-4 md:right-6"
            }`}
          >
            {card.quotePosition === "topLeft" ? (
              <QuoteLeftSVG color={quoteColor} />
            ) : (
              <QuoteRightSVG color={quoteColor} />
            )}
          </div>

          {/* Mobile layout: Everything in column */}
          <div className="flex flex-col items-center w-full md:hidden">
            {/* Image first */}
            <div className="w-full flex justify-center items-center z-10 mt-8 mb-4">
              <Image
                src={card.image}
                alt={card.title}
                width={180}
                height={180}
                className="object-contain"
              />
            </div>

            {/* Text content below image */}
            <div className="w-full flex flex-col gap-2 z-10 px-2 text-center">
              <h2 className="text-xl font-normal leading-tight mt-2">
                {card.title}
              </h2>
              {card.hasBoldText ? (
                <p className="text-base sm:text-lg text-[#000000]">
                  <span className="font-bold">{card.boldTextPart}</span>
                  <span>{card.regularTextPart}</span>
                </p>
              ) : (
                <p className="text-base sm:text-lg text-[#000000]">
                  {card.description}
                </p>
              )}
            </div>
          </div>

          {/* Desktop layout: Preserve original layout */}
          <div className="hidden md:flex md:flex-row md:w-full">
            {/* Image positioning with special case for first card */}
            {isFirstCard ? (
              <div className="absolute -top-24 left-10 z-10">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={215}
                  height={250}
                  className="object-contain"
                />
              </div>
            ) : (
              <div
                className={`w-1/2 flex justify-center items-center z-10 ${
                  card.quotePosition === "topLeft" ? "order-1" : "order-2"
                }`}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
            )}

            {/* Text content with alternating positioning */}
            <div
              className={`w-1/2 flex flex-col gap-4 z-10 ${
                isFirstCard
                  ? "mt-20 order-1"
                  : card.quotePosition === "topLeft"
                  ? "order-2 pl-8"
                  : "order-1 pl-32"
              }`}
            >
              <h2 className="text-3xl font-normal leading-tight">
                {card.title}
              </h2>
              {card.hasBoldText ? (
                <p className="text-5xl text-[#000000]">
                  <span className="font-bold">{card.boldTextPart}</span>
                  <span>{card.regularTextPart}</span>
                </p>
              ) : (
                <p className="text-5xl text-[#000000]">{card.description}</p>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeatureCard;
