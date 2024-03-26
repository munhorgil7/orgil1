import React from "react"
import Navbar from "../components/navbar"
import Link from "next/link";

export default function about() {
  return (
    <div className="w-[100%] h-[100vh]">
      <div style={{backgroundImage:`url(/Portfolio3.png)`}} className="h-screen flex flex-col justify-between bg-cover">
        <img  src="/logo.png" alt="" className="w-[100px] h-20 ml-10 mt-14"/>
        <div className="font-italic small-caps bold 16px cursive ml-[10%] flex">
          <h1 className="text-3xl mt-4">Hi there! 👋  Im  </h1>
          <h1 className="text-red-500 text-3xl mt-4 ml-4">AmwertR4</h1>
        </div>
        <div className="font-italic small-caps bold 16px cursive ml-[10%] w-[75%] h-[100%]">
          <h1 className="text-2xl ml-[20%] mt-[10%] w-[60%]">Feel free to explore my portfolio&apos; and if you have any questions or just want to say hello&apos; dont hesitate to contact me.</h1>
          <ul className="text-2xl ml-[20%] mt-[5%] w-[60%]">Soft skills:
            <li>
              Teamwork&apos; Collaboration and Friendly
            </li>
          </ul>
          <ul className="text-2xl ml-[20%] mt-[5%] w-[60%]">Hard skills:
            <li>
              JavaScript&apos; React&apos; Next.js&apos; Tailwind&apos; Node.js&apos; MongoDB&apos; HTML&apos; CSS&apos; Figma and Django
            </li>
          </ul>
          <div style={{backgroundImage:`url(/face.png)`}} className="w-[500px] mr-[25%] absolute"></div>
        </div>
        <div className="font-italic small-caps bold 16px cursive ml-[10%] flex">
          <h1 className="text-2xl w-[300px] mb-[5%]">
            📍 Based in UlaanBaatar
            🌟 Passionate about 
          </h1>
        </div>
        <Navbar/>
      </div>
    </div>
  )
}
