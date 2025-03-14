"use client";

import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import FeatureCard from "./FeatureCard";
import { cardsData } from "./CardsData";

export default function StickyFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Define scale transformation outside of the map function
  const scale = useTransform(scrollYProgress, [1, 1], [1, 1]);

  return (
    <div ref={containerRef} className="relative w-full bg-white mx-auto">
      <div className="w-full mx-auto px-4 pt-10 sm:pt-16 md:pt-24 pb-20 sm:pb-32 md:pb-40">
        <div className="space-y-32 sm:space-y-48 md:space-y-64 lg:space-y-96">
          {cardsData.map((card) => (
            <FeatureCard key={card.id} card={card} scale={scale} />
          ))}
        </div>
      </div>
    </div>
  );
}
