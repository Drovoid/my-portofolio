import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div id="footer" className="bg-black mt-10 sm:mt-16 md:mt-20">
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 py-8 sm:py-10 md:py-14 space-y-8 sm:space-y-10 md:space-y-12">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5">
          <Image
            src="handshake.svg"
            width={100}
            height={100}
            alt="Contact Icon"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
          />
          <div className="text-3xl sm:text-4xl md:text-5xl text-contact font-bold text-center sm:text-left sm:my-auto">
            Let&apos;s get in touch
          </div>
        </div>
        <div className="text-xl sm:text-2xl md:text-3xl font-semibold leading-relaxed text-center sm:text-left">
          You know that feeling you get when you conquer a challenging concept
          or master a new skill? That&apos;s what drives me
        </div>
        <div className="text-xl sm:text-2xl md:text-3xl font-semibold leading-relaxed text-center sm:text-left">
          Let&apos;s embark on a journey together, where learning knows no bounds and
          possibilities are endless.
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-12 md:gap-20">
          <Image
            src="memoji.svg"
            width={180}
            height={180}
            alt="Contact Icon"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
          />
          <div className="flex flex-col space-y-4 sm:space-y-6 md:space-y-7">
            <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center sm:text-left">
              Contact me via
            </div>
            <a
              href="mailto:fikriilhamarifin27@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 sm:gap-6 md:gap-8"
            >
              <Image
                src="gmail.svg"
                width={30}
                height={30}
                alt="Gmail Icon"
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
              />
              <div className="text-lg sm:text-xl md:text-2xl">
                fikriilhamarifin27@gmail.com
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/fikri-ilham-arifin-27e/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 sm:gap-6 md:gap-8"
            >
              <Image
                src="in.svg"
                width={30}
                height={30}
                alt="LinkedIn Icon"
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
              />
              <div className="text-lg sm:text-xl md:text-2xl">
                Fikri Ilham Arifin
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
