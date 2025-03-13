import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.svg";
// Social media icons
import { FaYoutube, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#fffcf4] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top section with logo and social icons */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          {/* Logo on the left */}
          <div className="flex items-center mb-4 sm:mb-0">
            <div className="mr-2">
              <Image
                src={Logo}
                alt="Decoding Me Logo"
                width={90}
                height={36}
                className=""
              />
            </div>
            <h2 className="font-bold text-lg uppercase tracking-wide text-gray-900">
              DECODING ME
            </h2>
          </div>

          {/* Social media icons on the right */}
          <div className="flex space-x-4">
            <Link
              href="https://youtube.com"
              className="text-red-600"
              aria-label="YouTube"
            >
              <FaYoutube className="w-6 h-6" />
            </Link>
            <Link
              href="https://instagram.com"
              className="text-pink-600"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </Link>
            <Link
              href="https://linkedin.com"
              className="text-blue-600"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </Link>
            <Link
              href="https://facebook.com"
              className="text-blue-800"
              aria-label="Facebook"
            >
              <FaFacebook className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Bottom section with links and copyright */}
        <div className="border-t border-gray-200 pt-4">
          <div className="flex flex-col sm:flex-row justify-between">
            {/* Policy links */}
            <div className="flex flex-wrap gap-y-2 gap-x-2 sm:gap-x-4 mb-4 sm:mb-0 text-sm text-gray-600 justify-center sm:justify-start">
              <Link href="/privacy-policy" className="hover:text-gray-900">
                Privacy policy
              </Link>
              <span className="hidden sm:inline">|</span>
              <Link href="/terms" className="hover:text-gray-900">
                Terms and conditions
              </Link>
              <span className="hidden sm:inline">|</span>
              <Link href="/disclaimer" className="hover:text-gray-900">
                Disclaimer
              </Link>
              <span className="hidden sm:inline">|</span>
              <Link href="/refund-policy" className="hover:text-gray-900">
                Refund policy
              </Link>
            </div>

            {/* Copyright and made with */}
            <div className="text-sm text-gray-600 text-center sm:text-right mt-2 sm:mt-0">
              Copyright©2025 All rights reserved | Made with ❤️ & ⚡ by
              Futurebits.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;