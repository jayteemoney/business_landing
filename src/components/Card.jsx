import { card } from "../assets";
import Button from "../others/Button";

// components/CardDealSection.jsx
export default function Card() {
  return (
    <section className="bg-[#00040F]  text-white px-6 md:px-16 py-4">
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
          <Button/>
        </div>

        {/* Right Card UI */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={card} 
            alt="Card deal interface"
            className="w-full max-w-lg rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
