import React from "react";
import Navbar from "./components/navbar";
import Link from "next/link";
import Marquee from "react-fast-marquee";


export default function Page() {
  return (
    <div className="w-full h-screen flex flex-col items-center md:items-start justify-center">
      <video
        className="body-overlay z-[-30] absolute w-[100%] h-[100%] object-cover"
        muted
        autoPlay
        loop
        playsInline
      >
        <source src="/video4.mp4" type="video/mp4" />
      </video>
      <div className="w-[350px] md:w-[450px] h-[500px] md:h-[700px] md:ml-[100px] items-center p-5 right-6 border rounded-3xl border-gray-500 flex flex-col bg-cover backdrop-blur-[10px]">
          <img
            src="/profile.png"
            alt=""
            className="w-[200px] h-:[150px] md:w-[400px] h-[250px] rounded-2xl object-fit"
          />
        <div className="font-mono w-full mt-7 ">
          <h1 className="text-xl md:text-3xl w-[100%] h-[100%] md:mb-[20%] text-gray-500 lg:text-wrap truncate">
            Hi there! 👋 Im AmwertR4
            <br />
            feel free to look my portfolio.
          </h1>
        </div>
        <div className="font-italic small-caps bold w-full cursive flex">
          <h1 className="text-lg md:text-2xl md:w-[300px] w-[250px] md:mt-[60px] mt-[80px] text-gray-500 ">
            📍 Based in UlaanBaatar
            <br />
            🌟 Passionate about
          </h1>
        </div>
      </div>
      <div className="font absolute top-[10%] h-[85%] w-[100%] z-[-20]">
        <Marquee className="top-[20%]" speed={250}>
          <h1 className="text-[80px] font-extrabold italic uppercase text-gray-300">AmwertR4</h1>
        </Marquee>

        <Marquee className="top-[20%]" speed={250}>
          <h1 className="text-[80px] font-extrabold italic uppercase text-blue-500">FULLSTACK DEVELOPER FULLSTACK</h1>
        </Marquee>
        <Marquee className="top-[20%]" speed={250}>
          <h1 className="text-[80px] font-extrabold italic uppercase text-gray-300">DEVELOPER FULLSTACK DEVELOPER</h1>
        </Marquee>

      </div>

      <Navbar/>
    </div>
  );
}
