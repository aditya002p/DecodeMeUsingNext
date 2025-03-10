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
          className="relative flex flex-col md:flex-row items-center p-8 md:p-12 gap-8 md:h-[500px] rounded-3xl"
          style={{
            backgroundColor: card.backgroundColor,
            backgroundImage: `url('/backgrounds/bg-texture.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Quote SVG - alternating positions */}
          <div
            className={`absolute ${
              card.quotePosition === "topLeft"
                ? "top-6 left-6"
                : "top-6 right-6"
            }`}
          >
            {card.quotePosition === "topLeft" ? (
              <QuoteLeftSVG color={card.backgroundColor} />
            ) : (
              <QuoteRightSVG color={card.backgroundColor} />
            )}
          </div>

          {/* Text content - adjusted for different layouts */}
          <div
            className={`w-full md:w-3/5 flex flex-col gap-4 ${
              card.id === 1
                ? "order-1 md:order-1"
                : card.imagePosition === "topLeft"
                ? "order-2 md:order-2"
                : "order-2 md:order-1"
            } z-10`}
          >
            <h2
              className={`text-2xl md:text-4xl font-bold leading-tight ${
                card.backgroundColor === "#52341D" ? "text-white" : "text-black"
              }`}
            >
              {card.title}
            </h2>
            {card.description && (
              <p
                className={`text-lg md:text-2xl ${
                  card.backgroundColor === "#52341D"
                    ? "text-white"
                    : "text-black"
                }`}
              >
                {card.description}
              </p>
            )}
          </div>

          {/* Image - position based on imagePosition prop */}
          <div
            className={`w-full md:w-2/5 flex ${
              card.imagePosition === "topLeft"
                ? "justify-start order-1 md:order-1"
                : "justify-end order-1 md:order-2"
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
        </div>
      </motion.div>
    </div>
  );
};

export default FeatureCard;
