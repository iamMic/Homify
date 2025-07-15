import React from "react";
import AppointmentButtons from "../components/AppointmentButtons";
import Appointments from "../components/Appointments";
import { FaCalendarAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { IoMdClock } from "react-icons/io";
import Link from "next/link";
import AppointmentHistory from "../components/AppointmentHistory";
var select = "All";
export default function page() {
  return (
    <div>
      <div className="welcome h-52 rounded-md p-5 flex items-center">
        <h1 className="text-2xl font-bold">Appointments</h1>
      </div>
      <section className="text-center border border-[#D9E0F1] p-6 rounded-md bg-[#fff] my-4">
        <h1 className="text-xl font-bold text-[#333333]">
          What would you like to do?
        </h1>
        <AppointmentButtons />
      </section>
      <section className="border border-[#D9E0F1] p-6 rounded-md bg-[#fff] my-4 relative">
        <h1 className="text-xl font-bold text-[#333]">Upcoming Events</h1>
        <FaCalendarAlt className="absolute right-5 top-7 text-xl" />
        <div className="mt-10">
          <Appointments />
        </div>
      </section>
      <section className="border border-[#D9E0F1] p-6 rounded-md bg-[#fff] my-4 space-y-5 relative">
        <h1 className="text-xl font-bold text-[#333]">Book Appointment</h1>
        <FaBook className="absolute right-5 top-7 text-xl" />
        <hr></hr>
        <div className="mt-8">
          <label>Property</label>
          <p className="text-sm italic">Saved Properties</p>
          <select className="border p-1 rounded-md w-8/12 mt-2">
            <option>Amazing 2 Bedroom in Lekki</option>
          </select>
        </div>
        <div>
          <label>Date</label>
          <br></br>
          <input type="date" className="border p-1 w-8/12 rounded-md mt-2" />
        </div>
        <div>
          <label>Time</label>
          <br></br>
          <input type="time" className="border w-8/12 p-1 rounded-md mt-2" />
        </div>
        <div>
          <label>Message</label>
          <p className="text-sm italic text-red-400"> *optional</p>
          <textarea
            placeholder="Write Short Message"
            className="border p-1  rounded-md w-8/12 h-40 mt-2"
          ></textarea>
        </div>
        <Link href="">
          <p className="bg-[#1A1F71] text-white px-4 py-1 font-medium w-fit rounded-md">
            Book Appointment
          </p>
        </Link>
      </section>
      <section className="border border-[#D9E0F1] p-6 rounded-md bg-[#fff] my-4 space-y-5 relative">
        <h1 className="text-xl font-bold text-[#333]">Appointment History</h1>
        <IoMdClock className="absolute right-5 top-7 text-xl" />
        <hr></hr>
        <div className="flex space-x-5">
          <h1 className="bg-[#333] text-white w-fit py-2 px-4 rounded-full">
            Sort
          </h1>
          <select className="border p-1 w-1/5 rounded-xl">
            <option>All</option>
            <option>This Week</option>
            <option>Last Week</option>
            <option>Last Month</option>
            <option>Last year</option>
          </select>
        </div>
        <div className="divide">
          <p className="font-semibold">{select}</p>
        </div>
        <div>
          <AppointmentHistory />
        </div>
      </section>
    </div>
  );
}
