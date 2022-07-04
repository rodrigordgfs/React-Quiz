import Header from "../../components/header";
import { MdDone, MdOutlineClear } from "react-icons/md";

export default function Game() {
  return (
    <div className="w-screen h-screen bg-blue-500 flex items-center justify-center">
      <div className="bg-white rounded-md shadow-md w-96">
        <Header />
        <div className="px-5 py-7 flex flex-col gap-5">
          <p className="font-poppins font-semibold">
            1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row items-center font-poppins justify-between w-full border-2 border-gray-400 bg-white hover:bg-gray-200 text-gray-700 rounded-md p-3 cursor-pointer">
              <p>Processed Hyperyext Page</p>
            </div>
            <div className="flex flex-row items-center font-poppins justify-between w-full border-2 border-green-600 bg-green-200 hover:bg-green-300 text-green-700 rounded-md p-3 cursor-pointer">
              <p className="">Processed Hyperyext Page</p>
              <div className="rounded-full bg-green-600 p-1">
                <MdDone size={18} color="white" />
              </div>
            </div>
            <div className="flex flex-row items-center font-poppins justify-between w-full border-2 border-red-600 bg-red-200 text-red-700 hover:bg-red-300 rounded-md p-3 cursor-pointer">
              <p className="">Processed Hyperyext Page</p>
              <div className="rounded-full bg-red-600 p-1">
                <MdOutlineClear size={18} color="white" />
              </div>
            </div>
            <div className="flex flex-row items-center font-poppins justify-between w-full border-2 border-gray-400 bg-white hover:bg-gray-200 text-gray-700 rounded-md p-3 cursor-pointer">
              <p>Processed Hyperyext Page</p>
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 font-poppins text-white p-2 rounded-md shadow-md">
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
}
