// components/BillingSection.jsx
import { FaApple, FaGooglePlay } from 'react-icons/fa';

export default function Billing() {
  return (
    <section className="bg-[#0f0c29] text-white px-6 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="flex justify-center lg:justify-start">
          <img
            src="/images/billing-ui.png" // replace with your actual path
            alt="Billing and invoicing interface"
            className="w-full max-w-lg rounded-xl shadow-2xl"
          />
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

          {/* Store Buttons */}
          <div className="flex items-center space-x-4 mt-4">
            <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition">
              <FaApple className="text-xl" />
              <span className="text-sm">App Store</span>
            </button>

            <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition">
              <FaGooglePlay className="text-xl" />
              <span className="text-sm">Google Play</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
