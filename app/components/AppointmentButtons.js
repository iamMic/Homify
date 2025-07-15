import Link from "next/link";
import React from "react";
import { FaBook } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdClock } from "react-icons/io";
const button = [
  {
    name: "Book Appointment",
    style: "",
    icon: FaBook,
    href: "/",
  },
  {
    name: "View Upcoming",
    style: "",
    icon: FaCalendarAlt,
    href: "/",
  },
  {
    name: "History",
    style: "",
    icon: IoMdClock,
    href: "/",
  },
];
export default function AppointmentButtons() {
  return (
    <div className="flex items-center w-9/12 m-auto justify-center space-x-6 mt-10">
      {button.map((buttons) => {
        const LinkIcon = buttons.icon;
        return (
          <Link
            key={buttons.name}
            href={buttons.href}
            className=" px-2 py-1 w-60 m-auto border-2 border-[#F4B400] text-[#1A1F71] rounded-sm cursor-pointer font-medium drop-shadow-md "
          >
            <button className="flex justify-center w-full items-center space-x-4 ">
              <LinkIcon className="text-xl" />
              <p className="">{buttons.name}</p>
            </button>
          </Link>
        );
      })}{" "}
    </div>
  );
}
