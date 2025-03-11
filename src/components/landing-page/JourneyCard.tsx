"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface JourneyCardProps {
  title: string;
  items: string[];
  itemStyle?: "red" | "gold";
}

const JourneyCard: React.FC<JourneyCardProps> = ({
  title,
  items,
  itemStyle = "red",
}) => {
  return (
    <div className="bg-white rounded-[32px] p-6 relative drop-shadow-md">
      {/* Banner using SVG image */}
      <div className="absolute -top-4 left-0 right-0 flex justify-center">
        <div className="relative w-3/4">
          <div className="relative">
            {/* SVG Banner Image */}
            <div className="relative h-10">
              <Image
                src={`/banners/${
                  itemStyle === "red" ? "red" : "gold"
                }-banner.svg`}
                alt={`${title} banner`}
                layout="fill"
                objectFit="cover"
                priority
              />

              {/* Title overlay on top of SVG */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-base tracking-wide uppercase">
                  {title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card content */}
      <div className="mt-12 space-y-6">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <span
              className={cn(
                "mt-1 flex-shrink-0",
                itemStyle === "red" ? "text-[#D1433A]" : "text-amber-400"
              )}
            >
              {itemStyle === "red" ? "▶" : "✧"}
            </span>
            <p
              className="text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JourneyCard;
