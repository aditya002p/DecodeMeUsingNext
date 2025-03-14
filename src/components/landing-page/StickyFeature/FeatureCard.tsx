"use client";

import { motion, MotionValue } from "framer-motion";
import Image from "next/image";
import { CardProps, QuoteLeftSVG, QuoteRightSVG } from "./CardsData";

interface FeatureCardProps {
  card: CardProps;
  scale: number | string | MotionValue<number> | MotionValue<string>;
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

  // Get text color based on card id
  const getTextColor = (id: number) => {
    if (id === 3 || id === 6) {
      return "#FFFFFF";
    }
    return "#000000";
  };

  const quoteColor = getQuoteColor(card.id);
  const textColor = getTextColor(card.id);

  return (
    <div className="sticky top-16 lg:top-20 w-full pt-6 sm:pt-8 md:pt-16 ">
      <motion.div style={{ scale }} className="rounded-3xl mx-auto">
        <div
          className="relative flex flex-col md:flex-row items-center sm:p-6 md:p-12 gap-6 md:gap-8 min-h-[500px] md:h-[600px] rounded-t-[32px] sm:rounded-t-[48px] md:rounded-t-[64px] w-full lg:max-w-6xl mx-auto"
          style={{
            backgroundColor: card.cardBackgroundColor,
          }}
        >
          {/* Background Image with lower opacity */}
          <div
            className="absolute inset-0 z-0 opacity-100 rounded-t-[32px] sm:rounded-t-[48px] md:rounded-t-[64px] overflow-hidden"
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
                ? "top-2 sm:top-4 md:top-20 left-2 sm:left-4 md:left-20"
                : "top-2 sm:top-4 md:top-20 right-2 sm:right-4 md:right-20"
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
                alt={card.title || card.description}
                width={215}
                height={215}
                className="object-center"
              />
            </div>
            {/* Text content below image */}
            <div className="w-full flex flex-col gap-2 z-10 px-2 text-center lg:text-start justify-center my-auto">
              <h2 
                className="text-xl font-normal leading-10 mt-2"
                style={{ color: textColor }}
              >
                {card.title}
              </h2>
              {card.hasBoldText ? (
                <p 
                  className="text-base sm:text-lg"
                  style={{ color: textColor }}
                >
                  <span className="font-bold">{card.boldTextPart}</span>
                  <span>{card.regularTextPart}</span>
                </p>
              ) : (
                <p 
                  className="text-base sm:text-lg justify-center items-center my-auto"
                  style={{ color: textColor }}
                >
                  {card.description}
                </p>
              )}
            </div>
          </div>

          {/* Desktop layout: Based on the design in images */}
          <div className="hidden md:flex md:flex-row lg:w-full">
            {isFirstCard ? (
              <>
                {/* Special treatment for first card - keeping original */}
                <div className="absolute -top-24 left-10 z-10">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={250}
                    height={250}
                    className="object-contain"
                  />
                </div>
                <div className="w-[70%] flex flex-col gap-4 z-10 mt-20 order-1 ">
                  <h2 
                    className="text-3xl font-normal leading-[60px]"
                    style={{ color: textColor }}
                  >
                    {card.title}
                  </h2>
                  {card.hasBoldText ? (
                    <p 
                      className="text-5xl"
                      style={{ color: textColor }}
                    >
                      <span className="font-bold">{card.boldTextPart}</span>
                      <span>{card.regularTextPart}</span>
                    </p>
                  ) : (
                    <p 
                      className="text-5xl font-medium"
                      style={{ color: textColor }}
                    >
                      {card.description}
                    </p>
                  )}
                </div>
              </>
            ) : (
              <>
                {/* For cards with quote on the left: Text on right, image on left below quote */}
                {card.quotePosition === "topLeft" ? (
                  <>
                    <div className="w-1/2 flex justify-start items-center z-10 pl-12 pt-16">
                      <Image
                        src={card.image}
                        alt={card.description}
                        width={300}
                        height={300}
                        className="object-contain mt-28"
                      />
                    </div>
                    <div className="w-fit flex flex-col justify-center z-10 ">
                      <p 
                        className="text-4xl font-medium text-end"
                        style={{ color: textColor }}
                      >
                        {card.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* For cards with quote on the right: Text on left, image on right below quote */}
                    <div className="w-1/2 flex flex-col justify-center z-10 pl-12">
                      <p 
                        className="text-4xl font-medium text-start"
                        style={{ color: textColor }}
                      >
                        {card.description}
                      </p>
                    </div>
                    <div className="w-1/2 flex justify-end items-center z-10 pr-12 pt-16">
                      <Image
                        src={card.image}
                        alt={card.description}
                        width={300}
                        height={300}
                        className="object-contain mt-28"
                      />
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeatureCard;