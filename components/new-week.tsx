"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Button } from "./ui/button";

const productImages = [
  {
    id: "nw-1",
    src: "/newweek/1.jpg",
    alt: "Product 1",
    type: "Product type",
    name: "Name",
    price: "$2397",
  },
  {
    id: "nw-2",
    src: "/newweek/2.jpg",
    alt: "Product 2",
    type: "Product type",
    name: "Name",
    price: "$2397",
  },
  {
    id: "nw-3",
    src: "/newweek/3.jpg",
    alt: "Product 3",
    type: "Product type",
    name: "Name",
    price: "$2397",
  },
  {
    id: "nw-4",
    src: "/newweek/4.jpg",
    alt: "Product 4",
    type: "Product type",
    name: "Name",
    price: "$2397",
  },
];

const NewWeek = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const card = scrollRef.current.querySelector<HTMLElement>("[data-card]");
    if (!card) return;

    const cardWidth = card.offsetWidth;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div className="relative">
          <h1 className="text-5xl md:text-6xl font-extrabold uppercase leading-tight">
            New <br /> This week
          </h1>
          <span className="absolute top-12 md:top-16 left-64 md:left-81 font-extrabold text-[#000E8A]">
            (50)
          </span>
        </div>
        <Link href="/" className="font-medium underline pb-3">
          See all
        </Link>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="
          mt-6
          flex gap-4
          overflow-x-hidden
          scrollbar-hide
          snap-x snap-mandatory
          touch-pan-x
        "
      >
        {productImages.map((product, idx) => (
          <article key={product.id} data-card className="shrink-0 snap-start">
            {/* Image */}
            <div className="relative w-[40vw] sm:w-[260px] md:w-[300px] aspect-[9/10]">
              <Image
                src={product.src}
                alt={product.alt}
                fill
                priority={idx === 0}
                className="object-cover"
                sizes="(max-width: 640px) 70vw, 300px"
              />

              <Button
                aria-label="Add to cart"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#DCDCDC70] hover:bg-zinc-400 rounded-none"
              >
                <Plus className="text-black hover:text-white" />
              </Button>
            </div>

            {/* Meta */}
            <div className="mt-2 flex justify-between text-sm">
              <div className="flex flex-col">
                <span className="text-xs text-zinc-500">{product.type}</span>
                <span className="font-medium">{product.name}</span>
              </div>
              <span className="font-semibold">{product.price}</span>
            </div>
          </article>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-6 flex justify-center gap-3">
        <button
          aria-label="Previous"
          onClick={() => scrollByCard("left")}
          className="border border-appGray p-1 hover:bg-zinc-100"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          aria-label="Next"
          onClick={() => scrollByCard("right")}
          className="border border-appGray p-1 hover:bg-zinc-100"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default NewWeek;
