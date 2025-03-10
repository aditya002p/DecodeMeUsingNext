import React from "react";
import Image from "next/image";
import { cn } from "@/utils/utils";
import vision from "../../../public/vision-eye.svg";
import mission from "../../../public/mission-target.svg";

const PlanCard = ({ title, description, icon, alt }) => (
  <div className="relative w-full mx-auto">
    {/* White base card */}
    <div
      className="bg-white rounded-3xl overflow-hidden drop-shadow-lg border border-gray-100 pt-32 pb-8 px-8 w-full mx-auto"
      style={{ width: "580px", height: "380px" }}
    >
      {/* Content section */}
      <div className="text-center mt-28">
        <h3 className="text-2xl font-bold mb-5 uppercase">{title}</h3>
        <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
      </div>
    </div>

    {/* Yellow card positioned on top with overflow */}
    <div className="absolute -top-10 left-6 justify-center">
      <div
        className="bg-yellow-300 rounded-3xl"
        style={{
          width: "530px",
          height: "355px",
          clipPath:
            "polygon(0 0, 100% 0, 100% 100%, 100% 90%, 50% 50%, -10% 100%, 0 100%)",
        }}
      >
        {/* Icon positioned in center of yellow area */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <Image src={icon} alt={alt} width={250} height={250} />
        </div>
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
    <section className={cn("py-24 relative", className)}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-24 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
