import React from "react"
import Navbar from "../components/navbar"

export default function page() {
  return (
    <div className="w-[100%] h-[100vh]">
              <a href="../app/page.js"><h1 className="text-red-500 text-3xl ml-[8%] absolute top-[7.5%]">AmwertR4</h1></a>
            <div style={{backgroundImage:`url(/contact.png)`}} className="h-screen flex flex-col justify-between bg-cover">
            <img  src="/logo.png" alt="" className="w-[100px] h-20 ml-10 mt-14"/>
            <Navbar/>
            <img  src="/contact1.png" alt="" className="w-[40%] absolute ml-20 mt-14"/>
            <div className="w-[300px] ml-[50%] mt-[5%] mb-[50%] flex flex-col gap-[30px]">
                <label for="name">Name:</label>
                <input className=" w-[500px] text-xl flex bg-transparent border-b border-white outline-none"type="text" id="name" name="name"></input>
                <label for="mail">Mail:</label>
                <input className=" w-[500px] text-xl flex bg-transparent border-b border-white outline-none"type="text" id="name" name="name"></input>
                <label for="mesage">Mesaage:</label>
                <input className=" w-[500px] text-xl  flex bg-transparent border-b border-white outline-none"type="text" id="name" name="name"></input>
                <button class="rounded px-4 py-2 text-xs border-2 border-white text-white hover:bg-white hover:text-gray-800 duration-300">Submit</button>
            </div>
       </div>
    </div>
  )
}
