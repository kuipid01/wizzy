import * as Yup from 'yup';

import  { useRef, useState } from "react";
import { motion } from "framer-motion"
import { useFormik } from 'formik';
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
const Signup = () => {
    interface MyFormValues {
        username: string;
        password1:string;
        email:string,
      }
      const formik = useFormik<MyFormValues>({
        initialValues: {
          username: '',
          password1: '',
          email: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
              .min(4, 'Must be more than 3 characters')
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
              password1: Yup.string()
              .min(8,'Must be more than 8 characters')
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
          }),
        onSubmit: (values) => {
          // Add your logic here for handling the form submission
          console.log('Form submitted with values:', values);
        },
      });
  const registerForm = useRef(null)
  
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const navigate = useNavigate();
  const textAnim = {
    initial: {
      opacity: 0,
        rotateZ:"-5deg"
    },
    animate: {
        rotateZ:"0deg",
      opacity: 1,
    },
  };
//   const handleSubmit = (e:React.FormEvent) => {
//     e.preventDefault()

// }

  return (
    <div className="w-full relative rounded-r-3xl bg-secondary-500   flex h-screen">
           <AiOutlineArrowLeft  onClick={() => navigate(-1)} className="absolute cursor-pointer z-30 text-2xl text-gray-700 md:text-gray-50  left-5 top-5" />
      <div className="hidden md:flex w-1/3 relative h-full text-white p-4 ">
        <motion.h1
          variants={textAnim}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1,
            type: "linear",
          }}
          className=" mt-[50px] text-3xl"
        >
         You make good financial decisions  with <br />  {" "}
          <span className=" text-4xl uppercase text-purple-500 font-extrabold">
            Wizzy
          </span>{" "}
          
        </motion.h1>
        <motion.img
          variants={textAnim}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1,
            type: "linear",
          }}
          className=" absolute top-[20%] -right-[30%] rotate-12"
          src="/register.png"
          alt=""
        />
      </div>
      <div className="flex flex-col h-full justify-center items-center  bg-white shadow-lg flex-1  md:rounded-l-3xl">
        <div className="md:w-[70%] w-[90%] gap-4  flex flex-col h-full justify-center items-start ">
          <h1 className=" font-bold">Create Account</h1>
          <div className=" w-full flex gap-3">
            <div  className=" font-light cursor-pointer border p-1 xl:p-2 flex gap-3 items-center flex-1">
              <img src="/go.png" alt="" />
              <span className=" text-[12px]  xl:text-normal capitalize">
                Sign Up with google
              </span>
            </div>
            <div className=" font-light  cursor-pointer border p-1 xl:p-2 flex gap-3 items-center flex-1">
              <img src="/face.png" alt="" />
              <span className=' text-[11px]  xl:text-normal capitalize'>
                {" "}
                Sign Up with facebook
              </span>
            </div>
          </div>
          <form ref={registerForm} onSubmit={formik.handleSubmit} className=" w-full flex flex-col gap-4">
            <motion.input
              variants={textAnim}
              initial="initial"
              animate="animate"
              transition={{
                duration: 1,
                type: "linear",
              }}
              type="text"
              id="username"
              className="w-full outline-none border-b border-gray-400 py-3"
              placeholder="Username"
              {...formik.getFieldProps('username')}
            />
              {formik.touched.username && formik.errors.username ? (
         <div>{formik.errors.username}</div>
       ) : null}
            <motion.input
              variants={textAnim}
              initial="initial"
              animate="animate"
              transition={{
                duration: 1,
                type: "linear",
              }}
              id="email" type="email"
              {...formik.getFieldProps('email')}
              className="w-full outline-none border-b border-gray-400 py-3"
              placeholder="Email"
           
            />
               {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            <div className="relative ">
            <motion.input
              variants={textAnim}
              initial="initial"
              animate="animate"
              transition={{
                duration: 1,
                type: "linear",
              }}
              id="password1"
             
              {...formik.getFieldProps('password1')} 
              type={showPassword ? "text" : "password"}
              className="w-full outline-none border-b border-gray-400 py-3"
              placeholder="Password"
            /> 
              <div
                onClick={handleTogglePasswordVisibility}
                className="absolute  w-fit h-[20px] cursor-pointer top-1/2 -translate-y-1/2  right-2 flex items-center focus:outline-none"
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </div>
            </div>
            {formik.touched.password1 && formik.errors.password1 ? (
         <div>{formik.errors.password1}</div>
       ) : null}
            <div className="relative ">
            <motion.input
              variants={textAnim}
              initial="initial"
              animate="animate"
              transition={{
                duration: 1,
                type: "linear",
              }}
              name="password2" 
              type={showPassword ? "text" : "password"}
              className="w-full outline-none border-b border-gray-400 py-3"
              placeholder="Confirm password"
            /> 
              <div
               
                className="absolute  w-fit h-[20px] cursor-pointer top-1/2 -translate-y-1/2  right-2 flex items-center focus:outline-none"
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </div>
            </div>
            <button
              type="submit"
              className="bg-secondary-500 rounded-md text-white w-full py-3"
            >
              Create Account
            </button>
          </form>
          <p className=" flex gap-3">
            Already have an account?{" "}
            <Link className="text-secondary-500" to="/login">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;