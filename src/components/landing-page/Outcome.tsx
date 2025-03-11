import React from "react";
import Image from "next/image";
import { cn } from "@/utils/utils";
import factory from "../../../public/factory.svg";
import person from "../../../public/person.svg";
import logo from "../../../public/logo.svg";
// Feature item component
const FeatureItem = ({ icon, title, description, className }) => (
  <div className={cn("flex items-center gap-4 mb-6", className)}>
    <div className="bg-yellow-300 rounded-full p-4 flex items-center justify-center w-16 h-16 shrink-0">
      <Image src={icon} alt={title} width={28} height={28} />
    </div>
    <div className="max-w-md">
      <h3 className="text-sm font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const Outcome = () => {
  // Mock data for features (replace with actual data and icons)
  const features = [
    {
      icon: "🎯",
      title: "Your Personal Career Dashboard:",
      description: "Track your career exploration journey like a boss.",
    },
    {
      icon: "🔬",
      title: "Hands-On Exploration:",
      description:
        "Explore real-world work done in all occupations before committing to any!",
    },
    {
      icon: "🎧",
      title: "Curated Content Library:",
      description:
        "Podcasts, movies, books, TV Shows, YouTube channels- all the inspo you need.",
    },
    {
      icon: factory,
      title: "Industry-Relevant Projects:",
      description: "Get real-world experience, not just theory.",
    },
    {
      icon: person,
      title: "Industry Expert Interaction:",
      description:
        "Talk to cool people already working in the occupation of your choice!",
    },
    {
      icon: "💬",
      title: "Unlimited DM Sessions:",
      description: "Because we're here for you 24/7.",
    },
    {
      icon: "🌍",
      title: "National Youth Exposure:",
      description: "Connect with students across India. Diversity, baby!",
    },
  ];

  return (
    <div className="py-20 px-4 bg-yellow-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-200 text-center mb-16">
          OUTCOME OF DECODING ME
        </h2>

        <div className="flex flex-col md:flex-row">
          {/* Left side - Logo */}
          <div className="flex items-center justify-center md:w-1/3 mb-12 md:mb-0">
            <div className="w-48">
              <Image
                src={logo}
                alt="Decoding Me Logo"
                width={240}
                height={240}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right side - Features */}
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  className={
                    index === features.length - 1 ? "md:col-span-2" : ""
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outcome;
