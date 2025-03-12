import React from "react";
import { cn } from "@/utils/utils";

const sizeClasses = {
  sm: "px-2 h-10 w-44 text-base py-1",
  md: "px-6 h-11 rounded-3xl",
  semi: "w-full h-9 rounded-[32px] py-2 px-3 gap-20 text-sm",
  start: "py-3 px-4 w-full h-[41px] text-sm gap-2 leading-4",
  lg: "w-[290px] text-base h-14 rounded-[28px] py-2 px-2 gap-20",
};

const variantClasses = {
  fill: "text-black bg-white font-semibold",
  default: "text-white bg-[#0C0E1E]",
  secondary: "text-[#0C0E1E] border-[#EAEAEA] border rounded-3xl",
  tertiary: "bg-[#3C50E0] text-white rounded-3xl",
  figma: "text-black font-normal font-[Poppins] bg-gradient-to-b from-[#FFED80] to-[#D0B721] shadow-figma",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "fill",
  size = "md",
  className,
  ...props
}) => {
  const isFigma = variant === "figma";
  
  return (
    <button
      className={cn(
        "flex items-center justify-center rounded-full w-full text-sm transition-all",
        variantClasses[variant],
        sizeClasses[size],
        isFigma && "overflow-hidden",
        className
      )}
      {...props}
    >
      {isFigma ? (
        <div className="flex w-full h-full items-center justify-center bg-[radial-gradient(50%_50%_at_50%_50%,#FFF4B3_0%,#FFE235_100%)] border border-white/10 rounded-[32px]">
          {children}
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;