import React from "react";
import Link from "next/link";
import Image from "next/image";
import notes from "../../../public/notes.png";
const Header = () => {
  return (
    <>
      <div className="lg:w-full lg:mx-0 mx-2 p-2 bg-[#50461B] text-white flex items-start justify-start md:text-sm text-xs lg:text-lg font-semibold ">
        <div className="lg:max-w-7xl flex items-center justify-start gap-2 ">
          <Image src={notes} alt="Notification" width={40} height={40} />
          <span>
            Did You Know? 80% of graduates regret their career choice?
          </span>
          <Link
            href="/enquire"
            className="text-[#E2D254] hover:underline flex items-center underline"
          >
            Check Data Source
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
