"use client";
import { useParams } from "next/navigation";
import properties from "../../data/properties.json";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import { HiUser } from "react-icons/hi";
import { FaBook } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
export default function PropertyDetails() {
  const { id } = useParams();

  const property = properties.find((item) => item.id === id);

  if (!property) {
    return <div className="p-10 text-red-500">Property not found</div>;
  }

  return (
    <div className="w-10/12 m-auto">
      <div className="w-full min-w-[500px] h-96 overflow-hidden rounded-md relative">
        <Image
          src={property.Img}
          width={1000}
          height={1000}
          alt="house"
          className="w-full h-full hover:scale-105 transition-all ease-in duration-100"
        />
        <p
          className={clsx(
            "  text-center font-medium rounded-sm px-4 py-2 top-5 right-5 absolute",
            { "greenColor text-white": property.color == true },
            {
              "bg-gradient-to-bl from-orange-400 to-orange-600 text-white":
                property.color == false,
            }
          )}
        >
          {property.status}
        </p>
      </div>
      <section className="border border-[#D9E0F1] p-6 rounded-md bg-[#fff] my-4 relative text-[#333]">
        <h1 className="text-2xl font-bold">{property.title}</h1>
        <p className="text-md">{property.location}</p>
        <p className="absolute right-5 top-5 text-[#F4B400] font-semibold text-shadow-2xs">
          {property.price}
        </p>

        <div className="flex space-x-4 mt-8">
          <Link
            href="/"
            className="flex items-center space-x-2 bg-[#1A1F71] text-white px-2 py-1 rounded-md"
          >
            <HiUser />
            <p>Contact Agent</p>
          </Link>
          <Link
            href="/"
            className="flex items-center space-x-2 bg-[#1A1F71] text-white px-2 py-1 rounded-md"
          >
            <FaBook />
            <p>Book Appointment</p>
          </Link>
          <Link
            href="/"
            className="flex items-center space-x-2 bg-[#1A1F71] text-white px-2 py-1 rounded-md"
          >
            <FaStar />
            <p>Save Property</p>
          </Link>
          <button className="bg-[#F4B400] text-black px-2 py-1 rounded-md w-16 font-medium">
            Buy
          </button>
        </div>
      </section>
      <section className="border border-[#D9E0F1] p-6 rounded-md bg-[#fff] my-4 relative text-[#333]">
        <h1 className="text-xl font-bold">Property Description</h1>
        <p className="mt-2 text-justify">
          {property.description || "No Description found"}
        </p>
        <hr className="my-4"></hr>
        <h1 className="text-xl font-bold">Property Details</h1>
        <table className="w-8/12 mt-4 tableClass rounded-md">
          <thead className="">
            <tr className="border">
              <th className="border">Features</th>
              <th className="border">Details</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="border">
              <td className="border">Bedrooms</td>
              <td className="border">{property.bedrooms}</td>
            </tr>
            <tr className="border">
              <td className="border">Toilets</td>
              <td className="border">{property.toilets}</td>
            </tr>
            <tr className="border">
              <td className="border">Parking Space</td>
              <td className="border">{property.parkingSpace}</td>
            </tr>
            <tr className="border">
              <td className="border">Type of House</td>
              <td className="border">{property.typeOfHouse}</td>
            </tr>
            <tr className="border">
              <td className="border">Distance from you</td>
              <td className="border">{property.distance}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="border border-[#D9E0F1] p-6 rounded-md bg-[#fff] my-4 relative text-[#333]">
        <h1 className="text-xl font-bold">Location</h1>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126830.50179452341!2d3.206919997265627!3d6.590457300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9382d5c51aa7%3A0x3c39749b9ed2dd4!2sTHE%20MAP%20ONLINE!5e0!3m2!1sen!2sng!4v1752164043766!5m2!1sen!2sng"
            className="w-full h-96 mt-5"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
