import { MdBorderAll } from "react-icons/md";
import { CiTimer } from "react-icons/ci";
import { CgAlignTop } from "react-icons/cg";
import { BiSolidReport } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";
import { BsCashStack } from "react-icons/bs";
import { FaCreditCard } from "react-icons/fa";
import { CiBank } from "react-icons/ci";
import { FaLaptopHouse } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";
// import Card from "../comp/Card";
import { IoIosMenu } from "react-icons/io";
import Alltransactions from "../comp/Alltransactions";
import BarChart from "../comp/Bar";
import { FiActivity } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, DayValue } from "react-modern-calendar-datepicker";
import { useState } from "react";
const Dashboard = () => {
  const [selectedDay, setSelectedDay] = useState<DayValue | null>(null);
  return (
    <div className="bg-primary-500/60 overflow-hidden overflow-y-scrolls relative text-white  w-full  h-fit flex  ">
      <div className="hidden sticky top-0 h-screen md:flex py-10 shadow-2xl bg-white text-black rounded-r-[15px] flex-col justify-between px-4 left sm:w-[30%] md:w-[20%]">
        <ul className=" flex flex-col gap-5">
          <li
            className={`  cursor-pointer hover:text-secondary-500 transition-all   text-[20px]   flex items-center gap-3`}
          >
            {" "}
            <MdBorderAll className="text-xl text-secondary-500" /> Overview
          </li>
          <li className="    cursor-pointer hover:text-secondary-500 transition-all  flex items-center gap-3">
            {" "}
            <CiTimer className="text-xl text-secondary-500" /> Scheduler{" "}
          </li>
          <li className="    cursor-pointer hover:text-secondary-500 transition-all  flex items-center gap-3">
            <CgAlignTop className="text-xl text-secondary-500" /> Budget{" "}
          </li>
          <li className="    cursor-pointer hover:text-secondary-500 transition-all  flex items-center gap-3">
            {" "}
            <BiSolidReport className="text-xl text-secondary-500" /> Reports{" "}
          </li>
        </ul>
        <div className=" flex flex-col gap-5">
          <p className=" text-normal font-bold text-secondary-500">Accounts</p>
          <ul className=" flex flex-col gap-3">
            <li className="    cursor-pointer hover:text-secondary-500  flex items-center gap-3">
              {" "}
              <FaWallet className="text-xl text-secondary-500" /> All
              Transactions
            </li>
            <li className="    cursor-pointer hover:text-secondary-500  flex items-center gap-3">
              {" "}
              <BsCashStack className="text-xl text-secondary-500" /> Cash{" "}
            </li>
            <li className="    cursor-pointer hover:text-secondary-500 transition-all  flex items-center gap-3">
              <FaCreditCard className="text-xl text-secondary-500" /> Credit
              Card{" "}
            </li>
            <li className="    cursor-pointer hover:text-secondary-500 transition-all  flex items-center gap-3">
              {" "}
              <CiBank className="text-xl text-secondary-500" /> Loan{" "}
            </li>
            <li className="    cursor-pointer hover:text-secondary-500 transition-all  flex items-center gap-3">
              {" "}
              <FaLaptopHouse className="text-xl text-secondary-500" /> Assets{" "}
            </li>
            <li className="    cursor-pointer hover:text-secondary-500 transition-all  flex items-center gap-3">
              {" "}
              <FcMoneyTransfer className="text-xl text-secondary-500" />{" "}
              Investments{" "}
            </li>
          </ul>
        </div>
      </div>
      <IoIosMenu className="absolute cursor-pointer mb-3 top-2 left-2 text-lg" />
      <div
        className={`mt-6 h-fit flex-1 px-5 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6`}
      >
        <div className="bg-white h-[250px]  rounded-[20px]  border-white">
          <Alltransactions />
        </div>
        <div
          data-simplebar
          className="gap-7 bg-white scrollbar-thumb-gray-400 overflow-hidden overflow-y-scroll  flex flex-col   h-[250px] rounded-[20px]  border-white"
        >
          <div className=" text-black px-2 mt-2 rounded-t-[20px]  shadow-sm py-3 flex sticky top-0 bg-white  items-center justify-between">
            <h1 className=" font-bold text-[20px]">Visualizations</h1>
            <FiActivity className="font-extralight text-gray-500 text-normal" />
          </div>
          <BarChart titleOfText="Expenses vs Income" />
          <BarChart titleOfText="Expenses vs income" />
          <BarChart titleOfText="Expenses vs income" />
          <BarChart titleOfText="Expenses vs income" />
        </div>
        <div className=" overflow-hidden bg-white relative h-[250px]  flex flex-col justify-evenly  rounded-[20px]  border-white">
          <div className="text-black px-2 md:mt-2 rounded-t-[20px]  shadow-sm md:py-3 flex top-0 bg-white  items-center justify-between">
            <h1 className=" font-bold text-[20px]">Cards</h1>
            <FaPlus className="font-extralight text-gray-500 text-normal" />
          </div>
          <img src="/card.png" className=" h-[200px] object-contain" alt="" />
        </div>
        <div className="bg-white  rounded-[20px]  border-white">
          <div className="text-black px-2 mt-2 rounded-t-[20px]  shadow-sm py-3 flex top-0 bg-white  items-center justify-between">
            <h1 className=" font-bold text-[20px]">Scheduler</h1>
            <FaPlus className="font-extralight text-gray-500 text-normal" />
          </div>
          <Calendar
            value={selectedDay}
            onChange={setSelectedDay}
            shouldHighlightWeekends
          />
        </div>
        <div className="bg-white  rounded-[20px]  border-white">
          <div className="text-black px-2 mt-2 rounded-t-[20px]  shadow-sm py-3 flex top-0 bg-white  items-center justify-between">
            <h1 className=" font-bold text-[20px]">Scheduler</h1>
            <FaPlus className="font-extralight text-gray-500 text-normal" />
          </div>
          <Calendar
            value={selectedDay}
            onChange={setSelectedDay}
            shouldHighlightWeekends
          />
        </div>
        <div className="bg-white h-[250px] rounded-[20px]  border-white"></div>
      </div>
    </div>
  );
};

export default Dashboard;
