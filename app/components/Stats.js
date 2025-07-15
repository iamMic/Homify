import React from "react";
import { FaStar } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaHouseSignal } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
const stat = [
  {
    name: "Saved Properties",
    data: "100",
    icon: FaStar,
    class: "text-3xl text-amber-600 m-auto",
  },
  {
    name: "Upcoming",
    data: "Tuesday, 20th July",
    icon: FaClock,
    class: "text-3xl text-black m-auto",
  },
  {
    name: "Messages",
    data: "5",
    icon: FaMessage,
    class: "text-3xl text-blue-600 m-auto",
  },
  {
    name: "New Listings",
    data: "8 nearby",
    icon: FaHouseSignal,
    class: "text-3xl text-red-600 m-auto",
  },
];
export default function Stats() {
  return (
    <div className="flex justify-around">
      {stat.map((box) => {
        const LinkIcon = box.icon;
        return (
          <div
            key={box.name}
            className="text-center p-4 bg-white rounded-md statsBoxs w-44 hover:scale-110 transition-all ease-in-out duration-200"
          >
            <LinkIcon className={box.class} />
            <p className="mt-2 font-medium text-[#333333]">{box.name}</p>
            <p className="mt-2 text-[#1a1e71d0]">{box.data}</p>
          </div>
        );
      })}
    </div>
  );
}
