// components/TestimonialsSection.jsx
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    text: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    avatar: "/images/user1.png",
  },
  {
    text: "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "CEO, FinTrack",
    avatar: "/images/user2.png",
  },
  {
    text: "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "CTO, MoneyFlow",
    avatar: "/images/user3.png",
  },
];

export default function Testimonial() {
  return (
    <section className="bg-[#0f0c29] text-white px-6 py-16 lg:py-24">
      {/* Intro Section - matches Figma */}
      <div className="max-w-6xl mx-auto mb-16 flex flex-col lg:flex-row justify-between items-start gap-6">
        {/* Left - Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold lg:max-w-md">
          What people are saying <br /> about us
        </h2>

        {/* Right - Description */}
        <p className="text-gray-400 text-base sm:text-lg lg:max-w-xl">
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-[#1c1a2e] p-6 rounded-xl shadow-md hover:shadow-lg transition"
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
    </section>
  );
}
