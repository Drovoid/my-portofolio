import React from "react";
import Image from "next/image";

const skillData = [
  { name: "html5", url: "https://www.w3schools.com/tags/" },
  { name: "react", url: "https://react.dev/" },
  { name: "next", url: "https://nextjs.org/" },
  { name: "ionic", url: "https://ionicframework.com/" },
  { name: "vue", url: "https://vuejs.org/guide/introduction.html" },
  { name: "css", url: "https://www.w3schools.com/cssref/index.php" },
  { name: "tailwind", url: "https://tailwindcss.com/" },
  { name: "bootstrap", url: "https://getbootstrap.com/docs/5.0/getting-started/introduction/" },
  { name: "prisma", url: "https://www.prisma.io/" },
  { name: "vercel", url: "https://vercel.com/" },
  { name: "git", url: "https://git-scm.com/" },
  { name: "github", url: "https://github.com/" },
];

const Skill = () => {
  return (
    <div id="skill" className="px-4 sm:px-8 md:px-16 lg:px-20 mt-10 sm:mt-16 md:mt-20">
      <div className="heading flex flex-col sm:flex-row gap-3 sm:gap-5 items-center sm:items-start mb-6 sm:mb-8">
        <Image src="skill.svg" width={60} height={60} alt="Skill Icon" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center sm:text-left my-auto">
          Tech Stack <span className="text-xl sm:text-2xl block sm:inline">i&apos;ve experienced</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-items-center">
        {skillData.map((skill) => (
          <a
            key={skill.name}
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transform duration-300 w-full max-w-[120px] sm:max-w-[150px] md:max-w-[180px]"
          >
            <Image
              draggable="false"
              src={`${skill.name}.svg`}
              width={200}
              height={200}
              alt={skill.name}
              className="w-full h-auto"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Skill;

