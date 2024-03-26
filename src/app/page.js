import React from "react";
import Navbar from "./components/navbar";
import Link from "next/link";
import TypeAnimation from "./components/TypeAnimation";



export default function Page() {
  return (
    <div className="w-[100%] h-[100vh]">
      <h1 className="text-[#fd3939] mt-[10%] ml-[5%]  absolute text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
          Hello I&apos;m
        </span>
        <br />
        <TypeAnimation
          sequence={[
            "AmwertR4",
            1000,
            "trying backend",
            1000,
            "trying frontend",
            1000,
            "ahh shet here we go again",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h1>

      <div
        style={{ backgroundImage: "url(/Portfolio.png)" }}
        className="h-screen flex flex-col justify-between bg-cover"
      >
        <img  src="logo.png" alt="" className="w-[100px] h-20 ml-10 mt-14" />
        <Navbar />
      </div>

      
    </div>
  );
}
