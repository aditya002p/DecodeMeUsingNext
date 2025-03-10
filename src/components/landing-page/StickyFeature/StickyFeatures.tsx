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

  // Calculate scales for each card with a more pronounced stacking effect
  const scales = cardsData.map((_, index) => {
    const targetScale = 1 - (cardsData.length - index) * 0.05;
    const range: [number, number] = [
      index * (1 / cardsData.length),
      (index + 1) * (1 / cardsData.length),
    ];

    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useSpring(useTransform(progress, range, [1, targetScale]), {
      damping: 20,
      stiffness: 300,
    });
  });

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full bg-gray-100"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-20 pb-40">
        <div className="space-y-40 md:space-y-64">
          {cardsData.map((card, index) => (
            <FeatureCard key={card.id} card={card} scale={scales[index]} />
          ))}
        </div>
      </div>
    </div>
  );
}
