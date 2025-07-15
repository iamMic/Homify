"use client";
import React from "react";
import Link from "next/link";
import { FaBuilding, FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { PiBuildingsFill } from "react-icons/pi";
import { FaBell } from "react-icons/fa";
import { HiChatAlt } from "react-icons/hi";
import { HiOfficeBuilding } from "react-icons/hi";
import { RiMessage2Fill } from "react-icons/ri";
import { HiSparkles } from "react-icons/hi";
import { HiHome } from "react-icons/hi";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { HiCalendar } from "react-icons/hi";
import { HiLightBulb } from "react-icons/hi";
import { HiBriefcase } from "react-icons/hi";
import clsx from "clsx";
const links = [
  {
    name: "Home",
    icon: HiHome,
    href: "/",
  },
  {
    name: "Properties",
    icon: HiOfficeBuilding,
    href: "/properties",
  },
  {
    name: "Messages",
    icon: HiChatAlt,
    href: "/messages",
  },
  {
    name: "Appointments",
    icon: HiCalendar,
    href: "/appointments",
  },
  {
    name: "Prediction AI",
    icon: HiLightBulb,
    href: "/prediction",
  },
  {
    name: "Loan Eligibility",
    icon: HiBriefcase,
    href: "/loanEligibility",
  },
];
export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="">
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive =
          link.href === "/properties"
            ? pathname.startsWith("/properties")
            : pathname === link.href;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("hover:text-[#FFF4D6] transition-all ease-in")}
          >
            <div
              className={clsx(
                "text-[#4A4A4A] flex items-center py-5 px-4",
                {
                  specialBorder: isActive,
                  " text-[#F4B400] font-bold bg-[#E8ECF9]": isActive,
                },
                "hover:bg-[#FFF4D6] transition-all ease-in"
              )}
            >
              {" "}
              <LinkIcon className="text-xl" />
              <p className="ml-5">{link.name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
