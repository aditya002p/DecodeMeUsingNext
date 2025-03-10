"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, useSpring } from "framer-motion";
import FeatureCard from "./FeatureCard";
import { cardsData } from "./CardsData";

export default function StickyFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollHeight, setScrollHeight] = useState(0);

  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const updateScrollHeight = () => {
      if (containerRef.current) {
        setScrollHeight(containerRef.current.scrollHeight);
      }
    };

    updateScrollHeight();
    window.addEventListener("resize", updateScrollHeight);
    return () => window.removeEventListener("resize", updateScrollHeight);
  }, []);

  const progress = useTransform(scrollY, [0, scrollHeight], [0, 1]);

  // Calculate scales for each card with improved stacking effect
  const scales = cardsData.map((_, index) => {
    // Create a more pronounced stacking effect
    const targetScale = 1 - (cardsData.length - index) * 0.04; // Increased from 0.03 to 0.04 for more distinct stacking

    // Adjust range to create smoother transitions between cards
    const start = index * (1 / (cardsData.length + 0.5));
    const end = start + 1 / (cardsData.length + 0.5);
    const range: [number, number] = [start, end];

    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useSpring(useTransform(progress, range, [1, targetScale]), {
      damping: 25,
      stiffness: 250,
    });
  });

  return (
    <div ref={containerRef} className="relative min-h-screen w-full bg-white">
      <div className="max-w-[1320px] mx-auto px-4 pt-10 sm:pt-16 md:pt-20 pb-20 sm:pb-32 md:pb-40">
        <div className="space-y-32 sm:space-y-48 md:space-y-64 lg:space-y-96">
          {cardsData.map((card, index) => (
            <FeatureCard key={card.id} card={card} scale={scales[index]} />
          ))}
        </div>
      </div>
    </div>
  );
}
