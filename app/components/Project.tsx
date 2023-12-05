"use client";

import Image from "next/image";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const Project = () => {
  return (
    <div id="project" className="px-20 mt-32">
      <div className="heading flex gap-5 justify-end">
        <Image src="project.svg" width={100} height={100} alt="facebook" />
        <h1 className="font-bold text-5xl my-auto">
          Highlighted Projects <span className="text-2xl">i’ve done</span>
        </h1>
      </div>
      <div className="project3 px-20 py-16 mt-14 space-y-12">
        <div className="font-bold text-6xl text-yellow-500">
          SSW Company Profile
        </div>
        <div className="text-xl leading-7">
          Smart Sinergy World (SSW) company profile website is a comprehensive
          online platform designed to provide a clear and detailed insight into
          the community. It offers an overview of SSW, explains its business
          model, showcases seminar activities, and highlights available products
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image className="rounded-lg" src="ssw1.svg" width={600} height={600} alt="SSW Project" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="rounded-lg" src="ssw2.svg" width={600} height={600} alt="SSW Project" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="rounded-lg" src="ssw3.svg" width={600} height={600} alt="SSW Project" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="rounded-lg" src="ssw4.svg" width={600} height={600} alt="SSW Project" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="rounded-lg" src="ssw5.svg" width={600} height={600} alt="SSW Project" />
          </SwiperSlide>
        </Swiper>
        <div className="flex gap-10 my-auto">
          <a
            href=""
            className="btn-demo3 flex w-[321px] py-8 justify-center gap-5"
          >
            <div className="text-4xl font-bold my-auto">Live Demo</div>
            <div className="box-arrow2 p-4">
              <Image src="demo.svg" width={30} height={30} alt="arrow" />
            </div>
          </a>
          <div className="flex flex-col">
            <div className="text-3xl text-[#919DC1] font-bold">
              Source Code & Documentation
            </div>
            <div className="flex flex-row my-auto gap-3">
              <div className="text-3xl text-black font-semibold my-auto">
                On
              </div>
              <Image src="mygithub.svg" width={50} height={50} alt="Github" />
              <div className="text-3xl text-black font-semibold my-auto">
                github.com
              </div>
            </div>
          </div>
        </div>
        <div className="text-3xl font-semibold">Featured technologies used</div>
        <div className="container flex flex-row gap-7">
          <Image src="origin/next.svg" width={80} height={80} alt="Next" />
          <Image
            src="origin/tailwind.svg"
            width={80}
            height={80}
            alt="Tailwind"
          />
          <Image src="origin/vercel.svg" width={80} height={80} alt="Vercel" />
        </div>
      </div>
      <div className="project1 px-20 py-16 mt-14 space-y-12">
        <div className="font-bold text-6xl text-blue-600">
          Sea<span className="text-black">nema</span>
        </div>
        <div className="text-xl leading-7">
          Sea - cinema is web application that allows users to book movie
          tickets online. It provides a user-friendly interface for browsing
          movies, selecting seats, and making payments.
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image src="sea1.svg" width={600} height={600} alt="Sea Project" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="sea2.svg" width={600} height={600} alt="Sea Project" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="sea3.svg" width={600} height={600} alt="Sea Project" />
          </SwiperSlide>
        </Swiper>
        <div className="flex gap-10 my-auto">
          <a
            href=""
            className="btn-demo1 flex w-[321px] py-8 justify-center gap-5"
          >
            <div className="text-4xl font-bold my-auto">Live Demo</div>
            <div className="box-arrow1 p-4">
              <Image src="demo.svg" width={30} height={30} alt="arrow" />
            </div>
          </a>
          <div className="flex flex-col">
            <div className="text-3xl text-[#919DC1] font-bold">
              Source Code & Documentation
            </div>
            <div className="flex flex-row my-auto gap-3">
              <div className="text-3xl text-black font-semibold my-auto">
                On
              </div>
              <Image src="mygithub.svg" width={50} height={50} alt="Github" />
              <div className="text-3xl text-black font-semibold my-auto">
                github.com
              </div>
            </div>
          </div>
        </div>
        <div className="text-3xl font-semibold">Featured technologies used</div>
        <div className="container flex flex-row gap-7">
          <Image src="origin/next.svg" width={80} height={80} alt="Next" />
          <Image src="origin/prisma.svg" width={80} height={80} alt="Prisma" />
          <Image
            src="origin/tailwind.svg"
            width={80}
            height={80}
            alt="Tailwind"
          />
          <Image src="origin/vercel.svg" width={80} height={80} alt="Vercel" />
        </div>
      </div>
      <div className="project2 px-20 py-16 mt-14 space-y-12">
        <div className="font-bold text-6xl text-blue-600">
          Kidsera Dashboard
        </div>
        <div className="text-xl leading-7">
          Kidsera Dashboard is an information system for teachers at kidsera
          kindegarten which has the function of processing data starting from
          facilities & infrastructure to every detail of student data packaged
          with an easy-to-understand user experience and a modern user interface
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src="sera1.svg"
              width={1000}
              height={1000}
              alt="Sera Project"
            />
          </SwiperSlide>
        </Swiper>
        <div className="flex gap-10 my-auto">
          <a
            href=""
            className="btn-demo2 flex w-[321px] py-8 justify-center gap-5"
          >
            <div className="text-4xl font-bold my-auto">Live Demo</div>
            <div className="box-arrow2 p-4">
              <Image src="demo.svg" width={30} height={30} alt="arrow" />
            </div>
          </a>
          <div className="flex flex-col">
            <div className="text-3xl text-blue-500 font-bold">
              Source Code & Documentation
            </div>
            <div className="flex flex-row my-auto gap-3">
              <div className="text-3xl text-black font-semibold my-auto">
                On
              </div>
              <Image src="mygithub.svg" width={50} height={50} alt="Github" />
              <div className="text-3xl text-black font-semibold my-auto">
                github.com
              </div>
            </div>
          </div>
        </div>
        <div className="text-3xl font-semibold">Featured technologies used</div>
        <div className="container flex flex-row gap-7">
          <Image src="origin/ionic.svg" width={80} height={80} alt="Next" />
          <Image src="origin/vue.svg" width={80} height={80} alt="Prisma" />
          <Image
            src="origin/bootstrap.svg"
            width={80}
            height={80}
            alt="Tailwind"
          />
          <Image src="origin/flask.svg" width={80} height={80} alt="Vercel" />
        </div>
      </div>
    </div>
  );
};

export default Project;
