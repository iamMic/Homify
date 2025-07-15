import React from "react";
import { HiLightBulb } from "react-icons/hi";
import { HiBriefcase } from "react-icons/hi";
export default function page() {
  return (
    <div>
      <section className="border border-[#D9E0F1] p-6 rounded-md bg-[#fff] relative">
        <h1 className="text-xl font-bold">Check Your Loan Eligibiliy</h1>
        <p className="text-gray-600 mt-0.5">
          lets save you the stress, know if your eligible today!
        </p>
      </section>
      <section className="mt-4 grid grid-cols-2 gap-4">
        <div className="border border-[#D9E0F1] p-6 rounded-md bg-[#fff] relative w-full h-[500px] space-y-4">
          <div>
            <label>Number of Bedrooms</label>
            <br></br>
            <input
              type="number"
              className="border p-1 w-8/12 rounded-md mt-2"
            />
          </div>
          <div>
            <label>Number of Toilets</label>
            <br></br>
            <input
              type="number"
              className="border p-1 w-8/12 rounded-md mt-2"
            />
          </div>
          <div>
            <label>Number of Parking Space</label>
            <br></br>
            <input
              type="number"
              className="border p-1 w-8/12 rounded-md mt-2"
            />
          </div>
          <div>
            <label>Town</label>
            <br></br>
            <input type="text" className="border p-1 w-8/12 rounded-md mt-2" />
          </div>
          <div>
            <label>Type of House</label>
            <br></br>
            <select className="border p-1 rounded-md w-8/12 mt-2">
              <option>Bungalow</option>
              <option>Duplex</option>
              <option>Semi-Detached</option>
            </select>
          </div>
          <button className="bg-[#1A1F71] text-white px-4 py-1 font-medium w-fit rounded-md mt-5">
            Predict
          </button>
        </div>
        <div className="border border-[#D9E0F1] p-6 rounded-md bg-[#fff6debb] relative w-full h-[500px] flex justify-center items-center">
          <div className="text-[#F4B400]">
            <HiBriefcase className="text-[200px] " />
            <p className="font-bold">The Result should unveil here</p>
          </div>
        </div>
      </section>
    </div>
  );
}
