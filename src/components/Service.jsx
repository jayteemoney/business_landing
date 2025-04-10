import { features } from '../others';
import Button from '../others/Button';

export default function Service() {
  return (
    <section className="bg-[#00040F] text-white px-6 md:px-16 py-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug">
            You do the business, <br />
            we'll handle the money.
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-md">
            With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market...
          </p>
          <Button/>
        </div>

        {/* Right side - Features */}
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 bg-gradient-to-r from-[#1c1c1c] to-[#535353] bg-opacity-60 p-4 rounded-lg shadow-md"
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