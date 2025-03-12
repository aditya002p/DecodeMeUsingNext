import React from "react";
import { cn } from "@/utils/utils";

const sizeClasses = {
  sm: "px-6 h-10 w-44 font-medium",
  md: "px-6 h-11",
  semi: "w-full h-9 rounded-[32px] py-2 px-3 gap-20 text-sm",
  start: "py-3 px-4 w-full h-[41px] text-sm gap-2 leading-4",
  lg: "w-auto text-sm h-12 rounded-3xl py-3 px-6 gap-2",
  figma: "w-[290px] h-[58px] py-1 px-5 gap-5 text-base rounded-[28px]",
};

const variantClasses = {
  fill: "text-black bg-white font-semibold",
  default: "text-white bg-[#0C0E1E]",
  secondary: "text-[#0C0E1E] border-[#EAEAEA] border rounded-3xl",
  tertiary: "bg-[#3C50E0] text-white rounded-3xl",
  figma:
    "text-black font-normal font-[Poppins] bg-gradient-to-b from-[#FFED80] to-[#D0B721] shadow-figma",
};

// Custom inner container for the figma design
const FigmaInnerContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-row justify-center items-center px-6 py-2 gap-1.5 w-[272px] h-[48px] bg-[radial-gradient(50%_50%_at_50%_50%,#FFF4B3_0%,#FFE235_100%)] border border-white/10 rounded-[32px]">
    {children}
  </div>
);

// Arrow icon component for the figma design
const ArrowIcon = () => (
  <div className="flex flex-col justify-center items-start p-[3px] w-5 h-3.5 bg-white rounded-[6.5px]">
    <div className="w-[8.35px] h-[5.55px] bg-[#2A2A2A]"></div>
  </div>
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses;
  showArrow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "fill",
  size = "md",
  className,
  showArrow = false,
  ...props
}) => {
  // Special case for figma variant
  if (variant === "figma") {
    return (
      <button
        className={cn(
          "flex items-center justify-center",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        <FigmaInnerContainer>
          <span>{children}</span>
          {showArrow && <ArrowIcon />}
        </FigmaInnerContainer>
      </button>
    );
  }

  // Regular button rendering
  return (
    <button
      className={cn(
        "flex items-center justify-center rounded-full w-fit text-sm",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
