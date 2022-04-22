import React from "react";

import Profile from "../assets/photo.jpg";
import Setting from "../assets/settings.png";
import Google from "../assets/google-plus.png";
import Shop from "../assets/shopping.png";
import Member from "../assets/group.png";
import Dashboard from "../assets/dashboard.png";
import Widgets from "../assets/widgets.png";
import Charts from "../assets/charts.png";
import Ui from "../assets/ui.png";
import Forms from "../assets/forms.png";
import Tables from "../assets/tables.png";
import Calendar from "../assets/calendar.png";
import Mailbox from "../assets/mail.png";
import Examples from "../assets/examples.png";
import Multilevel from "../assets/level.png";

export default function Contents() {
  return (
    <>
      <div className="bg-gray-100 grid grid-rows-4 grid-flow-col gap-4 py-2 px-2">
        {/* left */}
        <div className="row-span-4 bg-gray-700 text-white rounded-lg py-2 ...">
          <div class="flex items-center mx-2">
            <img src={Profile} className="mr-2 h-16 w-16 rounded-full" />

            <div className="w-full block">
              <div>
                <strong>Muhammad Passyah</strong>
              </div>
              <div className="flex justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
                <span className="flex items-center text-green-600 ml-2">
                  Online
                </span>
              </div>
            </div>
          </div>

          <div class="grid grid-rows-11 gap-4 py-3">
            <div class="flex justify-center col-span-2 uppercase mt-5 py-2 px-2 bg-gray-800 text-gray-500 font-bold text-sm ...">
              main navigation
            </div>
            <div class="col-span-2 mx-2 flex items-center cursor-pointer hover:text-gray-300 ...">
              <img src={Dashboard} alt="" className="flex mr-2 h-8 w-8" />{" "}
              <p className="">Dashboard</p> 
            </div>
            <div class="col-span-2 mx-2 flex items-center cursor-pointer hover:text-gray-300 ...">
              <img src={Widgets} alt="" className="flex mr-2 h-8 w-8 transform transition duration-500 hover:scale-110" />
              <p className="">Widgets</p>
            </div>
            <div class="col-span-2 mx-2 flex items-center cursor-pointer hover:text-gray-300 ...">
              <img src={Charts} alt="" className="flex mr-2 h-8 w-8 transform transition duration-500 hover:scale-110" />
              <p className="">Charts</p>
            </div>
            <div class="col-span-2 mx-2 flex items-center cursor-pointer hover:text-gray-300 ...">
              <img src={Ui} alt="" className="flex mr-2 h-8 w-8 transform transition duration-500 hover:scale-110" />
              <p className="">UI Elements</p>
            </div>
            <div class="col-span-2 mx-2 flex items-center cursor-pointer hover:text-gray-300 ...">
              <img src={Forms} alt="" className="flex mr-2 h-8 w-8 transform transition duration-500 hover:scale-110" />
              <p className="">Forms</p>
            </div>
            <div class="col-span-2 mx-2 flex items-center cursor-pointer hover:text-gray-300 ...">
              <img src={Tables} alt="" className="flex mr-2 h-8 w-8 transform transition duration-500 hover:scale-110" />
              <p className="">Tables</p>
            </div>
            <div class="col-span-2 mx-2 flex items-center cursor-pointer hover:text-gray-300 ...">
              <img src={Calendar} alt="" className="flex mr-2 h-8 w-8 transform transition duration-500 hover:scale-110" />
              <p className="">Calendar</p>
            </div>
            <div class="col-span-2 mx-2 flex items-center cursor-pointer hover:text-gray-300 ...">
              <img src={Mailbox} alt="" className="flex mr-2 h-8 w-8 transform transition duration-500 hover:scale-110" />
              <p className="">Mailbox</p>
            </div>
            <div class="col-span-2 mx-2 flex items-center cursor-pointer hover:text-gray-300 ...">
              <img src={Examples} alt="" className="flex mr-2 h-8 w-8 transform transition duration-500 hover:scale-110" />
              <p className="">Examples</p>
            </div>
            <div class="col-span-2 mx-2 flex items-center cursor-pointer hover:text-gray-300 ...">
              <img src={Multilevel} alt="" className="flex mr-2 h-8 w-8 transform transition duration-500 hover:scale-110" />
              <p className="">Multilevel</p>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="flex col-span-8 h-10 my-4 ...">
          <h1 className="flex text-3xl items-center">Dashboard</h1>
          <p className="flex items-start text-sm ml-3 text-gray-500">
            Version 2.0
          </p>
        </div>

        <div className="bg-gray-100 border border-gray-200 flex row-span-2 col-span-2 rounded-lg w-80 h-3/6 shadow-lg ...">
          <div className="bg-sky-500 rounded-lg">
            <img src={Setting} alt="" className="h-full w-full px-2 py-2" />
          </div>
          <div className="w-full px-2 py-2">
            <h3 className="text-lg uppercase mb-3">cpu traffic</h3>
            <strong className="text-xl">90%</strong>
          </div>
        </div>

        <div className="bg-gray-100 border border-gray-200  flex row-span-2 col-span-2 rounded-lg w-80 h-3/6 shadow-lg ...">
          <div className="bg-red-500 rounded-lg">
            <img src={Google} alt="" className="h-full w-32 px-2 py-2" />
          </div>
          <div className="w-full px-2 py-2">
            <h3 className="text-lg uppercase mb-3">likes</h3>
            <strong className="text-xl">41,410</strong>
          </div>
        </div>

        <div className="bg-gray-100 border border-gray-200  flex row-span-2 col-span-2 rounded-lg w-80 h-3/6 shadow-lg ...">
          <div className="bg-green-500 rounded-lg">
            <img src={Shop} alt="" className="h-full w-32 px-2 py-2" />
          </div>
          <div className="w-full px-2 py-2">
            <h3 className="text-lg uppercase mb-3">sales</h3>
            <strong className="text-xl">760</strong>
          </div>
        </div>

        <div className="bg-gray-100 border border-gray-200  flex row-span-2 col-span-2 rounded-lg w-80 h-3/6 shadow-lg ...">
          <div className="bg-orange-500 rounded-lg">
            <img src={Member} alt="" className="h-full w-32 px-2 py-2" />
          </div>
          <div className="w-full px-2 py-2">
            <h3 className="text-lg uppercase mb-3">new members</h3>
            <strong className="text-xl">2,000</strong>
          </div>
        </div>

        <div className="flex row-span-2 w-15 h-10 items-center justify-center mt-20 ...">
          <strong className="text-sm uppercase mb-3">Home - Dashboard</strong>
        </div>
      </div>
    </>
  );
}
