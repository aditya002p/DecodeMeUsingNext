"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, useSpring } from "framer-motion";
import FeatureCard from "./FeatureCard";
import { cardsData } from "./CardsData";

export default function StickyFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Get scroll progress
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

    // Update scroll height on mount and resize
    updateScrollHeight();
    window.addEventListener("resize", updateScrollHeight);

    return () => window.removeEventListener("resize", updateScrollHeight);
  }, []);

  // Convert scroll position to progress (0-1)
  const progress = useTransform(scrollY, [0, scrollHeight], [0, 1]);

  // Calculate scales for each card - creating a stacked effect
  const scales = cardsData.map((_, index) => {
    const cardCount = cardsData.length;
    const scaleFactor = 0.05; // How much each card scales down
    const targetScale = 1 - (cardCount - index) * scaleFactor;

    // Each card will scale down in its own segment of the scroll
    const segmentSize = 1 / cardCount;
    const startProgress = index * segmentSize;
    const endProgress = 1;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useSpring(
      useTransform(progress, [startProgress, endProgress], [1, targetScale]),
      {
        damping: 25,
        stiffness: 300,
      }
    );
  });

  // Determine which card is active based on scroll progress
  useEffect(() => {
    const handleProgressChange = () => {
      const currentProgress = progress.get();
      const segmentSize = 1 / cardsData.length;

      // Calculate active card based on progress
      const activeIndex = Math.min(
        Math.floor(currentProgress / segmentSize),
        cardsData.length - 1
      );

      setActiveCardIndex(activeIndex);
    };

    const unsubscribe = progress.onChange(handleProgressChange);
    return () => unsubscribe();
  }, [progress]);

  return (
    <div ref={containerRef} className="relative min-h-screen w-full bg-white">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 pt-20 pb-96">
        <div className="space-y-64 md:space-y-96">
          {cardsData.map((card, index) => (
            <FeatureCard
              key={card.id}
              card={card}
              scale={scales[index]}
              isActive={index === activeCardIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
