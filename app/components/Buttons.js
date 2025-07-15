import Link from "next/link";
import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";
import { TbHomeStar } from "react-icons/tb";
import { RiBuilding2Fill } from "react-icons/ri";
import { HiChatAlt2 } from "react-icons/hi";

const buttons = [
  {
    name: "Browse Listings",
    icon: FaStar,
    href: "browse",
  },
  {
    name: "Book a Visit",
    icon: FaBookOpen,
    href: "appointments",
  },
  {
    name: "Message Agent",
    icon: HiChatAlt2,
    href: "messages",
  },
  {
    name: "View Saved Properties",
    icon: RiBuilding2Fill,
    href: "properties",
  },
];
export default function Buttons() {
  return (
    <div className="flex justify-around mt-10 w-9/12 m-auto">
      {buttons.map((button) => {
        const ButtonIcon = button.icon;

        return (
          <Link key={button.name} href={button.href} className="">
            <button className="flex items-center border-2 border-[#F4B400] text-[#1A1F71] px-3 py-2 rounded-sm cursor-pointer font-medium drop-shadow-md">
              <ButtonIcon className="text-xl" />
              <p className="ml-3"> {button.name}</p>
            </button>
          </Link>
        );
      })}
    </div>
  );
}
