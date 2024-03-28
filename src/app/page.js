import React from "react";
import Navbar from "./components/navbar";
import Link from "next/link";
import Marquee from "react-fast-marquee";


export default function Page() {
  return (
    <div className="w-full h-[100vh] ">
      <video
        className="body-overlay  absolute w-[100%] h-[100%] object-cover"
        muted
        autoPlay
        loop
        playsInline
      >
        <source src="/video4.mp4" type="video/mp4" />
      </video>
      <div className="w-[25%] h-[85%] border mt-[5%]  z-[999] ml-[8%] absolute rounded-3xl border-gray-500 flex flex-col justify-between bg-cover backdrop-blur-[10px]">
        <div>
          <img
            src="contact.png"
            alt=""
            className="w-[90%] h-[100%] rounded-2xl ml-6 mt-10"
          />
        </div>
        <div className="font-mono ml-[10%]">
          <h1 className="text-3xl w-[80%] h-[50%] mb-[20%] text-gray-500">
            Hi there! 👋 Im AmwertR4
            <br />
            Feel free to explore my portfolioaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.
          </h1>
        </div>
        <div className="font-italic small-caps bold 16px cursive ml-[10%] flex">
          <h1 className="text-2xl w-[300px] mb-[15%] text-gray-500 ">
            📍 Based in UlaanBaatar
            <br />
            🌟 Passionate about
          </h1>
        </div>
      </div>
      <div className="font absolute top-[10%] h-[85%] w-[700%] ">
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
