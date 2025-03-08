import React from "react";
import Link from "next/link";
import Image from "next/image";
import notes from "../../../public/notes.png";
const Header = () => {
  return (
    <>
      <div className="w-full py-2 bg-[#50461B] text-white flex items-center justify-center text-lg font-semibold">
        <div className="max-w-7xl mx-auto px-12 w-full flex items-center justify-start gap-2">
          <Image src={notes} alt="Notification" width={40} height={40} />
          <span>
            Did You Know? 80% of graduates regret their career choice?
          </span>
          <Link
            href="#data-source"
            className="text-[#E2D254] hover:underline flex items-center"
          >
            Check Data Source
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
