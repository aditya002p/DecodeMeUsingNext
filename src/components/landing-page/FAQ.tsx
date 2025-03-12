"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Image from "next/image";
import cartton from "../../../public/cartoon3.png";
import Button from "./Button";

interface FAQItem {
  title: string;
  content: string;
}

const faqData: FAQItem[] = [
  {
    title: "Who shouldn't enroll in this course?",
    content:
      "If you're looking for a final answer to exactly which job profile to pursue 7–10 years from now, this course isn't for you. Instead, we empower you with tools to reach that decision over time. Students in grades 8–11 are ideal candidates for this course.",
  },
  {
    title: "How can a student join this course?",
    content:
      "Students can join the course by registering on our website or contacting our admissions team. The enrollment process is simple and straightforward.",
  },
  {
    title: "What if my school hasn't partnered with Decoding Me?",
    content:
      "Even if your school hasn't partnered with us, individual students can still enroll in the course. We offer both school partnership programs and individual enrollment options.",
  },
  {
    title: "Do you need to explore all career options in the course?",
    content:
      "No, you don't need to explore all career options. The course is designed to help you discover paths that align with your interests and strengths, allowing you to focus on areas that resonate with you.",
  },
  {
    title: "What can and can't you expect after completing the course?",
    content:
      "After completing the course, you can expect to have a better understanding of your strengths, interests, and potential career paths. However, the course doesn't guarantee a specific job or career outcome.",
  },
];

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleToggle = (value: string) => {
    setOpenItem(openItem === value ? null : value);
  };

  return (
    <div className="bg-[#fffcf4] py-16 md:py-40 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative flex justify-center mb-16">
          <div className="absolute right-0 -top-36 ">
            <Image
              src={cartton}
              alt="Rocket boy illustration"
              width={210}
              height={210}
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg shadow-sm drop-shadow-md overflow-hidden transition-all duration-300 ${
                openItem === item.title ? "border-t-4 border-t-yellow-400" : ""
              }`}
            >
              <button
                onClick={() => handleToggle(item.title)}
                className="w-full flex justify-between items-center px-6 py-5 focus:outline-none"
              >
                <span className="font-medium text-base md:text-lg text-left">
                  {item.title}
                </span>
                {openItem === item.title ? (
                  <FiChevronUp className="h-5 w-5 text-gray-700" />
                ) : (
                  <FiChevronDown className="h-5 w-5 text-gray-700" />
                )}
              </button>
              
              <div 
                className={`px-6 pb-5 text-gray-600 text-sm md:text-base transition-all duration-300 ${
                  openItem === item.title ? "block" : "hidden"
                }`}
              >
                {item.content}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button variant="figma" size="lg" className="font-medium drop-shadow-lg">
            Find Your Career Choice
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

export default FAQ;