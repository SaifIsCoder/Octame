"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";

import IMG1 from "../public/images/1.jpg";
import IMG2 from "../public/images/2.jpg";
import IMG3 from "../public/images/3.jpg";
import IMG4 from "../public/images/4.jpg";

type Product = {
  image: any;
  type: string;
  name: string;
  price: string;
};

const products: Product[] = [
  { image: IMG1, type: "Summer", name: "Linen Shirt", price: "$45" },
  { image: IMG2, type: "Casual", name: "Cotton Tee", price: "$28" },
  // { image: IMG3, type: "Limited", name: "Denim Jacket", price: "$89" },
  // { image: IMG4, type: "New Drop", name: "Relaxed Pants", price: "$62" },
  // { image: IMG3, type: "Limited", name: "Denim Jacket", price: "$89" },
  // { image: IMG4, type: "New Drop", name: "Relaxed Pants", price: "$62" },
];

const NewCollection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-x-2 md:mt-10 mt-5 py-20">
      {/* LEFT */}
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-5xl md:text-4xl lg:text-6xl font-extrabold leading-9.5 md:leading-12">
            NEW <br /> COLLECTION
          </h1>
          <p className="font-beatrice leading-5 mt-3 md:mt-2 text-sm md:text-base">
            Summer <br /> 2026
          </p>
        </div>

        {/* DESKTOP CONTROLS */}
        <div className="hidden md:flex justify-between items-center space-x-4 md:space-x-8">
          <button className="flex-1 flex justify-between md:px-3 px-2 bg-appGray p-1.5 font-beatrice">
            Go To Shop <MoveRight />
          </button>

          <div className="space-x-3">
            <button className="border border-appGray p-1">
              <ChevronLeft size={24} />
            </button>
            <button className="border border-appGray p-1">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT / CAROUSEL */}
      <div className="flex justify-between gap-x-8 w-full">
        {products.map((product, i) => (
          <div key={i} className="px-1 flex-1 min-w-0">
        <div className="flex flex-col items-start w-full">
          <div className="relative w-full aspect-square max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover border border-appGray rounded"
          priority={i === 0}
            />
          </div>
          <div className="flex justify-between mt-2 text-sm font-beatrice w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <div className="flex flex-col leading-tight">
          <span className="text-xs font-medium text-zinc-500">
            {product.type}
          </span>
          <span className="font-medium">{product.name}</span>
            </div>
            <span className="font-semibold">{product.price}</span>
          </div>
        </div>
          </div>
        ))}

        {/* MOBILE CTA */}
        {/* <button type="button" className="md:hidden flex justify-between px-3 bg-appGray p-1.5 font-beatrice gap-x-4 mt-4">
          Go To Shop <MoveRight />
        </button> */}
      </div>
    </div>
  );
};

export default NewCollection;
