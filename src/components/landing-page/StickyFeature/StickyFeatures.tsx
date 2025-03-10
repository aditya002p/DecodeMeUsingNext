"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll } from "framer-motion";
import FeatureCard from "./FeatureCard";
import { cardsData } from "./CardsData";

export default function StickyFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [visibleCardIndex, setVisibleCardIndex] = useState(0);

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

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerHeight = containerRef.current.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY - containerRef.current.offsetTop;

      // Calculate the section height for each card
      const sectionHeight = containerHeight / cardsData.length;

      // Calculate which card should be visible based on scroll position
      let newVisibleIndex = Math.floor(scrollPosition / sectionHeight);

      // Clamp the index to valid range
      newVisibleIndex = Math.max(
        0,
        Math.min(newVisibleIndex, cardsData.length - 1)
      );

      setVisibleCardIndex(newVisibleIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-white mx-auto">
      <div className="w-full mx-auto px-4 pt-10 sm:pt-16 md:pt-24 pb-20 sm:pb-32 md:pb-40">
        <div className="space-y-32 sm:space-y-48 md:space-y-64 lg:space-y-96">
          {cardsData.map((card, index) => (
            <FeatureCard
              key={card.id}
              card={card}
              isVisible={index === visibleCardIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
