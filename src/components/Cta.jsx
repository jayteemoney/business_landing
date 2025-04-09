// components/CTASection.jsx
export default function Cta() {
  return (
    <section className="bg-[#0f0c29] px-6 py-16">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600 rounded-2xl px-8 py-12 sm:px-12 sm:py-16 text-white shadow-xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">
              Let us try our service now!
            </h2>
            <p className="text-white/80 text-sm sm:text-base max-w-md">
              Everything you need to accept card payments and grow your business anywhere on the planet.
            </p>
          </div>

          {/* Button */}
          <button className="px-6 py-3 mt-4 lg:mt-0 bg-black text-white rounded-md font-semibold hover:bg-gray-800 transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
