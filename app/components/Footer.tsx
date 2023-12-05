import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div id="footer" className="bg-black mt-20">
      <div className="px-20 py-14 space-y-12">
        <div className="flex flex-row gap-5">
          <Image
            src="handshake.svg"
            width={100}
            height={100}
            alt="Contact Icon"
          />
          <div className="text-5xl text-contact font-bold my-auto">
            Let’s get in touch
          </div>
        </div>
        <div className="text-3xl font-semibold leading-9">
          You know that feeling you get when you conquer a challenging concept
          or master a new skill? That’s what drives me
        </div>
        <div className="text-3xl font-semibold leading-9">
          Let’s embark on a journey together, where learning knows no bounds and
          possibilities are endless.
        </div>
        <div className="flex flex-row gap-20">
          <Image src="memoji.svg" width={180} height={180} alt="Contact Icon" />
          <div className="flex flex-col space-y-7">
            <div className="text-4xl font-semibold">Contact me via</div>
            <a href="mailto:fikriilhamarifin27@gmail.com" target="_blank" className="flex gap-8">
              <Image
                src="gmail.svg"
                width={30}
                height={30}
                alt="Contact Icon"
              />
              <div className="text-2xl">fikriilhamarifin27@gmail.com</div>
            </a>
            <a href="https://www.linkedin.com/in/fikri-ilham-arifin-27e/" target="_blank" className="flex gap-8">
              <Image
                src="in.svg"
                width={30}
                height={30}
                alt="Contact Icon"
              />
              <div className="text-2xl">Fikri Ilham Arifin</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
