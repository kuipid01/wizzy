import { IoIosMenu } from "react-icons/io";
import { FaHome, FaLaptopHouse, FaRegBell } from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";
import { BsCashStack } from "react-icons/bs";
import { CiBank } from "react-icons/ci";
const Mobile = () => {
  let day = true;
  let month = false;
  return (
    <div className=" flex  flex-col h-screen lg:hidden  w-full">
      <div className="p-5 flex h-fit justify-between  w-full items-center ">
        <IoIosMenu className="    cursor-pointer  text-lg" />
        <img
          src="/img.png"
          className="w-10 h-10 rounded-full object-cover "
          alt=""
        />
      </div>

      <div className=" p-5 my-5">
        <p className=" text-gray-500 capitalize">My budget</p>
        <h1 className="font-bold text-lg">$40000.000099</h1>
      </div>

      <div className=" relative text-black px-10 scrollbar-thumb-gray-400 overflow-hidden overflow-y-scroll h-[70vh] rounded-t-[45px] w-full bg-white">
        <div className=" w-full sticky z-30 top-0 h-[10vh] bg-white"></div>

        <div className="flex bg-gray-200 z-30 sticky w-full   top-[5%]  rounded-[100px]">
          <div
            className={`flex-1 cursor-pointer flex justify-center items-center h-[60px] rounded-[100px] ${
              day ? "bg-black text-white" : "bg-transparent text-black"
            }`}
          >
            <h1 className=" font-bold">Today</h1>
          </div>
          <div
            className={`flex justify-center items-center flex-1 cursor-pointer h-[60px] rounded-[100px] ${
              month ? "bg-black text-white" : "bg-transparent text-black"
            }`}
          >
            <h1 className=" font-bold">Month</h1>
          </div>
        </div>
        <div className=" relative mt-5">
          <div className="flex  text-normal justify-between items-center">
            <p className=" font-bold">18 May 2024</p>
            <p className=" font-extrabold text-secondary-100">$4000</p>
          </div>
          <div className=" mt-5 flex flex-col gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <div className=" flex items-center justify-between" key={item}>
                <div className=" flex items-center gap-3">
                  <div className=" rounded-md overflow-hidden bg-secondary-100 w-12 h-1/2 object-cover">
                    <img
                      src="/img.png"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <h1 className=" font-bold text-normal">Electricity</h1>
                </div>
                <h1 className="font-extrabold text-secondary-100">#300</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="fixed flex text-normal justify-evenly items-center rounded-t-[45px] bottom-0 w-full p-5 h-[10vh] bg-secondary-500">
        <FaHome className="cursor-pointer" />{" "}
        <FaRegBell className="cursor-pointer" />
        <BiSolidReport className="cursor-pointer" />
        <BsCashStack className="cursor-pointer" />
        <CiBank className="cursor-pointer" />
        <FaLaptopHouse className="  cursor-pointer" />
      </div>
    </div>
  );
};

export default Mobile;
