import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { HiClock } from "react-icons/hi";
import { HiUser } from "react-icons/hi";
import { HiOfficeBuilding } from "react-icons/hi";
const appointment = [
  {
    date: "27 Jul",
    time: "10:00 AM",
    location: "123 Lekki Phase 1, Ikeja",
    property: "2 bedroom flat",
    Agent: "Kenny ",
    status: "confirmed",
  },
  {
    date: "27 Jul",
    time: "10:00 AM",
    location: "123 Lekki Phase 1, Ikeja",
    property: "2 bedroom flat",
    Agent: "Kenny ",
    status: "cancelled",
  },
  {
    date: "28 Jul",
    time: "10:00 AM",
    location: "123 Lekki Phase 1, Ikeja",
    property: "2 bedroom flat",
    Agent: "Kenny Andrew",
    status: "pending",
  },
  {
    date: "1 Jul",
    time: "10:00 AM",
    location: "123 Lekki Phase 1, Ikeja",
    property: "2 bedroom flat",
    Agent: "Michael Ofoye",
    status: "confirmed",
  },
];
export default function Appointments() {
  return (
    <div className="grid grid-cols-2 gap-4 w-9/12 m-auto">
      {appointment.map((appoint, i) => {
        return (
          <div
            key={i}
            className="bg-[#333] text-white p-2 rounded-md flex justify-around divide-x w-10/12 m-auto relative"
          >
            <div className="pr-8 pt-8">
              <p
                className={clsx(
                  "py-1 px-2 rounded-md absolute -left-10 font-medium capitalize top-2",
                  {
                    "bg-gradient-to-l from-green-600 to-green-800":
                      appoint.status == "confirmed",
                    "bg-gradient-to-l from-red-600 to-red-800":
                      appoint.status == "cancelled",
                    "bg-gradient-to-l from-yellow-600 to-yellow-800":
                      appoint.status == "pending",
                  }
                )}
              >
                {appoint.status}
              </p>
              <p className="text-3xl w-10 text-center font-bold m-auto mt-2">
                {appoint.date}
              </p>
            </div>
            <div className="pl-2">
              <div className="flex items-center space-x-3">
                <HiClock />
                <p>{appoint.time}</p>
              </div>
              <div className="flex items-center space-x-3">
                <HiLocationMarker />
                <p>{appoint.location}</p>
              </div>
              <div className="flex items-center space-x-3">
                <HiOfficeBuilding />
                <p>{appoint.property}</p>
              </div>
              <div className="flex items-center space-x-3">
                <HiUser />
                <p>{appoint.Agent}</p>
              </div>
              <div className="mt-4 text-center">
                {" "}
                <Link href="" className="">
                  <p className=" bg-[#606060] px-1 py-2 rounded-md">
                    Cancel Appointment
                  </p>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
