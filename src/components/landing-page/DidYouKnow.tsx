"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/utils/utils";
import Button from "./Button";
import notes from "../../../public/notes.png";
import did from "../../../public/DidYouKnow.png";
import ArrowDown from "../../../public/ArrowDown.png";
import { useModal } from "@/app/context/ModalContext";
interface DidYouKnowProps {
  title?: string;
  content?: string;
  buttonText?: string;
  buttonUrl?: string;
  className?: string;
  backgroundImage?: string;
}
const DidYouKnow: React.FC<DidYouKnowProps> = ({
  title = "Did You Know?",
  content = 'Career confusion is real! Studies show that most school students choose their careers without much deep thought. "So what?" you ask. Well, this leads to 80% of graduates concluding, "I hate my job! I shouldn\'t have pursued this degree."',
  className,
  backgroundImage = did,
}) => {
  const { openEnquiryModal } = useModal();
  return (
    <div className="relative w-full h-min md:max-w-[1200px] m-auto md:mt-40 lg:p-0 p-4">
      {/* Main container with rounded corners */}
      <div
        className={cn("relative w-full rounded-3xl overflow-hidden", className)}
      >
        {/* Background with color overlay */}
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt="Background texture"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#442D00] opacity-90"></div>
        </div>

        {/* Content container with flex layout - padded to stay within rounded corners */}
        <div className="relative z-10 text-white p-8 md:p-12 flex flex-col md:flex-row items-center md:w-full md:h-[400px] text-start">
          <div className="md:w-1/2 md:p-12 w-full">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              {title}
            </h2>
            <p className="text-sm md:text-base mb-8 opacity-60 text-white leading-relaxed">
              {content}
            </p>
              <Button
                variant="figma"
                size="lg"
                className="font-medium drop-shadow-lg"
                onClick={openEnquiryModal}
              >
                Check Data Source
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
          <div className="md:w-1/2 flex justify-center md:justify-end"></div>
        </div>

        {/* Notes image for mobile - inside the container and centered */}
        <div className="relative z-10 flex justify-center py-6 md:hidden">
          <div className="">
            <Image
              src={notes}
              alt="Note paper"
              width={425}
              height={432}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Notes image for desktop - positioned absolutely */}
      <div className="absolute right-4 md:right-12 top-80 md:top-[-100px] z-20 w-64 md:w-[425px] md:h-[425px] lg:w-[425px] hidden md:block">
        <Image
          src={notes}
          alt="Note paper"
          width={425}
          height={425}
          className="object-contain"
        />
      </div>
      <div
        className="relative w-full pointer-events-none hidden lg:block"
        style={{ top: "10px", paddingLeft: "48rem" }}
      >
        <div style={{ position: "relative" }}>
          <Image src={ArrowDown} alt="Arrow" width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default DidYouKnow;
