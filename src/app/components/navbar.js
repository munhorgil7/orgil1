import React from "react";
import { FiHome, FiUser, FiBriefcase, FiMail } from "react-icons/fi";
import Link from "next/link";

const menuLinks = [
  {
    path: "/",
    label: "HOME",
    icon: <FiHome style={{ fontSize: "30px" }}/>,
  },
  {
    path: "/about",
    label: "ABOUT",
    icon: <FiUser style={{ fontSize: "30px" }}/>,
  },
  {
    path: "/projects",
    label: "PROJECTS",
    icon: <FiBriefcase style={{ fontSize: "30px" }} />,
  },
  {
    path: "/contact",
    label: "CONTACT",
    icon: <FiMail style={{ fontSize: "30px" }}/>,
  },
];

function Navbar() {
  return (
    <div className="flex items-center justify-center top-[40%] right-[2%]  absolute poppins bg-slate-700 rounded-3xl h-[300px] w-[50px]   ">
      <ul className="flex flex-col text-white gap-10 text-[20px] ">
        {menuLinks.map((link) => (
          <li
            key={link.path}
            className=" rotate-1 p-2 hover:text-slate-500 cursor-pointer text-right z-[999]"
          >
            <Link href={link.path} className="menu-link ">
              {link.icon} {/* Render the icon */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
