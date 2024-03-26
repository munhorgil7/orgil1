import React from "react";
import Link from "next/link";

const menuLinks = [
  {
    path: "/",
    label: "HOME",
  },
  {
    path: "/about",
    label: "ABOUT",
  },
  {
    path: "/projects",
    label: "PROJECTS",
  },
  {
    path: "/contact",
    label: "CONTACT",
  },
];


function Navbar() {
  return (
    <div className="flex items-center justify-end top-0 right-0 h-screen absolute poppins">
      <ul className="flex flex-col text-white gap-24 text-[20px] ">
        {menuLinks.map((link) => (
          <li
            key={link.path}
            className="rotate-90 p-2 hover:text-red-500 cursor-pointer text-right"
          >
            <Link href={link.path} className="menu-link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;