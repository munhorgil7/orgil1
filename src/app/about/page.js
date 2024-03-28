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

      <div className="overflow-visible 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 z-[1]">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-500 pb-4">About Us</h1>
            <p className="font-normal text-base leading-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
          </div>
          <div className="w-full lg:w-8/12">
            <img className="w-full h-full" src="/AboutUs.png" alt="A group of People" />
          </div>
        </div>

        <div className="flex relative">
          <div className="w-full flex flex-col mt-[7%] justify-around">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-500 pb-4">Skills</h1>
            <Marquee className="top-[10%] w-full loop" speed={250}>
            <img className="md:block hidden w-[30%] ml-[13%]" src="/node.png" alt="Alexa featured Img" />
            <img className="md:block hidden  w-[40%]" src="/python.png" alt="Olivia featured Img" />
            <img className="md:block hidden  w-[40%]" src="/next.svg" alt="Liam featued Img" />
            <img className="md:block hidden  w-[30%]" src="/react.webp" alt="Elijah featured img" />
            <img className="md:block hidden  w-[40%]" src="/javascript-3.png" alt="Elijah featured img" />
            <img className="md:block hidden  w-[80%]" src="/mongo.png" alt="Elijah featured img" />
            </Marquee>
          </div>
          
        </div>
      </div>

      <Navbar />
    </div>
  );
}
