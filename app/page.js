import Image from "next/image";
import { MdWbSunny } from "react-icons/md";
import Stats from "./components/Stats";
import Buttons from "./components/Buttons";
import { FaMap } from "react-icons/fa";
import Products from "./components/Products";
import { FaRobot } from "react-icons/fa";
export default function Home() {
  return (
    <div>
      <div className="welcome h-52 rounded-md p-5">
        <div className="flex items-center">
          <MdWbSunny className="text-3xl text-[#333333]" />
          <div className="ml-5 text-[#333333]">
            {" "}
            <p className="font-bold text-2xl">Welcome Back, Michael</p>
            <p>Lets Find your dream Home today</p>
          </div>
        </div>
      </div>
      <div className=" w-9/12 stats relative -top-15 m-auto">
        <Stats />
      </div>
      <section className="text-center border border-[#D9E0F1] p-6 rounded-md bg-[#fff]">
        <h1 className="text-xl font-bold text-[#333333]">
          What would you like to do today ?
        </h1>
        <Buttons />
      </section>
      <section className="border border-[#D9E0F1] p-6 rounded-md bg-[#fff] my-6 relative">
        <header className="text-[#333]">
          {" "}
          <h1 className="text-xl font-bold">Suggested for you</h1>
          <p className="text-gray-600 mt-0.5">Available houses near you</p>
          <FaMap className="text-2xl absolute top-10 right-10 text-[#1A1F71]" />
        </header>
        <div className="my-10 mx-10">
          <Products />
        </div>
      </section>
      <section className="border border-[#D9E0F1] p-6 rounded-md bg-[#fff] my-6 relative">
        <FaRobot className="absolute text-3xl right-10 top-10 text-[#1A1F71]" />
        <h1 className="text-xl font-bold">
          Find your Dream House with our Prediction AI
        </h1>
        <p className="text-gray-600 mt-0.5">Predict, Book and Enjoy</p>

        <div className="mt-10">
          <p className="font-medium">Tell us about it?</p>
          <textarea
            className="border border-[#D9E0F1] w-6/12 min-w-80 h-20 mt-2 p-1 rounded-md"
            placeholder="Describe your house and we will predict the price"
          ></textarea>{" "}
          <br></br>
          <button className="bg-[#1A1F71] text-[#fff] px-4 py-1 font-medium rounded-sm mt-2">
            Homify
          </button>
        </div>
      </section>
    </div>
  );
}
