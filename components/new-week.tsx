import React from "react";
import Link from "next/link";
const NewWeek = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-9.5 md:leading-12 uppercase">
            New <br />
            This week
          </h1>
          <span className="font-extrabold font-beatrice relative -top-15.5 left-64.75 md:-top-19 md:left-80.75 md:text-[20px] text-[#000E8A]">
            (50)
          </span>
        </div>
        <Link href="/">See all</Link>
      </div>
    </div>
  );
};

export default NewWeek;
