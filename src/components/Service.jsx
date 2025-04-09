// components/ServiceHighlight.jsx
import { FaStar, FaShieldAlt, FaPaperPlane } from 'react-icons/fa';

export default function Service() {
  const features = [
    {
      icon: <FaStar className="text-cyan-400 text-xl" />,
      title: "Rewards",
      desc: "The best credit cards offer some tantalizing combinations of promotions and prizes.",
    },
    {
      icon: <FaShieldAlt className="text-cyan-400 text-xl" />,
      title: "100% Secured",
      desc: "We take proactive steps to make sure your information and transactions are secure.",
    },
    {
      icon: <FaPaperPlane className="text-cyan-400 text-xl" />,
      title: "Balance Transfer",
      desc: "A balance transfer credit card can save you a lot of money in interest charges.",
    },
  ];

  return (
    <section className="bg-[#0f0c29] text-white px-6 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug">
            You do the business, <br />
            we’ll handle the money.
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-md">
            With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market...
          </p>
          <button className="px-6 py-3 rounded-md bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition">
            Get Started
          </button>
        </div>

        {/* Right side - Features */}
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 bg-[#1c1a2e] p-4 rounded-lg shadow-md"
            >
              <div className="mt-1">{feature.icon}</div>
              <div>
                <h4 className="font-semibold text-white">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
