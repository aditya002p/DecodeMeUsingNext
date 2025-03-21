import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.svg";
import factory from "../../../public/factory.svg";
import person from "../../../public/person.svg";

const FeatureItem = ({ icon, title, description, className = "" }) => {
  // Check if icon is a string (emoji) or an image component
  const isImageIcon = typeof icon !== "string";

  return (
    <div className={`flex items-center drop-shadow-lg ${className}`}>
      <div
        className="bg-yellow-300 rounded-full p-4 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 shrink-0 relative z-10"
        style={{ boxShadow: "14px 2px 4px 0px #FDFFA9" }}
      >
        {isImageIcon ? (
          <div className="relative w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16">
            {icon}
          </div>
        ) : (
          <span className="text-3xl md:text-4xl lg:text-6xl">{icon}</span>
        )}
      </div>
      <div className="bg-white rounded-r-[90px] py-2 md:py-3 px-3 md:px-5 shadow-sm ml-[-20px] w-full relative pl-8 md:pl-12">
        <h3 className="text-sm md:text-base font-semibold mb-1">
          {title} <span className="font-normal">{description}</span>
        </h3>
      </div>
    </div>
  );
};

const Outcome = () => {
  return (
    <div className="py-10 md:py-20 bg-[#FFFFF4] relative">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <h2
          className="text-3xl md:text-5xl lg:text-[72px] font-bold text-center mb-8 md:mb-16 py-2 md:py-4 px-2 md:px-6"
          style={{
            background:
              "linear-gradient(180deg, rgba(51, 51, 51, 0.3) 0%, rgba(51, 51, 51, 0) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          OUTCOME OF DECODING ME
        </h2>

        <div className="flex justify-center mb-8 md:hidden">
          <div className="relative">
            <Image src={logo} alt="Decoding Me Logo" width={200} height={120} />
            <div
              className="absolute inset-0 blur-md opacity-30 rounded-full"
              style={{ filter: "blur(15px)" }}
            ></div>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-12 gap-4 drop-shadow-lg">
          <div className="col-span-4 col-start-1 row-span-5 row-start-2 flex items-center justify-center">
            <div className="relative">
              <Image src={logo} alt="Decoding Me Logo" width={350} height={220} />
              <div
                className="absolute inset-0 blur-md opacity-30 rounded-full"
                style={{ filter: "blur(15px)" }}
              ></div>
            </div>
          </div>

          <div className="col-span-5 col-start-4 row-start-1">
            <FeatureItem
              icon="🎯"
              title="Your Personal Career Dashboard:"
              description="Track your career exploration journey like a boss."
              className=""
            />
          </div>

          <div className="col-span-5 col-start-5 row-start-2 mt-2">
            <FeatureItem
              icon="🔬"
              title="Hands-On Exploration:"
              description="Explore real-world work done in all occupations before committing to any!"
              className=""
            />
          </div>

          <div className="col-span-5 col-start-6 row-start-3 mt-2">
            <FeatureItem
              icon="🎧"
              title="Curated Content Library:"
              description="Podcasts, movies, books, TV Shows, YouTube channels- all the inspo you need."
              className=""
            />
          </div>

          <div className="col-span-4 col-start-8 row-start-4 mt-2">
            <FeatureItem
              icon={<Image src={factory} alt="Factory Icon" width={100} height={100} />}
              title="Industry-Relevant Projects:"
              description="Get real-world experience, not just theory."
              className=""
            />
          </div>

          <div className="col-span-5 col-start-6 row-start-5 mt-8">
            <FeatureItem
              icon={<Image src={person} alt="person Icon" width={100} height={100} />}
              title="Industry Expert Interaction:"
              description="Talk to cool people already working in the occupation of your choice!"
              className=""
            />
          </div>

          <div className="col-span-5 col-start-5 row-start-6 mt-8">
            <FeatureItem
              icon="💬"
              title="Unlimited DM Sessions:"
              description="Because we're here for you 24/7."
              className=""
            />
          </div>

          <div className="col-span-5 col-start-4 row-start-7 mt-8">
            <FeatureItem
              icon="🌍"
              title="National Youth Exposure:"
              description="Connect with students across India. Diversity, baby!"
              className=""
            />
          </div>
        </div>

        <div className="flex flex-col space-y-4 md:hidden">
          <FeatureItem
            icon="🎯"
            title="Your Personal Career Dashboard:"
            description="Track your career exploration journey like a boss."
            className=""
          />
          <FeatureItem
            icon="🔬"
            title="Hands-On Exploration:"
            description="Explore real-world work done in all occupations before committing to any!"
            className=""
          />
          <FeatureItem
            icon="🎧"
            title="Curated Content Library:"
            description="Podcasts, movies, books, TV Shows, YouTube channels- all the inspo you need."
            className=""
          />
          <FeatureItem
            icon={<Image src={factory} alt="Factory Icon" width={60} height={60} />}
            title="Industry-Relevant Projects:"
            description="Get real-world experience, not just theory."
            className=""
          />
          <FeatureItem
            icon={<Image src={person} alt="person Icon" width={60} height={60} />}
            title="Industry Expert Interaction:"
            description="Talk to cool people already working in the occupation of your choice!"
            className=""
          />
          <FeatureItem
            icon="💬"
            title="Unlimited DM Sessions:"
            description="Because we're here for you 24/7."
            className=""
          />
          <FeatureItem
            icon="🌍"
            title="National Youth Exposure:"
            description="Connect with students across India. Diversity, baby!"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Outcome;
