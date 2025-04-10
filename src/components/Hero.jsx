// components/HeroSection.jsx
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#00040F]  text-white pt-24 pb-32 px-6 md:px-16 py-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div className="flex flex-col space-y-6 relative">
          {/*  Discount Badge */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-[#1c1c1c] to-[#2a2a2a] bg-opacity-60 px-4 py-2 rounded-full w-max shadow-sm backdrop-blur-md">
            {/* Icon */}
            <div className="w-6 h-6 rounded-full bg-[#121212] flex items-center justify-center">
              <span className="text-green-400 text-sm font-bold">%</span>
            </div>
            {/* Gradient Text */}
            <p className="text-sm font-medium bg-gradient-to-r from-[#F2C94C] to-[#F2994A] text-transparent bg-clip-text">
              20% DISCOUNT FOR <span className="font-bold">1 MONTH</span> ACCOUNT
            </p>
          </div>

          {/* Headline + Button */}
          <div className="flex items-start gap-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              The Next <span className="text-green-400">Generation</span><br />
              Payment Method<span className="text-green-400">.</span>
            </h1>

            {/* Get Started Button */}
            <button className="shrink-0 border-2 border-green-400 text-green-400 rounded-full w-20 h-20 flex flex-col items-center justify-center text-xs font-medium hover:bg-green-400 hover:text-black transition text-center">
              Get <br /> Started
              <ArrowRight className="w-4 h-4 mt-1" />
            </button>
          </div>

          {/* Paragraph */}
          <p className="text-gray-300 max-w-lg text-base sm:text-lg">
            Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
          </p>
        </div>

        {/* Right Visual */}
        <div className="relative flex justify-center lg:justify-end">
          <img
            src="/images/hero-visual.png"
            alt="3D Cards and Robotic Hand"
            className="w-full max-w-md md:max-w-lg drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
