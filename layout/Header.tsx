"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, User, ShoppingCart } from "lucide-react";

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <nav className="flex items-center justify-between py-2 sm:py-4 relative transition-all font-beatrice">
        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Menu"
          className="md:hidden"
        >
          <svg width="21" height="15" viewBox="0 0 21 15" fill="none">
            <rect width="21" height="1.5" rx=".75" fill="#426287" />
            <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
            <rect
              x="6"
              y="13"
              width="15"
              height="1.5"
              rx=".75"
              fill="#426287"
            />
          </svg>
        </button>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <Image
          src="/logo.svg"
          alt="Picture of the author"
          width={50}
          height={50}
        />

        {/* left  */}
        <div className="flex items-center md:gap-8 gap-2">
          <Button
            size="icon"
            className="rounded-full p-6 hidden md:inline-flex"
          >
            <Heart />
          </Button>

          {/* cart btn  */}
          <div>
            <Button
              size="sm"
              className="rounded-full p-6 -mr-1  hidden md:inline-flex"
            >
              Cart
            </Button>
            <Button
              size="icon"
              className="rounded-full p-4.5 bg-white hover:bg-white border-5 border-primary hover:border-primary text-primary"
            >
              <ShoppingCart />
            </Button>
          </div>
          <Button size="icon" className="rounded-full p-6">
            <User />
          </Button>
        </div>
        {/* Mobile Menu */}
        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute top-15 left-0 w-full bg-white shadow-md py-4 flex-col gap-2 px-5 text-sm sm:hidden`}
        >
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
