import React from "react";
import Nav from "./Nav";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineRecycling } from "react-icons/md";
import { Link } from "react-router-dom";
import { CiPlay1 } from "react-icons/ci";
import { IoAnalytics } from "react-icons/io5";
import {motion} from 'framer-motion'
import { SiGoogleanalytics } from "react-icons/si";
const LandingPage: React.FC = () => {
  const ContainerStyle: React.CSSProperties = {
    background:
      "linear-gradient(180deg, rgba(212, 163, 115, 0.51) 36.12%, rgba(221, 207, 146, 0.21) 69.15%)",
  };
  const BoxStyle: React.CSSProperties = {
    background:
      "linear-gradient(180deg, rgba(212, 163, 115, 0.70) 36.12%, rgba(221, 207, 146, 0.76) 69.15%)",
  };
  const textOpacity = {
    initial:{
      opacity:0,
      translateY:-10,
    },
    animate:{
      opacity:1,
      translateY:0,
      transition:{
        duration:.5,
        easing:"Linear"
      }
    }
  }
  return (
    <div style={ContainerStyle} className="w-full min-h-screen flex flex-col">
      <Nav />
      <section className=" w-[85%] flex flex-col lg:flex-row h-fit mx-auto flex-1">
        <div className=" w-full lg:w-[40%] h-[60vh] lg:h-[110vh] flex items-start justify-center flex-col">
          <div className="flex mb-5 gap-3 items-center">
            <img src="/cup.svg" className=" object-cover h-[30px] md:h-[50px]" alt="" />
            <span className=" w-[30px] md:w-[50px] border border-black h-[30px] md:h-[50px] rounded-full center">
              {" "}
              <CiPlay1 className='text-sm md:text-lg' />{" "}
            </span>{" "}
            <span className=" text-normal">
              {" "}
              Checkout Our 21 Days Free Trial{" "}
            </span>
          </div>
          <motion.p variants={textOpacity} initial='initial' animate='animate' transition={{ delay:0}} className=" text-xlg md:text-xxlg leading-[100%] "> Financial </motion.p>
          <motion.p variants={textOpacity} initial='initial' animate='animate'  transition={{ delay:0.2}} className=" text-xlg md:text-xxlg leading-[100%] font-bold "> Management </motion.p>
          <motion.p variants={textOpacity} initial='initial' animate='animate'  transition={{ delay:0.4}} className="text-xlg md:text-xxlg leading-[100%] font-bold "> System </motion.p>
          <motion.div initial={{ opacity:0 ,rotateZ:'3deg'}} animate={{opacity:1,rotateZ:'0deg'}} transition={{duration:.5, delay:.6}} className="flex w-full gap-3">
            <Link
              className="text-sm mt-5 md:text-base flex-1 h-[50px] bg-secondary-500 rounded-[20px] text-white center"
              to="/register"
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
          </motion.div>
          <div className="hidden lg:flex relative">
            <div
              style={BoxStyle}
              className="  z-30 relative mt-[60px] capitalize w-[250px]  flex-col min-h-[100px] center h-fit gap-3 rounded-[20px]"
            >
              <h1 className=" text-normal font-bold">Two Hundred + </h1>
              <small className=" text-[15px]">users every month</small>
            </div>
            <div className=" absolute justify-evenly flex shadow-lg items-center -bottom-[30%] bg-white w-[200px] left-1/2 -translate-x-1/2 rounded-b-[20px] h-[50px]">
              <MdOutlineRecycling className="text-[20px]" />
              <img src="/wavey.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[60%]   relative h-[60vh] mt-3 lg:h-[110vh] flex items-end justify-center flex-col">
          <div
            style={BoxStyle}
            className="hidden lg:flex absolute flex-col center top-[10rem] left-[27%]  w-[150px] h-[150px] rounded-[20px] "
          >
            {" "}
            <motion.img initial={{ opacity:0 ,rotateZ:'3deg'}} animate={{opacity:1,rotateZ:'0deg'}} transition={{duration:.5, delay:.7}}  className="hidden lg:flex  w-[40%] object-contain" src="/rig.svg" alt="" />
            <p className="hidden lg:flex font-bold mt-6 text-sm w-[96%] capitalize text-center">
              {" "}
              We help you track your finances
            </p>
          </div>
          <div className=" center  w-full lg:w-auto relative lg:h-[70%] mb-5">
            <img
              src="/hanger.svg"
              className="hidden lg:flex object-cover bottom-0 absolute -translate-x-1/2 left-[50%] "
              alt=""
            />
            <div className="w-[350px] relative h-[350px] ">
              <motion.img initial={{ opacity:0 ,scale:.3,rotateZ:'3deg'}} animate={{opacity:1, scale:1,rotateZ:'0deg'}} transition={{duration:.6, delay:.7,  ease: [0.17, 0.67, 0.83, 0.67]}}
                className=" w-full  h-full object-cover"
                src="/img.png"
                alt=""
              />
              <div className=" md:w-[80px] h-[50px] w-[50px] md:h-[80px] rounded-full bg-secondary-500 text-white center absolute -top-3 md:-top-10 -left-6">
                <FaArrowRight className="text-[30px]  font-light rotate-[50deg] " />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-auto center   flex gap-3">
            <motion.div variants={textOpacity} initial='initial' animate='animate' transition={{ delay:8}} className=" flex flex-col h-[100px] justify-between border-t py-2 border-black-100/60 w-[250px] gap-3">
              <div className=" flex items-center gap-3">
                <div className=" center w-[40px] rounded-full border-black h-[40px] bg-transparent border ">
                  <IoAnalytics />
                </div>
                <p>Analysis</p>
              </div>
              <p className=" text-gray-700 font-bold">Get detailed financial analysis at each month end</p>
            </motion.div>
            <motion.div variants={textOpacity} initial='initial' animate='animate' transition={{ delay:9}} className=" flex flex-col h-[100px] justify-between border-t py-2 border-black-100/60 w-[250px]  gap-3">
              <div className=" flex items-center gap-3">
                <div className=" center w-[40px] rounded-full border-black h-[40px] bg-transparent border ">
                <SiGoogleanalytics />
                </div>
                <p>Price</p>
              </div>
              <p className=" text-gray-700 font-bold">You use it absolutely for free</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
