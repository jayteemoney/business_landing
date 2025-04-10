import React from "react";

const Button = () => {
  return (
    <div>
      <button
        className="px-6 py-3 rounded-md font-semibold transition-all duration-300
            bg-[radial-gradient(circle,_#33BBCF,_#DEF9FA)]
            hover:bg-[radial-gradient(circle,_#33BBCF,_#DEF9FA)] 
            hover:scale-105 hover:shadow-[0_0_15px_rgba(94,225,230,0.7)]
           text-black"
      >
        Get Started
      </button>
    </div>
  );
};

export default Button;
