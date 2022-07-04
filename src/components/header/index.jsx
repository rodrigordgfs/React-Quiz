import { BiTimeFive } from "react-icons/bi";

export default function Header() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between font-poppins">
        <p className="p-4">1 of 5 Question</p>
        <div className="flex flex-row gap-2 items-center justify-center bg-gray-300 m-4 my-2 px-3 py-2 rounded-sm">
          <BiTimeFive size={18} />
          <p>10</p>
        </div>
      </div>
      <progress max="100" value="70" className="w-full h-1" />
    </div>
  );
}
