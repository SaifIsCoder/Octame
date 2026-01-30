import React from "react";
import Link from "next/link";
const OctameCollection = () => {
  return (
    <div className="py-10 md:py-20">
      <h1 className="text-5xl md:text-4xl lg:text-6xl font-extrabold leading-10.5 md:leading-13">
        Octame <br /> Collection <br />
        25-26
      </h1>

      <div className="border-b-appGray">
        {/* categories  */}
        <div>
          <ul className="flex space-x-10">
            <li>
              <Link href="/">All</Link>
            </li>
            <li>
              <Link href="/">Men</Link>
            </li>
            <li>
              <Link href="/">Women</Link>
            </li>
            <li>
              <Link href="/">Kid</Link>
            </li>
          </ul>
        </div>

        {/* filter  */}

        <div></div>
      </div>
    </div>
  );
};

export default OctameCollection;
