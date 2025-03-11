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
interface FAQItem {
  title: string;
  content: string;
}

const faqData: FAQItem[] = [
  {
    title: "Who shouldn't enroll in this course?",
    content:
      "If you're looking for a final answer to exactly which job profile to pursue 7-10 years from now, this course isn't for you. Instead, we empower you with tools to reach that decision over time. Students in grades 8-11 are ideal candidates for this course.",
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

interface CustomAccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  [key: string]: any;
}

const CustomAccordionTrigger: React.FC<CustomAccordionTriggerProps> = ({
  children,
  className,
  isOpen,
  ...props
}) => {
  return (
    <AccordionTrigger
      className={`group flex w-full items-center justify-between py-5 ${className} [&>svg]:hidden`}
      {...props}
    >
      <div className="flex justify-between w-full items-center">
        {children}
        <div className="text-gray-700">
          {isOpen ? (
            <FiChevronUp className="h-5 w-5" />
          ) : (
            <FiChevronDown className="h-5 w-5" />
          )}
        </div>
      </div>
    </AccordionTrigger>
  );
};

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (value: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [value]: !prev[value],
    }));
  };

  return (
    <div className="bg-[#fffcf4] py-16 md:py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="hidden md:block">
            <Image
              src={cartton}
              alt="Rocket boy illustration"
              width={150}
              height={150}
            />
          </div>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={item.title}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white mb-4"
            >
              <CustomAccordionTrigger
                className="px-6 font-medium text-base md:text-lg"
                isOpen={openItems[item.title]}
                onClick={() => toggleItem(item.title)}
              >
                {item.title}
              </CustomAccordionTrigger>
              <AccordionContent className="text-gray-600 px-6 pb-5 text-sm md:text-base">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 flex justify-center">
          <button className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-full font-medium text-black flex items-center gap-2 shadow-md">
            Find Your Career Choice
            <span className="text-xs">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
