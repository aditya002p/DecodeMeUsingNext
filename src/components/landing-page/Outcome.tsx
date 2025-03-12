import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.svg";

const FeatureItem = ({ icon, title, description, className }) => (
  <div className={`flex items-center ${className}`}>
    <div className="bg-yellow-300 rounded-full p-4 flex items-center justify-center w-28 h-28 shrink-0 relative" 
         style={{ boxShadow: "14px 2px 4px 0px #FDFFA9" }}>
      <span className="text-6xl">{icon}</span>
    </div>
    <div className="bg-white rounded-3xl py-3 px-5 shadow-sm ml-4 lg:w-full relative " 
         style={{ borderTopLeftRadius: "-100px",borderBottomLeftRadius:"-50%", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 15%, 15% 0)" }}>
      <h3 className="text-base font-semibold mb-1">{title} {" "}
        <span className="font-normal">{description}</span>
      </h3>
    </div>
    </div>
);

const Outcome = () => {
  return (
    <div className="py-20 px-4 bg-[#FFFFF4] relative">
      <div className="max-w-full mx-auto">
        <h2 className="text-[72px] font-bold text-center mb-16 py-4 px-6"
            style={{ 
              background: "linear-gradient(180deg, rgba(51, 51, 51, 0.3) 0%, rgba(51, 51, 51, 0) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
          OUTCOME OF DECODING ME
        </h2>

        <div className="grid grid-cols-0 gap-4 drop-shadow-lg">
          {/* Logo positioned in the left center */}
          <div className="col-span-4 col-start-1 row-span-5 row-start-2 flex items-center justify-center">
            <div className="relative">
              <Image src={logo} alt="Decoding Me Logo" width={350} height={220} />
              <div className="absolute inset-0 blur-md opacity-30 rounded-full" style={{ filter: "blur(15px)" }}></div>
            </div>
          </div>

          {/* Feature 1 - Top horizontal line with logo */}
          <div className="col-span-5 col-start-4 row-start-1">
            <FeatureItem
              icon="🎯"
              title="Your Personal Career Dashboard:"
              description="Track your career exploration journey like a boss."
            />
          </div>

          {/* Feature 2 - Below Feature 1, with spacing from left */}
          <div className="col-span-5 col-start-5 row-start-2 mt-2">
            <FeatureItem
              icon="🔬"
              title="Hands-On Exploration:"
              description="Explore real-world work done in all occupations before committing to any!"
            />
          </div>

          {/* Feature 3 - Below Feature 2 */}
          <div className="col-span-5 col-start-6 row-start-3 mt-2">
            <FeatureItem
              icon="🎧"
              title="Curated Content Library:"
              description="Podcasts, movies, books, TV Shows, YouTube channels- all the inspo you need."
            />
          </div>

          {/* Feature 4 - Same horizontal line as Feature 3 but below */}
          <div className="col-span-5 col-start-8 row-start-4 mt-2">
            <FeatureItem
              icon="🏭"
              title="Industry-Relevant Projects:"
              description="Get real-world experience, not just theory."
            />
          </div>

          {/* Feature 5 - Below Feature 4, shrinking space */}
          <div className="col-span-5 col-start-6 row-start-5 mt-8">
            <FeatureItem
              icon="👔"
              title="Industry Expert Interaction:"
              description="Talk to cool people already working in the occupation of your choice!"
            />
          </div>

          {/* Feature 6 - Below Feature 5, shrinking space */}
          <div className="col-span-5 col-start-5 row-start-6 mt-8">
            <FeatureItem
              icon="💬"
              title="Unlimited DM Sessions:"
              description="Because we're here for you 24/7."
            />
          </div>

          {/* Feature 7 - Below Feature 6, shrinking space */}
          <div className="col-span-5 col-start-4 row-start-7 mt-8">
            <FeatureItem
              icon="🌍"
              title="National Youth Exposure:"
              description="Connect with students across India. Diversity, baby!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outcome;