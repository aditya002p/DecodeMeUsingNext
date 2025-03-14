"use client";
import React from "react";
import Image from "next/image";
import Button from "./Button";
import aboutAuthor from "../../../public/About.svg";
import ArrowDown from "../../../public/Arrow2.png";
import { useModal } from "@/app/context/ModalContext";

// Define types for the card items and props
type JourneyCardItem = string;

interface JourneyCardProps {
  items: JourneyCardItem[];
  itemStyle?: "red" | "gold";
  bannerSvg: React.ReactNode;
}

// Reusable Card Component with custom SVG banners
const JourneyCard: React.FC<JourneyCardProps> = ({ 
  items, 
  itemStyle = "red", 
  bannerSvg 
}) => {
  return (
    <div className="bg-white rounded-[32px] p-6 relative">
      {/* Custom SVG banner that will be different for each card */}
      <div className="absolute -top-5 left-0 right-0 w-full overflow-hidden">
        <div className="relative h-12">{bannerSvg}</div>
      </div>

      <div className="mt-8 space-y-4">
        {items.map((item: string, index: number) => (
          <div key={index} className="flex items-start">
            <span
              className={`${
                itemStyle === "red" ? "text-red-500" : "text-amber-400"
              } mr-2 mt-1 transform rotate-270`}
              style={{ display: "inline-block", transform: "rotate(-90deg)" }}
            >
              {itemStyle === "red" ? "🔻" : "✨"}
            </span>
            <p
              className="text-gray-800"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Define type for the card data
interface CardData {
  title: string;
  items: string[];
  itemStyle: "red" | "gold";
  bannerSvg: React.ReactNode;
}

const About: React.FC = () => {
  // SVG banners for each card
  const careerCrisisBanner = (
    <svg
      width="100%"
      height="31"
      viewBox="0 0 281 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-3 left-0 right-5"
    >
      <path
        d="M29.3353 0.300299C29.3353 0.300299 24.8335 0.00695103 21.9769 0.300299C12.852 1.23736 0.953125 10.1699 0.953125 10.1699L29.3353 10.1699V0.300299Z"
        fill="#AE2D25"
      />
      <path
        d="M252.337 0.300299C252.337 0.300299 256.838 0.00695105 259.695 0.300299C268.82 1.23736 280.719 10.1699 280.719 10.1699L252.337 10.1699V0.300299Z"
        fill="#AE2D25"
      />
      <path
        d="M18.5234 0.169922H261.799L241.192 27.7604C240.059 29.2768 238.277 30.1699 236.385 30.1699H48.3903C46.6974 30.1699 45.0833 29.4547 43.9459 28.2007L18.5234 0.169922Z"
        fill="#D1433A"
      />
      <text
        x="140"
        y="20"
        textAnchor="middle"
        fill="white"
        fontWeight="bold"
        fontSize="12"
        fontFamily="Arial"
      >
        CAREER CRISIS
      </text>
    </svg>
  );

  const breakthroughBanner = (
    <svg
      width="100%"
      height="31"
      viewBox="0 0 281 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-3 left-0 right-5"
    >
      <path
        d="M29.3353 0.300299C29.3353 0.300299 24.8335 0.00695103 21.9769 0.300299C12.852 1.23736 0.953125 10.1699 0.953125 10.1699L29.3353 10.1699V0.300299Z"
        fill="#AE2D25"
      />
      <path
        d="M252.337 0.300299C252.337 0.300299 256.838 0.00695105 259.695 0.300299C268.82 1.23736 280.719 10.1699 280.719 10.1699L252.337 10.1699V0.300299Z"
        fill="#AE2D25"
      />
      <path
        d="M18.5234 0.169922H261.799L241.192 27.7604C240.059 29.2768 238.277 30.1699 236.385 30.1699H48.3903C46.6974 30.1699 45.0833 29.4547 43.9459 28.2007L18.5234 0.169922Z"
        fill="#D1433A"
      />
      <text
        x="140"
        y="20"
        textAnchor="middle"
        fill="white"
        fontWeight="bold"
        fontSize="12"
        fontFamily="Arial"
      >
        BREAKTHROUGH
      </text>
    </svg>
  );

  const solutionBanner = (
    <svg
      width="100%"
      height="31"
      viewBox="0 0 281 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-3 left-0 right-5"
    >
      <path
        d="M29.3353 0.300299C29.3353 0.300299 24.8335 0.00695103 21.9769 0.300299C12.852 1.23736 0.953125 10.1699 0.953125 10.1699L29.3353 10.1699V0.300299Z"
        fill="#AE2D25"
      />
      <path
        d="M252.337 0.300299C252.337 0.300299 256.838 0.00695105 259.695 0.300299C268.82 1.23736 280.719 10.1699 280.719 10.1699L252.337 10.1699V0.300299Z"
        fill="#AE2D25"
      />
      <path
        d="M18.5234 0.169922H261.799L241.192 27.7604C240.059 29.2768 238.277 30.1699 236.385 30.1699H48.3903C46.6974 30.1699 45.0833 29.4547 43.9459 28.2007L18.5234 0.169922Z"
        fill="#D1433A"
      />
      <text
        x="140"
        y="20"
        textAnchor="middle"
        fill="white"
        fontWeight="bold"
        fontSize="12"
        fontFamily="Arial"
      >
        SOLUTION - DECODING ME
      </text>
    </svg>
  );

  // Card content data
  const cardsData: CardData[] = [
    {
      title: "CAREER CRISIS",
      items: [
        "Even after the career tests, she <span class='font-semibold'>wasn't confident</span> about her ideal career type",
        "Her <span class='font-semibold'>peers faced the same struggle</span>—existing solutions didn't help",
        "She <span class='font-semibold'>spent years figuring out her career type</span> — wasting time & potential",
      ],
      itemStyle: "red",
      bannerSvg: careerCrisisBanner,
    },
    {
      title: "BREAKTHROUGH",
      items: [
        "Realized that <span class='font-semibold'>career clarity</span> earlier = financial & professional growth.",
        "Recognized a <span class='font-semibold'>national problem</span>—India's youth is lost, in turn affecting the GDP.",
        "Dreamt of a <span class='font-semibold'>solution</span> that empowers school students to explore all careers to find their career type",
      ],
      itemStyle: "red",
      bannerSvg: breakthroughBanner,
    },
    {
      title: "SOLUTION - DECODING ME",
      items: [
        "A platform that helps students <span class='font-semibold'>discover, explore, and validate careers.</span>",
        "<span class='font-semibold'>No more confusion</span>—just clarity, exposure, and informed decisions.",
        "A platform to help students <span class='font-semibold'>explore careers before it's too late</span>",
      ],
      itemStyle: "gold",
      bannerSvg: solutionBanner,
    },
  ];
  const { openEnquiryModal } = useModal();
  return (
    <div className="bg-[#FFFDF7] py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Founder section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 relative flex flex-col md:flex-row items-center gap-8 drop-shadow-lg ">
          <div className="w-full md:w-3/5 space-y-8 z-10">
            <div>
              <p className="text-gray-700 font-medium uppercase text-sm tracking-wide">
                ABOUT FOUNDER
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                KHUSHBU CHOPDA
              </h2>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <span className="text-gray-700">
                  Mechanical engineer with a granted product patent
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <span className="text-gray-700">
                  Pursued MBA from NMIMS, Mumbai
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <span className="text-gray-700">
                  Since childhood, she wanted to create something impactful,
                  remembered by every household
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <span className="text-gray-700">
                  Founded Decoding Me to solve a problem she personally
                  experienced
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <span className="text-gray-700">
                  On a mission to empower youth to choose their career type with
                  confidence and clarity
                </span>
              </li>
            </ul>
          </div>

          {/* Quote SVG positioned absolutely */}
          <div className="absolute top-8 right-1/2 md:right-1/4 text-gray-200 lg:block hidden z-10">
            <svg
              width="98"
              height="81"
              viewBox="0 0 98 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M55.7617 0.09375C72.9713 1.30202 97.7091 4.04736 97.7227 37.7233V80.0938H59.3203V34.7605H72.0717C72.8795 22.6557 62.9035 19.53 52.0551 17.1307L55.7617 0.09375ZM4.31158 0.09375C21.5211 1.30202 46.2589 4.04744 46.2724 37.7233V80.0938H7.86999V34.7605H20.6214C21.4293 22.6557 11.4531 19.53 0.604752 17.1307L4.31158 0.09375Z"
                fill="black"
                fillOpacity="0.1"
              />
            </svg>
          </div>

          {/* Image container - responsive for all screen sizes */}
          <div className="w-full lg:w-2/5 relative">
            <div className="w-full h-[300px] lg:absolute lg:top-[-87px] lg:left-20">
              <Image
                src={aboutAuthor}
                alt="Khushbu Chopda"
                className="rounded-lg md:rounded-r-3xl md:rounded-l-none object-cover"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
        </div>

        {/* Why did she choose section */}
        <div className="relative pt-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why did she choose to start Decoding Me?
          </h2>
          <p className="text-center text-gray-700 mb-12">
            🚀 Imagine if every young graduate explored careers in
            school—India&apos;s economy would be unstoppable!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:h-[360px] drop-shadow-2xl">
            {/* Render cards using the JourneyCard component */}
            {cardsData.map((card, index) => (
              <JourneyCard
                key={index}
                items={card.items}
                itemStyle={card.itemStyle}
                bannerSvg={card.bannerSvg}
              />
            ))}
          </div>

          {/* Explore More Button */}
          <div className="flex justify-center mt-12 relative">
            <Button
              variant="figma"
              size="lg"
              className="font-medium drop-shadow-lg"
              onClick={openEnquiryModal}
            >
              Explore More Careers
              <div className="ml-3 bg-white rounded-lg w-5 h-4 py-[3px] px-[3.19px]">
                <svg
                 width="15"
                 height="9"
                 viewBox="0 0 15 9"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
               > 
                 <path
                   d="M11.4915 4.37827L8.99655 1.87741C8.95639 1.83938 8.90604 1.81384 8.85164 1.80392C8.79723 1.79399 8.74111 1.80011 8.69011 1.82151C8.63912 1.84292 8.59545 1.87869 8.56442 1.92448C8.5334 1.97026 8.51636 2.02408 8.51538 2.07938V4.12878H3.67404C3.55588 4.12878 3.44256 4.17572 3.35901 4.25927C3.27545 4.34282 3.22852 4.45614 3.22852 4.5743C3.22852 4.69246 3.27545 4.80578 3.35901 4.88933C3.44256 4.97289 3.55588 5.01982 3.67404 5.01982H8.51538V7.06923C8.51636 7.12452 8.5334 7.17834 8.56442 7.22413C8.59545 7.26991 8.63912 7.30569 8.69011 7.32709C8.74111 7.3485 8.79723 7.35461 8.85164 7.34469C8.90604 7.33476 8.95639 7.30923 8.99655 7.2712L11.4915 4.77033C11.5185 4.74531 11.54 4.71498 11.5547 4.68125C11.5694 4.64752 11.577 4.61111 11.577 4.5743C11.577 4.5375 11.5694 4.50109 11.5547 4.46735C11.54 4.43362 11.5185 4.4033 11.4915 4.37827Z"
                   fill="#2A2A2A"
                 />
               </svg>
             </div>
           </Button>
         </div>
       </div>
     </div>
     <div
       className="relative w-full pointer-events-none hidden lg:block"
       style={{ top: "-90px", paddingLeft: "52rem" }}
     >
       <div style={{ position: "relative" }}>
         <Image src={ArrowDown} alt="Arrow" width={400} height={400} />
       </div>
     </div>
   </div>
 );
};

export default About;