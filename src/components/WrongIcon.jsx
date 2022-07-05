import React from "react";
import { MdOutlineClear } from "react-icons/md";

export default function WrongIcon() {
  return (
    <div className="rounded-full bg-red-600 p-1">
      <MdOutlineClear size={18} color="white" />
    </div>
  );
}
