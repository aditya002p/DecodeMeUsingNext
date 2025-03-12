import React from "react";
import cartoon from "../../../public/cartoon8.png";
import Image from "next/image";
import dots from "../../../public/Dots.svg";
import Button from "./Button";

const ComparisonTable = () => {
  const comparisonData = [
    {
      factor: "Who's This For?",
      decodingApproach: [
        { text: "Students (8th-12th):", isBold: true },
        { text: " What even is a career? We got you!", isBold: false },
      ],
      otherCounselors: "No structured approach for early career discovery.",
    },
    {
      factor: "Schools:",
      decodingApproach: [
        { text: "Schools:", isBold: true },
        {
          text: " Want to stop producing confused graduates? Let's fix that together!",
          isBold: false,
        },
      ],
      otherCounselors: "",
    },
    {
      factor: "Career Options",
      decodingApproach: [
        { text: "Explore ", isBold: true },
        { text: "ALL", isBold: true },
        { text: " career options & Find your career type", isBold: false },
      ],
      otherCounselors: "Take a test. Get a report. Yawn.",
    },
    {
      factor: "Counseling Approach",
      decodingApproach: [
        { text: "Get ", isBold: true },
        { text: "unlimited", isBold: true },
        { text: " 1-on-1 counseling sessions", isBold: false },
      ],
      otherCounselors: "Talk to a counselor for 15 minutes.",
    },
    {
      factor: "Career Exploration Depth",
      decodingApproach: [
        { text: "Explore real-world work done in ", isBold: true },
        { text: "each occupation", isBold: true },
      ],
      otherCounselors: "Get a list of ...options, as per your report.",
    },
    {
      factor: "Industry Exposure",
      decodingApproach: [
        { text: "Monthly calls with ", isBold: true },
        { text: "industry experts", isBold: true },
        { text: ".", isBold: false },
      ],
      otherCounselors: "Good luck figuring it out on your own.",
    },
    {
      factor: "Practical Learning",
      decodingApproach: [
        { text: "Work on ", isBold: true },
        { text: "no cost, industry relevant projects", isBold: true },
        { text: " which you can mention in your portfolio", isBold: false },
      ],
      otherCounselors: "No projects, just vibes.",
    },
    {
      factor: "Clarity & Direction",
      decodingApproach: [
        { text: "A clear pathway ", isBold: true },
        { text: "to success.", isBold: false },
      ],
      otherCounselors: "A vague sense of direction.",
    },
  ];

  const renderDecodingApproach = (items) => {
    return items.map((item, idx) => (
      <span key={idx} className={item.isBold ? "font-medium" : ""}>
        {item.text}
      </span>
    ));
  };

  return (
    <div
      className="relative lg:mx-auto p-8 lg:p-10 text-white rounded-3xl mx-2"
      style={{
        background: "#442D00",
        backgroundImage:
          "radial-gradient(50% 50% at 50% 50%, #442D00 0%, rgba(68, 45, 0, 0) 100%)",
        backdropFilter: "blur(53.504px)",
        boxShadow:
          "-20.27px 20.27px 20.27px 0px rgba(255, 255, 255, 0.05) inset",
        maxWidth: "1180px",
        position: "relative",
      }}
    >
      {/* Dots background - positioned to cover whole div */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src={dots} 
          alt="" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-30" 
        />
      </div>
      
      {/* Content container */}
      <div className="relative z-10">
        {/* Character image - hidden on small screens */}
        <div className="absolute right-4 top-4 lg:right-8 lg:-top-32 hidden sm:block">
          <Image
            src={cartoon}
            alt="Character with trophy"
            width={180}
            height={180}
          />
        </div>

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">
            Why We're Different (And Better!)
          </h2>
          <p className="text-sm md:text-base opacity-50 font-normal">
            We don't just hand you a list of careers—we help you experience
            them!
          </p>
        </div>

        {/* Comparison Table */}
        <div
          className="rounded-3xl lg:rounded-t-[32px] lg:rounded-b-[32px] overflow-hidden"
          style={{
            border: "1px solid rgba(253, 216, 73, 0.3)",
            boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.15)",
          }}
        >
          {/* Table Headers */}
          <div
            className="grid grid-cols-3 text-center font-semibold"
            style={{
              background:
              "linear-gradient(113.04deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 0%, rgba(253, 216, 73, 0.3) 200%, rgba(253, 216, 73, 0.8) 0%)",
              borderBottom: "1px solid rgba(253, 216, 73, 0.3)",
              opacity:"20px"
            }}
          >
            <div className="py-3 px-4 text-left border-r border-[rgba(253,216,73,0.2)]">
              Factors
            </div>
            <div className="py-3 px-4 border-r border-[rgba(253,216,73,0.2)]">
              Decoding Me
            </div>
            <div className="py-3 px-4">Other Career Counselors</div>
          </div>

          {/* Table Rows */}
          {comparisonData.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 border-b last:border-b-0 border-[rgba(253,216,73,0.2)]"
              style={{
                background:
                  index % 2 === 0
                    ? "rgba(58, 38, 9, 0.8)"
                    : "rgba(48, 32, 8, 0.8)",
              }}
            >
              <div className="p-4 text-sm border-r border-[rgba(253,216,73,0.2)]">
                {item.factor}
              </div>
              <div className="p-4 text-sm border-r border-[rgba(253,216,73,0.2)]">
                {renderDecodingApproach(item.decodingApproach)}
              </div>
              <div className="p-4 text-sm">{item.otherCounselors}</div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10">
          <Button
            variant="figma"
            size="lg"
            className="font-medium drop-shadow-lg"
          >
            Explore Careers Today
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
  );
};

export default ComparisonTable;