"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiBars3 } from "react-icons/hi2";
import { cn } from "@/utils/utils";
import logo from "../../../public/logo.svg";
import Button from "./Button";
import { useModal } from "../../app/context/ModalContext";

const NavItems = [
  { label: "Why we exist?", url: "#why-we-exist" },
  { label: "Vision & Mission", url: "#vision-mission" },
  { label: "About Founder", url: "#about-founder" },
  { label: "How it Started?", url: "#how-started" },
  { label: "Comparison", url: "#comparison" },
  { label: "Outcome", url: "#outcome" },
  { label: "FAQ", url: "#faq" },
];

const NavLink = ({ href, children, className }) => (
  <Link
    href={href}
    className={cn(
      "text-sm font-medium text-zinc-700 hover:text-black transition-colors",
      className
    )}
  >
    {children}
  </Link>
);

const EnquireButton = () => {
  const { openEnquiryModal } = useModal();
  
  return (
    <Button variant="figma" size="sm" className="font-medium drop-shadow-lg" onClick={openEnquiryModal}>
      Enquire Now
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
  );
};

const DesktopNavigation = () => (
  <div className="hidden md:hidden lg:flex items-center space-x-6 text-sm">
    {NavItems.map((item) => (
      <NavLink key={item.label} href={item.url}>
        {item.label}
      </NavLink>
    ))}
  </div>
);

const MobileNavigation = () => (
  <Sheet>
    <SheetTrigger className="lg:hidden">
      <HiBars3 size={24} />
    </SheetTrigger>
    <SheetContent side="right" className="bg-white w-full sm:w-80">
      <div className="mt-8 flex flex-col space-y-6">
        {NavItems.map((item) => (
          <SheetClose key={item.label} asChild>
            <NavLink href={item.url} className="py-2">
              {item.label}
            </NavLink>
          </SheetClose>
        ))}
        <SheetClose asChild>
          <div className="pt-4">
            <EnquireButton />
          </div>
        </SheetClose>
      </div>
    </SheetContent>
  </Sheet>
);

const Navbar = () => (
  <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 w-full">
    <div className="max-w-7xl mx-auto px-4 lg:px-6">
      <div className="flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Decoding Me Logo"
              width={85}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <DesktopNavigation />

        {/* CTA Button (desktop) */}
        <div className="hidden lg:block">
          <EnquireButton />
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <MobileNavigation />
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;