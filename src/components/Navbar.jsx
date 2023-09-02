import { Coffee, Github } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar px-[20px] lg:px-[200px]">
      <div className="navbar-start">
        <a href="https://ko-fi.com/Eskey" target="_blank">
        <button className="btn flex items-center">
            <span><Coffee /></span>
            <span className="hidden md:inline">Buy me a Coffee</span>
        </button>
        </a>
      </div>
      <div className="navbar-end">
        <a href="https://github.com/Eskeyz/loadstring-generator">
            <button className="btn btn-ghost btn-circle">
                <Github />
            </button>
        </a>
      </div>
    </div>  
  );
};

export default Navbar;
