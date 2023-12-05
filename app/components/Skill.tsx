import React from "react";
import Image from "next/image";

const Skill = () => {
  return (
    <div id="skill" className="px-20 mt-20">
      <div className="heading flex gap-5">
        <Image src="skill.svg" width={100} height={100} alt="Skill Icon" />
        <h1 className="font-bold text-5xl my-auto">
          Tech Stack <span className="text-2xl">i’ve experienced</span>
        </h1>
      </div>
      <div className="flex flex-wrap mx-auto mt-8 gap-10 space-y-5 justify-center w-full my-auto">
        <a href="https://www.w3schools.com/tags/" target="_blank" className="mt-auto hover:scale-110 transform duration-300">
          <Image
            draggable="false"
            className="mt-auto"
            src="html5.svg"
            width={200}
            height={200}
            alt="html5"
          />
        </a>
        <a href="https://react.dev/" target="_blank" className="hover:scale-110 transform duration-300">
          <Image
            draggable="false"
            src="react.svg"
            width={200}
            height={200}
            alt="react"
          />
        </a>
        <a href="https://nextjs.org/" target="_blank" className="hover:scale-110 transform duration-300">
          <Image
            draggable="false"
            src="next.svg"
            width={200}
            height={200}
            alt="next"
          />
        </a>
        <a href="https://ionicframework.com/" target="_blank" className="hover:scale-110 transform duration-300">
          <Image
            draggable="false"
            src="ionic.svg"
            width={200}
            height={200}
            alt="ionic"
          />
        </a>
        <a href="https://vuejs.org/guide/introduction.html" target="_blank" className="hover:scale-110 transform duration-300">
          <Image
            draggable="false"
            src="vue.svg"
            width={200}
            height={200}
            alt="vue"
          />
        </a>
        <a href="https://www.w3schools.com/cssref/index.php" target="_blank" className="hover:scale-110 transform duration-300">
          <Image
            draggable="false"
            src="css.svg"
            width={200}
            height={200}
            alt="css"
          />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" className="hover:scale-110 transform duration-300">
          <Image
            draggable="false"
            src="tailwind.svg"
            width={200}
            height={200}
            alt="tailwind"
          />
        </a>
        <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target="_blank" className="hover:scale-110 transform duration-300">
          <Image
            draggable="false"
            src="bootstrap.svg"
            width={200}
            height={200}
            alt="bootstrap"
          />
        </a>
        <a href="https://www.prisma.io/" target="_blank" className="hover:scale-110 transform duration-300">
          <Image
            draggable="false"
            src="prisma.svg"
            width={200}
            height={200}
            alt="prisma"
          />
        </a>
        <a href="https://vercel.com/" target="_blank" className="hover:scale-110 transform duration-300">
          <Image
            draggable="false"
            src="vercel.svg"
            width={200}
            height={200}
            alt="vercel"
          />
        </a>
        <a href="https://git-scm.com/" target="_blank" className="hover:scale-110 transform duration-300">
          <Image
            draggable="false"
            src="git.svg"
            width={200}
            height={200}
            alt="git"
          />
        </a>
        <a href="https://github.com/" target="_blank" className="hover:scale-110 transform duration-300">
          <Image
            draggable="false"
            src="github (1).svg"
            width={200}
            height={200}
            alt="github"
          />
        </a>
      </div>
    </div>
  );
};

export default Skill;
