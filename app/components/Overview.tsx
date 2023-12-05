import React from "react";
import Image from "next/image";

const Overview = () => {
  return (
    <div className="">
      <div className="flex px-20 mt-52 relative w-full mb-8 h-full">
        <div className="-z-5 absolute min-w-full right-4 -top-24">
          <Image
            className="m-auto"
            src="me.svg"
            width={473}
            height={500}
            alt="Fikri"
          />
        </div>

        <div className="container space-y-10">
          <h3 className="opacity-50 text-4xl">Front-End Developer</h3>
          <h1 className="font-bold text-6xl pb-7 relative">
            Fikri Ilham Arifin
          </h1>
          <div className="border-b-8 border-primary w-1/2"></div>
          <h3 className="text-2xl w-50 font-semibold relative z-9999">
            Computer Science Student Who Interest <br /> In{" "}
            <span className="text-primary">Web Development</span> &
            <span className="text-orange-300"> Cybersecurity</span>
          </h3>
        </div>

        <div className="container space-y-10 flex flex-col justify-center">
          <h3 className="text-primary font-bold text-4xl text-center">
            Let’s Connect
          </h3>
          <div className="flex flex-row gap-7 mx-auto ps-8">
            <a
              href="https://www.facebook.com/FIkriil27"
              target="_blank"
              className="hover:scale-110 transform duration-300"
            >
              <Image src="facebook.svg" width={50} height={50} alt="facebook" />
            </a>
            <a
              href="https://www.instagram.com/fikritings/"
              target="_blank"
              className="hover:scale-110 transform duration-300"
            >
              <Image
                src="instagram.svg"
                width={50}
                height={50}
                alt="instagram"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/fikri-ilham-arifin-27e/"
              target="_blank"
              className="hover:scale-110 transform duration-300"
            >
              <Image src="linkedin.svg" width={50} height={50} alt="linkedin" />
            </a>
            <a
              href="https://github.com/UnFik"
              target="_blank"
              className="hover:scale-110 transform duration-300"
            >
              <Image src="github.svg" width={50} height={50} alt="github" />
            </a>
          </div>
        </div>
      </div>
      <div className="jumbotron relative py-10 flex justify-center gap-20">
        <Image src="upwork.svg" width={290} height={86} alt="Upwork" />
        <Image src="dribbble.svg" width={290} height={86} alt="dribbble" />
        <Image src="fiverr.svg" width={290} height={86} alt="fiverr" />
      </div>
    </div>
  );
};

export default Overview;
