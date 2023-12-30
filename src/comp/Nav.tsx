import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav className="w-[85%] items-center  mx-auto h-[10vh] flex justify-between">
      <div className="logo">
        <img src="" alt="" />
        <h1 className=" text-normal">Wizzy</h1>
      </div> 
      <ul className="flex gap-3 ">
        <li className="   text-small sm:text-normal transition-all cursor-pointer hover:border-b border-secondary-500">
        Features
        </li>
        <li className="  text-small sm:text-normal transition-all cursor-pointer hover:border-b border-secondary-500">
          About
        </li>
      </ul>
      <Link className="text-sm md:text-base px-7 py-2 bg-secondary-500 rounded-[20px] text-white center" to=''>Get The App</Link>

    </nav>
  )
}

export default Nav