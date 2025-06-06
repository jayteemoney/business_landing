import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { bill } from '../assets';
import { gradientBilling } from '../others/stlyles';

export default function Billing() {
  return (
    <section className="bg-[#00040F] text-white px-6 md:px-16 py-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Image with Gradient */}
        <div className="relative flex justify-center lg:justify-start">
          {/* Reusable Gradient Style */}
          <div 
            className="absolute -left-40 -top-20 w-[600px] h-[600px] pointer-events-none"
            style={gradientBilling}
          />
          
          {/* Image Container */}
          <div className="relative z-10">
            <img
              src={bill} 
              alt="Billing and invoicing interface"
              className="w-full max-w-lg rounded-xl shadow-2xl"
            />
          </div>
        </div>

        {/* Right Text */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug">
            Easily control your <br />
            billing & invoicing.
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-md">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
          </p>

          <div className="flex items-center space-x-4 mt-4">
            <button className="flex items-center gap-2 bg-black hover:bg-gray-700 px-4 py-2 rounded-lg transition">
              <FaApple className="text-xl" />
              <span className="text-sm">App Store</span>
            </button>
            <button className="flex items-center gap-2 bg-black hover:bg-gray-700 px-4 py-2 rounded-lg transition">
              <FaGooglePlay className="text-xl" />
              <span className="text-sm">Google Play</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
