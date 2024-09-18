"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const TOP_OFFSET = 60;

const Navbar = () => {
  const [showBackground, setShowBackground] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    var prevScrollpos = window.scrollY;

    const handleScroll = () => {
      var currentScrollPos = window.scrollY;

      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }

      if (prevScrollpos > currentScrollPos) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }

      prevScrollpos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = `${
    showNav ? "z-50 top-0" : "-top-52"
  } w-full justify-between py-4 sm:py-6 fixed flex px-4 sm:px-8 md:px-16 lg:px-[3.8rem] transition-all ease-in duration-300 ${
    showBackground ? "jumbotron" : "bg-none"
  }`;

  return (
    <div className={navbarClass}>
      <div className="nav-brand text-2xl sm:text-3xl md:text-4xl font-bold">
        Fikri.dev
      </div>
      <div className="hidden md:flex nav-links flex-row my-auto h-full">
        {["Home", "Skills", "Projects", "Get In Touch"].map((item, index) => (
          <a
            key={index}
            href={
              item === "Home"
                ? "#"
                : `#${item.toLowerCase().replace(/\s+/g, "")}`
            }
            className={`nav-link mx-2 lg:mx-5 font-semibold hover:text-primary hover:cursor-pointer p-2 lg:p-3 ${
              item === "Get In Touch"
                ? "border-2 border-white rounded-full"
                : ""
            }`}
          >
            {item}
          </a>
        ))}
      </div>
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          <Image
            src={isMenuOpen ? "/close.svg" : "/menu.svg"}
            width={24}
            height={24}
            alt={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-opacity-90 py-4">
          {["Home", "Skills", "Projects", "Get In Touch"].map((item, index) => (
            <a
              key={index}
              href={
                item === "Home"
                  ? "#"
                  : `#${item.toLowerCase().replace(/\s+/g, "")}`
              }
              className="block py-2 px-4 text-white hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
