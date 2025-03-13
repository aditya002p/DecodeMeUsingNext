import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.svg";
// Social media icons
import { FaYoutube, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#fffcf4] py-6 px-4 sm:py-8">
      <div className="max-w-7xl mx-auto">
        {/* Top section with logo and social icons */}
        <div className="flex flex-col items-center mb-4 sm:mb-6 sm:flex-row sm:justify-between">
          {/* Logo - centered on mobile, left on desktop */}
          <div className="flex items-center mb-3 sm:mb-0">
            <div className="mr-2">
              <Image
                src={Logo}
                alt="Decoding Me Logo"
                width={90}
                height={36}
              />
            </div>
            <h2 className="font-bold text-lg uppercase tracking-wide text-gray-900">
              DECODING ME
            </h2>
          </div>

          {/* Social media icons - row on both mobile and desktop */}
          <div className="flex space-x-4">
            <Link
              href="https://youtube.com"
              className="text-red-600"
              aria-label="YouTube"
            >
              <FaYoutube className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
            <Link
              href="https://instagram.com"
              className="text-pink-600"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
            <Link
              href="https://linkedin.com"
              className="text-blue-600"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
            <Link
              href="https://facebook.com"
              className="text-blue-800"
              aria-label="Facebook"
            >
              <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
          </div>
        </div>

        {/* Bottom section with links and copyright */}
        <div className="border-t border-gray-200 pt-3 sm:pt-4">
          <div className="flex flex-col sm:flex-row sm:justify-between">
            {/* Policy links - horizontal row on both mobile and desktop */}
            <div className="flex flex-row flex-wrap justify-center gap-x-3 mb-3 text-xs sm:text-sm sm:gap-x-4 sm:mb-0 sm:justify-start text-gray-600">
              <Link href="/privacy-policy" className="hover:text-gray-900">
                Privacy policy
              </Link>
              <Link href="/terms" className="hover:text-gray-900">
                Terms and conditions
              </Link>
              <Link href="/disclaimer" className="hover:text-gray-900">
                Disclaimer
              </Link>
              <Link href="/refund-policy" className="hover:text-gray-900">
                Refund policy
              </Link>
            </div>

            {/* Copyright and made with */}
            <div className="text-xs sm:text-sm text-gray-600 text-center sm:text-right">
              Copyright©2025 All rights reserved | Made with ❤️ & 💪 by
              <a href="http://www.futurebits.tech" className="font-bold"> Futurebits. </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;