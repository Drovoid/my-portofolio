import React from "react";
import Image from "next/image";
import DotPattern from "./magicui/dot-pattern";
import { cn } from "@/lib/utils";

const Overview = () => {
  return (
    <>
      <div className="relative w-full md:mt-56 mt-24">
        <DotPattern
          className={cn(
            "absolute inset-x-0 top-0 md:h-[calc(100%+300px)] h-[calc(100%+80px)] md:-mt-56 -mt-20",
            "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]"
          )}
        />
        <div className="flex flex-col lg:flex-row px-4 sm:px-8 lg:px-20 mt-10 lg:mt-20 relative w-full mb-8 h-full">
          <div className="lg:-z-5 lg:absolute min-w-full lg:right-4 lg:-top-24 mb-8 lg:mb-0">
            <Image
              className="m-auto"
              src="me.svg"
              width={473}
              height={500}
              alt="Fikri"
            />
          </div>
          <div className="container space-y-6 lg:space-y-10 mb-8 lg:mb-0">
            <h3 className="opacity-50 text-2xl lg:text-4xl">
              Front-End Developer
            </h3>
            <h1 className="font-bold text-4xl lg:text-6xl pb-4 lg:pb-7 relative">
              Fikri Ilham Arifin
            </h1>
            <div className="border-b-4 lg:border-b-8 border-primary w-1/2"></div>
            <h3 className="text-xl lg:text-2xl w-full lg:w-50 font-semibold relative z-10">
              Computer Science Student Who Interest{" "}
              <br className="hidden lg:block" /> In{" "}
              <span className="text-primary">Web Development</span> &
              <span className="text-orange-300"> Cybersecurity</span>
            </h3>
          </div>

          <div className="container space-y-6 lg:space-y-10 flex flex-col justify-center">
            <h3 className="text-primary font-bold text-3xl lg:text-4xl text-center">
              Let&apos;s Connect
            </h3>
            <div className="flex flex-row gap-4 lg:gap-7 mx-auto">
              {["facebook", "instagram", "linkedin", "github"].map((social) => (
                <a
                  key={social}
                  href={`https://www.${social}.com/YourUsername`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transform duration-300"
                >
                  <Image
                    src={`${social}.svg`}
                    width={40}
                    height={40}
                    alt={social}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron relative py-6 lg:py-10 flex flex-wrap justify-center gap-4 lg:gap-20">
        {["upwork", "dribbble", "fiverr"].map((brand) => (
          <Image
            key={brand}
            src={`${brand}.svg`}
            width={200}
            height={60}
            alt={brand}
          />
        ))}
      </div>
    </>
  );
};

export default Overview;
