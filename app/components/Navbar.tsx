'use client';

import React, { useEffect, useState } from 'react';

const TOP_OFFSET = 60;

const Navbar = () => {
  const [showBackground, setShowBackground] = useState(false);
  const [showNav, setShowNav] = useState(true);

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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClass = `${showNav ? "z-50 top-0": "-top-52"} w-full justify-between py-6 fixed flex px-[3.8rem] transition-all ease-in duration-300 ${showBackground ? 'jumbotron' : 'bg-none'}`;

  return (
    <div className={navbarClass}>
      <div className="nav-brand text-4xl font-bold mx-5">Fikri.dev</div>
      <div className="nav-links flex flex-row my-auto h-full">
        <a
          href="#"
          className="nav-link mx-5 font-semibold hover:text-primary hover:cursor-pointer p-3"
        >
          Home
        </a>
        <a
          href="#skill"
          className="nav-link mx-5 font-semibold hover:text-primary hover:cursor-pointer p-3"
        >
          Skills
        </a>
        <a
          href="#project"
          className="nav-link mx-5 font-semibold hover:text-primary hover:cursor-pointer p-3"
        >
          Projects
        </a>
        <a
          href="#footer"
          className="nav-link mx-5 font-semibold hover:text-primary hover:cursor-pointer border-2 border-white rounded-full p-3"
        >
          Get In Touch
        </a>
      </div>
    </div>
  );
};

export default Navbar;

      