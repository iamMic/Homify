import Link from "next/link";
import React from "react";
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
export default function AppointmentHistory() {
  return (
    <div>
      <table className="border border-collapses w-full rounded-md">
        <thead>
          <tr className="border border-[#333] bg-[#333] text-white">
            <th className="p-1 text-center">Property</th>
            <th className="p-1 text-center">Location</th>
            <th className="p-1 text-center">Time</th>
            <th className="p-1 text-center">Date</th>
            <th className="p-1 text-center">Status</th>
            <th className="p-1 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointment.map((appoint, i) => {
            return (
              <tr
                key={i}
                className="border nth-[even]:bg-gray-100 nth-[odd]:bg-gray-200"
              >
                <td className="p-1 border">{appoint.property}</td>
                <td className="p-1 border ">{appoint.location}</td>
                <td className="p-1 border">{appoint.time}</td>
                <td className="p-1 border">{appoint.date}</td>
                <td className="p-1 border capitalize">{appoint.status}</td>
                <td className="p-1 border ">
                  <div className="space-x-2 m-auto w-fit">
                    <Link href="">
                      <button className="bg-[#1A1F71] px-2 py-1 font-medium rounded-md text-white">
                        Review
                      </button>
                    </Link>
                    <Link href="">
                      <button className="bg-[black] px-2 py-1 font-medium rounded-md text-white">
                        Delete
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="text-blue-500 mt-4">Show more....</button>
    </div>
  );
}
