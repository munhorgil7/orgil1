import React from 'react'

const menu = [
    {
      path: "/page",
      label: "AmwertR4",
    },
  
  
  ];

export default function name() {
  return (
    <div>
      <ul className="flex flex-col text-white gap-24 text-[20px] ">
        {menu.map((link) => (
          <li
            key={link.path}
            className=" p-2 text-red-500"
          >
            <Link href={link.path} className="menu">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
