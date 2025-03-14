"use client";

import { motion, MotionValue, CustomValueType } from "framer-motion";
import Image from "next/image";
import { CardProps, QuoteLeftSVG, QuoteRightSVG } from "./CardsData";

interface FeatureCardProps {
  card: CardProps;
  scale: string | number | CustomValueType | MotionValue<number> | MotionValue<string>;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ card, scale }) => {
  const isFirstCard = card.id === 1;

  const getQuoteColor = (id: number): string => {
    const colors: Record<number, string> = {
      1: "#E6CB30",
      2: "#E6E6DC",
      3: "#58441D",
      4: "#E1C834",
      5: "#E6E6DC",
      6: "#563B06",
      7: "#E1C834",
    };
    return colors[id] || "#E6CB30";
  };

  const getTextColor = (id: number): string => (id === 3 || id === 6 ? "#FFFFFF" : "#000000");

  const quoteColor = getQuoteColor(card.id);
  const textColor = getTextColor(card.id);

  return (
    <div className="sticky top-16 lg:top-20 w-full pt-6 sm:pt-8 md:pt-16">
      <motion.div style={{ scale }} className="rounded-3xl mx-auto">
        <div
          className="relative flex flex-col md:flex-row items-center sm:p-6 md:p-12 gap-6 md:gap-8 min-h-[500px] md:h-[600px] rounded-t-[64px] w-full lg:max-w-6xl mx-auto"
          style={{ backgroundColor: card.cardBackgroundColor }}
        >
          <div
            className="absolute inset-0 z-0 opacity-100 rounded-t-[64px] overflow-hidden"
            style={{ backgroundImage: `url(${card.backgroundCardImage.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
          />

          <div className={`absolute z-20 ${card.quotePosition === "topLeft" ? "top-20 left-20" : "top-20 right-20"}`}>
            {card.quotePosition === "topLeft" ? (
              <QuoteLeftSVG color={quoteColor} />
            ) : (
              <QuoteRightSVG color={quoteColor} />
            )}
          </div>

          <div className="flex flex-col items-center w-full md:hidden">
            <div className="w-full flex justify-center items-center z-10 mt-8 mb-4">
              <Image src={card.image} alt={card.title || card.description} width={215} height={215} style={{ objectFit: "contain" }} />
            </div>
            <div className="w-full flex flex-col gap-2 z-10 px-2 text-center lg:text-start justify-center my-auto">
              <h2 className="text-xl font-normal leading-10 mt-2" style={{ color: textColor }}>
                {card.title}
              </h2>
              <p className="text-base sm:text-lg" style={{ color: textColor }}>
                {card.hasBoldText ? (
                  <>
                    <span className="font-bold">{card.boldTextPart}</span>
                    <span>{card.regularTextPart}</span>
                  </>
                ) : (
                  card.description
                )}
              </p>
            </div>
          </div>

          <div className="hidden md:flex md:flex-row lg:w-full">
            {isFirstCard ? (
              <>
                <div className="absolute -top-24 left-10 z-10">
                  <Image src={card.image} alt={card.title} width={250} height={250} style={{ objectFit: "contain" }} />
                </div>
                <div className="w-[70%] flex flex-col gap-4 z-10 mt-20 order-1">
                  <h2 className="text-3xl font-normal leading-[60px]" style={{ color: textColor }}>
                    {card.title}
                  </h2>
                  <p className="text-5xl font-medium" style={{ color: textColor }}>
                    {card.hasBoldText ? (
                      <>
                        <span className="font-bold">{card.boldTextPart}</span>
                        <span>{card.regularTextPart}</span>
                      </>
                    ) : (
                      card.description
                    )}
                  </p>
                </div>
              </>
            ) : (
              <>
                {card.quotePosition === "topLeft" ? (
                  <>
                    <div className="w-1/2 flex justify-start items-center z-10 pl-12 pt-16">
                      <Image src={card.image} alt={card.description} width={300} height={300} style={{ objectFit: "contain" }} />
                    </div>
                    <div className="w-fit flex flex-col justify-center z-10">
                      <p className="text-4xl font-medium text-end" style={{ color: textColor }}>
                        {card.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2 flex flex-col justify-center z-10 pl-12">
                      <p className="text-4xl font-medium text-start" style={{ color: textColor }}>
                        {card.description}
                      </p>
                    </div>
                    <div className="w-1/2 flex justify-end items-center z-10 pr-12 pt-16">
                      <Image src={card.image} alt={card.description} width={300} height={300} style={{ objectFit: "contain" }} />
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