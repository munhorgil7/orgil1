import React from "react";
import Navbar from "../components/navbar";
import Link from "next/link";
import Marquee from "react-fast-marquee";
export default function About() {
  return (
    <div className="w-full h-screen flex flex-col justify-between bg-cover">
      <video className="body-overlay absolute w-full h-full object-cover" muted autoPlay loop playsInline>
        <source src="/video4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overflow-visible 2xl:container  2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 z-[1]">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-500 pb-4">About Me</h1>
            <p className="font-normal text-base leading-6 md:text-xl text-white italic">I have seen quite a few programming languages ​​in 1 year. I am trying to be a fullstack developer. I'm eager to tackle new challenges. I'm currently seeking opportunities to collaborate on exciting projects. Feel free to reach out—I'd love to chat about how I can contribute to your team! </p>
          </div>
          <div className="w-full lg:w-8/12 ">
            <img className="w-full h-full" src="/AboutUs.png" alt="A group of People" />
          </div>
        </div>

        <div className="flex relative ">
          <div className="w-full flex flex-col mt-[5%] justify-around absolute ">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-500 pb-4 ">Skills</h1>
            <Marquee className="mt-[5%] w-full loop " speed={200}>
            <img className="w-[100px] h-[100px] mr-20" src="/python.png" alt="Olivia featured Img" />
            <img className="w-[100px] h-[100px] mr-20" src="/next.svg" alt="Liam featued Img" />
            <img className="w-[100px] h-[100px] mr-20" src="/css.png" alt="Elijah featured img" />
            <img className="w-[100px] h-[100px] mr-20" src="/react.png" alt="Elijah featured img" />
            <img className="w-[100px] h-[100px] mr-20" src="/javascript-3.png" alt="Elijah featured img" />
            <img className="w-[100px] h-[100px] mr-20" src="/html.png" alt="Elijah featured img" />
            <img className="w-[100px] h-[100px] mr-20" src="/django.png" alt="Elijah featured img" />
            <img className="w-[100px] h-[100px] mr-20" src="/github.png" alt="Elijah featured img" />

            

            </Marquee>
          </div>
          
        </div>
      </div>

      <Navbar />
    </div>
  );
}
