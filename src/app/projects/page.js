import React from "react"
import Navbar from "../components/navbar"
import Link from "next/link";


export default function about() {
  return (
    <div className="w-[100%] h-[100vh]">
       
      
      <div style={{backgroundImage:`url(/Portfolio3.png)`}} className="h-screen flex flex-col justify-between bg-cover">
       
        <img  src="logo.png" alt="" className="w-[100px] h-20 ml-10 mt-14"/>

        <div className="w-[30%] h-[40%] flex ml-[10%] mt-[15%] bg-[#817f7f51]  absolute rounded-md   font: italic small-caps bold 16px cursive;">
          <img  src="project.jpg" alt="" className="w-[30%] h-[30%] ml-2 mt-10 rounded-3xl"/>
          <h1 className="text-3xl mt-[14%] ml-[5%] text-white font-serif ">News website</h1>
          <h1 className="text-3xl mt-[33%] ml-[1%] absolute  text-white font-serif ">Search for news articles</h1>
          <h1 className="text-3xl mt-[50%] ml-[1%] absolute  text-white font-serif ">10+</h1>
          <p className="text-1xl mt-[57%] ml-[1%] absolute  text-gray-600 font-serif ">Categories</p>
          <h1 className="text-3xl mt-[50%] ml-[30%] absolute  text-white font-serif ">20.12.2023</h1>
          <p className="text-1xl mt-[57%] ml-[30%] absolute  text-gray-600 font-serif ">Due date</p>
          <img  src="aa.png" alt="" className="w-[150px] h-[50px]  mt-[50%] ml-[1%]"/>          
        </div>

        <div className="w-[30%] h-[40%] flex ml-[55%] mt-[15%] absolute rounded-md bg-[#817f7f51]   font: italic small-caps bold 16px cursive;">
          <img  src="/project.jpg" alt="" className="w-[30%] h-[30%] ml-2 mt-10 rounded-3xl"/>
          <h1 className="text-3xl mt-[14%] ml-[5%] text-white font-serif "></h1>
          <h1 className="text-3xl mt-[33%] ml-[1%] absolute  text-white font-serif ">Search for news articles</h1>
          <h1 className="text-3xl mt-[50%] ml-[5%] absolute  text-white font-serif ">10+</h1>
          <p className="text-1xl mt-[57%] ml-[5%] absolute  text-gray-600 font-serif ">Categories</p>
          <h1 className="text-3xl mt-[50%] ml-[30%] absolute  text-white font-serif ">20.12.2023</h1>
          <p className="text-1xl mt-[57%] ml-[30%] absolute  text-gray-600 font-serif ">Due date</p>
          <img  src="/aa.png" alt="" className="w-[150px] h-[50px]  mt-[50%] ml-[1%]"/>          
        </div>
        
        <Navbar/>
        
      </div>
      
    </div>
  )
}
