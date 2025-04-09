// components/CardDealSection.jsx
export default function Card() {
  return (
    <section className="bg-[#0f0c29] text-white px-6 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug">
            Find a better card deal <br />
            in a few easy steps.
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-md">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>

          <button className="px-6 py-3 rounded-md bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition">
            Get Started
          </button>
        </div>

        {/* Right Card UI */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/images/card-deal-ui.png" // Replace with the actual image from your Figma export
            alt="Card deal interface"
            className="w-full max-w-lg rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
