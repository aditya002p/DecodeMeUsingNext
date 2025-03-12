import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";
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

const EnquireButton = () => (
  <Link href="/enquire">
    <Button variant="figma" size="sm" className="">
      Enquire Now
      <div className="ml-2 bg-white rounded-lg w-5 h-4 px-[2px] py-[2px]">
        <ArrowRightIcon className="" />
      </div>
    </Button>
  </Link>
);

const DesktopNavigation = () => (
  <div className="hidden lg:flex items-center space-x-8 text-sm font-[300px]">
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
  <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
