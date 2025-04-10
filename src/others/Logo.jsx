import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";

const Logo = () => {
  return (
    <div>
      <Link to="/" className="flex items-center space-x-2">
        <img
          src={logo}
          alt="NeoBank logo"
          className="h-8 sm:h-10"
        />
        <span className="text-2xl sm:text-3xl font-bold flex items-center">
          Hoo
          <span className="ml-1 bg-[radial-gradient(circle,_#33BBCF,_#DEF9FA)] bg-clip-text text-transparent">
            Bank
          </span>
        </span>
      </Link>
    </div>
  );
};

export default Logo;
