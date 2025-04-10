import { FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "../others";

export default function Testimonial() {
  return (
    <section className="relative bg-[#00040F] text-white px-6 md:px-16 py-4 overflow-hidden">
      {/* Gradient Background Element - Matches Hero section */}
      <div 
        className="absolute -right-40 -top-20 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, #1c1c1c 0%, #00040F00 70%)',
          mixBlendMode: 'screen',
          opacity: '0.6'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Intro Section */}
        <div className="max-w-6xl mx-auto mb-16 flex flex-col lg:flex-row justify-between items-start gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold lg:max-w-md">
            What people are saying <br /> about us
          </h2>
          <p className="text-gray-400 text-base sm:text-lg lg:max-w-xl">
            Everything you need to accept card payments and grow your business anywhere on the planet.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="hover:bg-gradient-to-r from-[#1c1c1c] to-[#535353] bg-opacity-60 p-6 rounded-xl shadow-md hover:shadow-lg transition backdrop-blur-sm"
            >
              <FaQuoteLeft className="text-cyan-400 text-2xl mb-4" />
              <p className="text-gray-300 text-sm mb-6">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-white text-sm">
                    {item.name}
                  </h4>
                  <p className="text-gray-500 text-xs">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}