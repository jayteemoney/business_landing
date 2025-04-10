import Button from "../others/Button";

// components/CTASection.jsx
export default function Cta() {
  return (
    <section className="bg-[#00040F]  px-6 md:px-16 py-4">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#1c1c1c] to-[#535353] bg-opacity-60 rounded-2xl px-8 py-12 sm:px-12 sm:py-16 text-white shadow-xl">
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
          <Button/>
        </div>
      </div>
    </section>
  );
}
