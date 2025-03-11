import React from "react";
import cartoon from "../../../public/cartoon8.png";
import Image from "next/image";
const ComparisonTable = () => {
  const comparisonData = [
    {
      factor: "Who's This For?",
      decodingApproach: {
        title: "Students (8th-12th):",
        description: "What even is a career? We got you!",
      },
      otherCounselors: "No structured approach for early career discovery.",
    },
    {
      factor: "Schools:",
      decodingApproach: {
        title: "Schools:",
        description:
          "Want to stop producing confused graduates? Let's fix that together!",
      },
      otherCounselors: "",
    },
    {
      factor: "Career Options",
      decodingApproach: {
        title: "Explore ALL",
        description: "career options & find your career type",
      },
      otherCounselors: "Take a test. Get a report. Yawn.",
    },
    {
      factor: "Counseling Approach",
      decodingApproach: {
        title: "Get unlimited",
        description: "1-on-1 counseling sessions",
      },
      otherCounselors: "Talk to a counselor for 15 minutes.",
    },
    {
      factor: "Career Exploration Depth",
      decodingApproach: {
        title: "Explore real-world work done in",
        description: "each occupation",
      },
      otherCounselors: "Get a list of ...options, as per your report.",
    },
    {
      factor: "Industry Exposure",
      decodingApproach: {
        title: "Monthly calls with",
        description: "industry experts.",
      },
      otherCounselors: "Good luck figuring it out on your own.",
    },
    {
      factor: "Practical Learning",
      decodingApproach: {
        title: "Work on",
        description:
          "no cost, industry relevant projects which you can mention in your portfolio",
      },
      otherCounselors: "No projects, just vibes.",
    },
    {
      factor: "Clarity & Direction",
      decodingApproach: {
        title: "A clear pathway",
        description: "to success.",
      },
      otherCounselors: "A vague sense of direction.",
    },
  ];

  return (
    <div className="bg-[#442D00] bg-background-table rounded-3xl p-6 md:p-10 text-white relative">
      {/* Character image */}
      <div className="absolute right-4 top-4 md:right-8 md:-top-44 lg:block hidden">
        <Image
          src={cartoon}
          alt="Character with trophy"
          width={330}
          height={330}
          className=""
        />
      </div>

      {/* Heading */}
      <div className="text-center mb-6 md:mb-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">
          Why We're Different (And Better!)
        </h2>
        <p className="text-sm md:text-base opacity-80">
          We don't just hand you a list of careers—we help you experience them!
        </p>
      </div>

      {/* Comparison Table */}
      <div className="bg-[#3A2609] rounded-xl overflow-hidden">
        {/* Table Headers */}
        <div className="grid grid-cols-3 text-center font-medium bg-[#503511]">
          <div className="py-3 px-2 border-r border-[#614318]">Factors</div>
          <div className="py-3 px-2 border-r border-[#614318]">Decoding Me</div>
          <div className="py-3 px-2">Other Career Counselors</div>
        </div>

        {/* Table Rows */}
        {comparisonData.map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-3 border-t border-[#614318] ${
              index % 2 === 0 ? "bg-[#3A2609]" : "bg-[#302008]"
            }`}
          >
            <div className="p-3 text-sm border-r border-[#614318]">
              {item.factor}
            </div>
            <div className="p-3 text-sm border-r border-[#614318]">
              <span className="font-medium">{item.decodingApproach.title}</span>{" "}
              {item.decodingApproach.description}
            </div>
            <div className="p-3 text-sm">{item.otherCounselors}</div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-[#F8DC4C] text-black font-medium py-3 px-6 rounded-full hover:bg-yellow-300 transition-colors flex items-center">
          Explore Careers Today
          <svg
            className="ml-2 w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ComparisonTable;
