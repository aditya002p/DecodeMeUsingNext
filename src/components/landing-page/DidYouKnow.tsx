import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/utils/utils";
import Button from "./Button";
import notes from "../../../public/notes.png";
import did from "../../../public/DidYouKnow.png";
import ArrowDown from "../../../public/ArrowDown.png";

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
  buttonText = "Check Data Source",
  buttonUrl = "#",
  className,
  backgroundImage = did,
}) => {
  return (
    <div className="relative w-full h-min md:max-w-[1200px] m-auto md:mt-40 lg:p-0 p-2">
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
        <div className="relative z-10 text-white p-8 md:p-12 flex flex-col md:flex-row items-center md:w-full md:h-[400px]">
          <div className="md:w-1/2 md:p-12 w-full">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              {title}
            </h2>
            <p className="text-sm md:text-base mb-8 opacity-60 text-white leading-relaxed">
              {content}
            </p>
            <a href={buttonUrl}>
              <Button
                variant="fill"
                size="lg"
                className="w-full md:w-72 relative bg-enquire-gradient text-black font-medium rounded-full shadow-lg border border-[#FFFFFF1A] before:absolute before:inset-[-2px] before:rounded-full before:border before:border-[#FFFFFF33] before:-z-10"
              >
                {buttonText}
                <div className="ml-2 bg-white rounded-lg w-5 h-4 px-[2px] py-[2px]">
                  <ArrowRightIcon className="" />
                </div>
              </Button>
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end"></div>
        </div>

        {/* Notes image for mobile - inside the container and centered */}
        <div className="relative z-10 flex justify-center py-6 md:hidden">
          <div className="w-64">
            <Image
              src={notes}
              alt="Note paper"
              width={425}
              height={425}
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
        className="relative w-full pointer-events-none hidden md:block"
        style={{ top: "0px", paddingLeft: "48rem" }}
      >
        <div style={{ position: "absolute" }}>
          <Image src={ArrowDown} alt="Arrow" width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default DidYouKnow;
