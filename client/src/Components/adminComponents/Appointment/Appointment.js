import React from "react";
import { AiTwotoneEdit } from "react-icons/ai";
import { HiViewGridAdd } from "react-icons/hi";
function Appointment() {
  return (
    <div>
      <div className="h-20 bg-green-600 flex items-center p-3">
        <h2 className="text-2xl font-bold text-white">Appointment</h2>
      </div>
      <div className="flex  container shadow-md justify-evenly h-16 items-center ">
        <h4 className="font-bold translate-x-0">Time</h4>{" "}
        <h4 className="font-bold translate-x-5">Date</h4>{" "}
        <h4 className="font-bold  translate-x-8">Status</h4>{" "}
        <h4 className="font-bold translate-x-4">Option</h4>
      </div>
      <div className="container flex flex-col   ">
        <div className="w-full  flex justify-evenly h-14 my-2 items-center  border-8 border-l-red-800">
          <h4 className="font-bold ">12:00 AM</h4>{" "}
          <h4 className="font-bold ">June 14 2000</h4>{" "}
          <h4 className="font-bold ">Pending</h4>{" "}
          <h4 className="font-bold flex w-9">
            <div className="border w-fit p-2 rounded-3xl duration-200 mr-1 cursor-pointer text-xs bg-green-600 font-bold  text-white hover:bg-green-400 ">
              Edit
            </div>
            <div className="border w-fit p-2 rounded-3xl duration-200 mr-1 cursor-pointer text-xs bg-red-600 font-bold  text-white hover:bg-red-400 ">
              Reject
            </div>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
