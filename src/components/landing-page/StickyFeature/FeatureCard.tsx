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
    <div className="sticky top-0 sm:top-4 md:top-20 w-full pt-6 sm:pt-8 md:pt-10">
      <motion.div style={{ scale }} className="rounded-3xl mx-auto">
        <div
          className="relative flex flex-col md:flex-row items-center p-4 sm:p-6 md:p-12 gap-4 sm:gap-6 md:gap-8 min-h-[400px] sm:min-h-[500px] md:h-[600px] rounded-t-[24px] sm:rounded-t-[48px] md:rounded-t-[64px] w-full lg:max-w-6xl mx-auto"
          style={{
            backgroundColor: card.cardBackgroundColor,
          }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 z-0 opacity-100 rounded-t-[24px] sm:rounded-t-[48px] md:rounded-t-[64px] overflow-hidden"
            style={{
              backgroundImage: `url(${card.backgroundCardImage.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Quote SVG - responsive positioning */}
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

          {/* Mobile layout: Everything in column with centered text */}
          <div className="flex flex-col items-center w-full md:hidden">
            {/* Image first */}
            <div className="w-full flex justify-center items-center z-10 mt-8 mb-4">
              <Image
                src={card.image}
                alt={card.title || card.description}
                width={180}
                height={180}
                className="object-contain max-w-[80%] h-auto"
              />
            </div>
            {/* Text content below image - centered */}
            <div className="w-full flex flex-col gap-2 z-10 px-4 text-center justify-center my-auto">
              {card.title && (
                <h2 
                  className="text-xl sm:text-2xl font-normal leading-tight sm:leading-10 mt-2"
                  style={{ color: textColor }}
                >
                  {card.title}
                </h2>
              )}
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
                  className="text-base sm:text-lg mt-2"
                  style={{ color: textColor }}
                >
                  {card.description}
                </p>
              )}
            </div>
          </div>

          {/* Desktop layout: Responsive design for larger screens */}
          <div className="hidden md:flex md:flex-row md:w-full">
            {isFirstCard ? (
              <>
                {/* Special treatment for first card - more responsive */}
                <div className="absolute -top-16 md:-top-20 lg:-top-24 left-6 md:left-8 lg:left-10 z-10">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={250}
                    height={250}
                    className="object-contain w-[200px] md:w-[220px] lg:w-[250px] h-auto"
                  />
                </div>
                <div className="w-full md:w-[70%] flex flex-col gap-2 md:gap-4 z-10 mt-16 md:mt-20 order-1 px-4 md:px-0">
                  <h2 
                    className="text-2xl md:text-3xl font-normal leading-tight md:leading-[60px]"
                    style={{ color: textColor }}
                  >
                    {card.title}
                  </h2>
                  {card.hasBoldText ? (
                    <p 
                      className="text-3xl md:text-4xl lg:text-5xl"
                      style={{ color: textColor }}
                    >
                      <span className="font-bold">{card.boldTextPart}</span>
                      <span>{card.regularTextPart}</span>
                    </p>
                  ) : (
                    <p 
                      className="text-3xl md:text-4xl lg:text-5xl font-medium"
                      style={{ color: textColor }}
                    >
                      {card.description}
                    </p>
                  )}
                </div>
              </>
            ) : (
              <>
                {/* For cards with quote on the left: More responsive layout */}
                {card.quotePosition === "topLeft" ? (
                  <>
                    <div className="w-1/2 flex justify-start items-center z-10 pl-4 md:pl-8 lg:pl-12 pt-16">
                      <Image
                        src={card.image}
                        alt={card.description}
                        width={300}
                        height={300}
                        className="object-contain mt-32 md:mt-40 lg:mt-56 w-[200px] md:w-[250px] lg:w-[300px] h-auto"
                      />
                    </div>
                    <div className="w-1/2 flex flex-col justify-center z-10 pr-4 md:pr-8 lg:pr-12">
                      <p 
                        className="text-3xl lg:text-4xl font-medium text-end"
                        style={{ color: textColor }}
                      >
                        {card.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* For cards with quote on the right: More responsive layout */}
                    <div className="w-1/2 flex flex-col justify-center z-10 pl-4 md:pl-8 lg:pl-12">
                      <p 
                        className="text-3xl lg:text-4xl font-medium text-start"
                        style={{ color: textColor }}
                      >
                        {card.description}
                      </p>
                    </div>
                    <div className="w-1/2 flex justify-end items-center z-10 pr-4 md:pr-8 lg:pr-12 pt-16">
                      <Image
                        src={card.image}
                        alt={card.description}
                        width={300}
                        height={300}
                        className="object-contain mt-32 md:mt-40 lg:mt-48 w-[200px] md:w-[250px] lg:w-[300px] h-auto"
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