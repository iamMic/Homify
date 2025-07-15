import Link from "next/link";
import properties from "../data/properties.json";
import { IoSearch } from "react-icons/io5";
import Products from "../components/Products";
import BrowseProduct from "../components/BrowseProducts";
export default function PropertiesHome() {
  return (
    <div className="flex space-x-4">
      <div className="w-9/12 ">
        <div className="welcome h-52 rounded-md p-5 ">
          <div className="flex items-center justify-center h-full ">
            <div className="ml-5 text-[#333333] w-full text-center">
              <p className="font-bold text-2xl">Browse Properties</p>
              <input
                type="search"
                placeholder="Search properties by title or location"
                className="bg-[#fffdfdc3] rounded-full w-6/12 shadow-md p-2 mt-5 "
              />{" "}
              <button className="accentColor p-3 rounded-full">
                <IoSearch className="text-[#1A1F71]" />
              </button>
            </div>
          </div>
        </div>
        <BrowseProduct />
      </div>

      <div className=" border border-[#D9E0F1] p-6 rounded-md bg-[#fff] w-2/12 fixed right-9 h-96"></div>
    </div>
  );
}
