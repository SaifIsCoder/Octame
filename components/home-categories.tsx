import React from "react";
import Link from "next/link";
import { Search } from "lucide-react";
const HomeCategories: React.FC = () => {
  return (
    <div className="flex flex-col font-beatrice py-8 pb-">
      <Link href="/">MEN</Link>
      <Link href="/">WOMEN</Link>
      <Link href="/">KIDS</Link>
      <div>
        <div className="relative max-w-sm">
          <input
            type="text"
            id="Search"
            className="p-2 pl-10 pr-22 bg-appGray w-full rounded-[2px] sm:text-sm  "
          />

          <span className="absolute inset-y-0 right-8 grid w-8 place-content-center text-sm tracking-widest">
            Search
          </span>
          <span className="absolute inset-y-0 left-2 grid w-8 place-content-center">
            <Search size={20} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeCategories;
