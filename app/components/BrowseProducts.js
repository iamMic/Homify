import React from "react";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { SlOptionsVertical } from "react-icons/sl";
import { SiGooglemaps } from "react-icons/si";
import clsx from "clsx";
import properties from "../data/properties.json";

export default function BrowseProduct() {
  return (
    <div className="text-[#333]">
      {properties.map((products) => {
        return (
          <div
            key={products.id}
            className="bg-white w-9/12 rounded-md shadow-md relative p-1 border border-[#D9E0F1] h-[250px] flex my-5 min-w-[500px] m-auto hover:scale-105 transition-all ease-in-out duration-100"
          >
            <div className="absolute space-y-1 left-2 top-2">
              <p className="bg-[#333] text-white text-center font-medium rounded-sm">
                ₦{products.price}
              </p>
              <p
                className={clsx(
                  "  text-center font-medium rounded-sm p-1 ",
                  { "greenColor text-white": products.color == true },
                  {
                    "bg-gradient-to-bl from-orange-400 to-orange-600 text-white":
                      products.color == false,
                  }
                )}
              >
                {products.status}
              </p>
            </div>
            <Image
              src={
                products.Img && products.Img.trim() !== ""
                  ? products.Img
                  : "/white.jpg"
              }
              width={1000}
              height={1000}
              alt={products.title || "Property image"}
              className="rounded-md w-6/12 h-full"
            />
            <div className="py-2 px-4 relative">
              <p className=" text-lg font-bold">{products.title}</p>
              <hr className="text-gray-400 mt-2"></hr>
              <div className="flex mt-4 items-center space-x-2">
                <SiGooglemaps className="text-2xl ml-0.5" />
                <div>
                  <p className="font-medium">{products.location}</p>
                  <p className="text-[#F4B400] text-sm text-shadow-sm text-shadow-gray-100">
                    Just {products.distance} away
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2 mt-5 mb-6">
                <FaUser className="text-3xl border rounded-full p-1" />
                <div>
                  {" "}
                  <p className="font-medium">{products.agent}</p>
                  <p className="text-sm">{products.agentLoc}. 3d ago</p>
                </div>
              </div>
              <div className="flex space-x-2 items-center">
                <Link href={`/properties/${products.id}`}>
                  <button className="text-[#1A1F71] border-2 border-[#1A1F71] py-1 px-3 rounded-sm font-medium">
                    View Details
                  </button>
                </Link>
                {products.href && (
                  <Link
                    href={products.href}
                    className="bg-[#F4B400] text-[#1A1F71] py-1 px-5 rounded-sm font-medium drop-shadow-md"
                  >
                    <button>Buy</button>
                  </Link>
                )}
                {products.href && (
                  <Link href={products.href} className="absolute right-0">
                    <SlOptionsVertical className=" w-8 h-8 rounded-full p-2 bg-[#D9E0F1] text-gray-600" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
