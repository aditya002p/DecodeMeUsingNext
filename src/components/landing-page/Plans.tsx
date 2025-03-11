import React from "react";
import Image from "next/image";
import { cn } from "@/utils/utils";
import vision from "../../../public/vision-eye.svg";
import mission from "../../../public/mission-target.svg";
import Arrow1 from "../../../public/Arrow.png";
const PlanCard = ({ title, description, icon, alt }) => (
  <div className="relative w-full mx-auto max-w-xl">
    {/* White base card */}
    <div className="bg-white rounded-3xl overflow-hidden drop-shadow-lg border border-gray-100 pt-32 pb-8 px-8 w-full mx-auto h-full md:w-[580px] md:h-[480px]">
      {/* Content section */}
      <div className="text-center mt-16 md:mt-32 md:w-[470px] mx-auto">
        <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-5 uppercase">
          {title}
        </h3>
        <p className="text-gray-700 text-lg md:text-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </div>

    {/* Yellow card positioned on top with overflow */}
    <div className="absolute -top-10 md:left-[55%] left-1/2 transform -translate-x-1/2 w-full mx-auto">
      <div
        className="bg-yellow-300 rounded-3xl w-full md:w-[530px] h-64 md:h-[355px]"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% 100%, 100% 90%, 50% 50%, -10% 100%, 0 100%)",
        }}
      ></div>
      {/* Icon positioned in center of yellow area */}
      <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/4">
        <Image
          src={icon}
          alt={alt}
          width={180}
          height={180}
          className="w-32 h-32 md:w-64 md:h-64"
        />
      </div>
    </div>
  </div>
);

const Plans = ({ className }) => {
  const plans = [
    {
      title: "Vision",
      description:
        "To become the foremost choice and trusted guide for students and parents for hands-on career exploration, fostering informed decisions and confident futures",
      icon: vision,
      alt: "Vision icon showing an eye",
    },
    {
      title: "Mission",
      description:
        "To empower school students to explore diverse careers and make informed choices, ensuring confidence and happiness when they seek their first job.",
      icon: mission,
      alt: "Mission icon showing a target with arrow",
    },
  ];

  return (
    <section className={cn("py-12 md:py-24 relative", className)}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
      </div>
      <div
        className="relative w-full pointer-events-none hidden lg:block"
        style={{ top: "0px", paddingLeft: "6rem" }}
      >
        <div style={{ position: "absolute" }}>
          <Image src={Arrow1} alt="Arrow" width={293} height={300} />
        </div>
      </div>
    </section>
  );
};

export default Plans;
