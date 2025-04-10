// components/HeroSection.jsx
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#00040F] text-white pt-24 pb-32 px-6 md:px-16 py-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div className="flex flex-col space-y-6 relative">
          {/* Discount Badge */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-[#1c1c1c] to-[#535353] bg-opacity-60 px-4 py-2 rounded-full w-max shadow-sm backdrop-blur-md">
            <div className="w-6 h-6 rounded-full bg-[#121212] flex items-center justify-center">
              <span className="ml-1 bg-[radial-gradient(circle,_#33BBCF,_#DEF9FA)] bg-clip-text text-transparent text-sm font-bold">%</span>
            </div>
            <p className="text-sm font-medium ml-1 bg-[radial-gradient(circle,_#33BBCF,_#DEF9FA)] bg-clip-text text-transparent">
              20% DISCOUNT FOR <span className="font-bold">1 MONTH</span> ACCOUNT
            </p>
          </div>

          {/* Headline + Button */}
          <div className="flex items-start gap-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              The Next{" "}
              <span className="ml-1 bg-[radial-gradient(circle,_#33BBCF,_#DEF9FA)] bg-clip-text text-transparent">
                Generation
              </span>
              <br />
              Payment Method
              <span className="ml-1 bg-[radial-gradient(circle,_#33BBCF,_#DEF9FA)] bg-clip-text text-transparent">
                .
              </span>
            </h1>

            {/* Get Started Button with Gradient Border Only */}
            <div className="shrink-0 rounded-full p-[2px] bg-[radial-gradient(circle,_#33BBCF,_#DEF9FA)]">
              <button className="w-20 h-20 rounded-full bg-[#00040F] text-white flex flex-col items-center justify-center text-xs font-medium hover:scale-105 transition">
                Get <br /> Started
                <ArrowRight className="w-4 h-4 mt-1" />
              </button>
            </div>
          </div>

          {/* Paragraph */}
          <p className="text-gray-300 max-w-lg text-base sm:text-lg">
            Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
          </p>
        </div>

        {/* Right Visual */}
        <div className="relative flex justify-center lg:justify-end">
          <img
            src="/src/assets/robot.png"
            alt="3D Cards and Robotic Hand"
            className="w-full max-w-md md:max-w-lg drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
