import React from "react";
import Nav from "./Nav";
import { MdOutlineRecycling } from "react-icons/md";
import { Link } from "react-router-dom";
import { CiPlay1 } from "react-icons/ci";
const LandingPage: React.FC = () => {
  const ContainerStyle: React.CSSProperties = {
    background:
      "linear-gradient(180deg, rgba(212, 163, 115, 0.51) 36.12%, rgba(221, 207, 146, 0.21) 69.15%)",
  };
  const BoxStyle: React.CSSProperties = {
    background:
      "linear-gradient(180deg, rgba(212, 163, 115, 0.70) 36.12%, rgba(221, 207, 146, 0.76) 69.15%)",
  };
  return (
    <div style={ContainerStyle} className="w-full min-h-screen flex flex-col">
      <Nav />
      <section className=" w-[85%] mx-auto flex-1">
        <div className="w-[40%] h-screen flex items-start justify-center flex-col">
          <div className="flex mb-5 gap-3 items-center">
            <img src="/cup.svg" className=" object-cover h-[50px]" alt="" />
            <span className=" w-[50px] border border-black h-[50px] rounded-full center">
              {" "}
              <CiPlay1 />{" "}
            </span>{" "}
            <span className=" text-normal">
              {" "}
              Checkout Our 21 Days Free Trial{" "}
            </span>
          </div>
          <p className=" text-xxlg leading-[100%] "> Financial </p>
          <p className=" text-xxlg leading-[100%] font-bold "> Management </p>
          <p className=" text-xxlg leading-[100%] font-bold "> System </p>
          <div className="flex w-full gap-3">
            <Link
              className="text-sm mt-5 md:text-base flex-1 h-[50px] bg-secondary-500 rounded-[20px] text-white center"
              to=""
            >
              Sign Up
            </Link>
            <Link
              className="text-sm gap-3 mt-5 md:text-base flex-1 h-[50px] bg-transparent border text-black border-secondary-500 rounded-[20px]  center"
              to=""
            >
              {" "}
              <span className=" w-[40px] border border-secondary-500 h-[40px] rounded-full center">
                {" "}
                <CiPlay1 />{" "}
              </span>{" "}
              See Demo
            </Link>
          </div>
          <div className=" relative">
          <div style={BoxStyle} className=" z-30 relative mt-[60px] capitalize w-[250px] flex flex-col min-h-[100px] center h-fit gap-3 rounded-[20px]">
            <h1 className=" text-normal font-bold">Two Hundred + </h1>
            <small className=" text-[15px]">users every month</small>
           
          </div>
          <div className=" absolute justify-evenly flex shadow-lg items-center -bottom-[30%] bg-white w-[200px] left-1/2 -translate-x-1/2 rounded-b-[20px] h-[50px]">
          <MdOutlineRecycling className='text-[20px]' />
          <img src="/wavey.svg" alt="" />
</div>
          </div>
         
        </div>
        <div className="right"></div>
      </section>
    </div>
  );
};

export default LandingPage;
