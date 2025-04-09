import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="/" className="flex items-center space-x-2">
        <img
          src="/src/assets/logo.png"
          alt="NeoBank logo"
          className="h-8 sm:h-10"
        />
        <span className="text-2xl sm:text-3xl font-bold">
          Hoo<span className="text-blue-400">Bank</span>
        </span>
      </Link>
    </div>
  );
};

export default Logo;
