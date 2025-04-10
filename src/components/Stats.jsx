// components/StatsSection.jsx
import { stats } from "../others";
export default function StatsSection() {
  return (
    <section className="bg-[#00040F]  text-white px-6 md:px-16 py-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-6 sm:gap-0">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center">
            {/* Stat value and label side by side */}
            <div className="flex items-baseline gap-2 text-center sm:text-left">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                {stat.value}
              </span>
              <span className=" ml-1 bg-[radial-gradient(circle,_#33BBCF,_#DEF9FA)] bg-clip-text text-transparent text-sm sm:text-base md:text-lg  uppercase tracking-wide">
                {stat.label}
              </span>
            </div>

            {/* Divider between stats */}
            {index !== stats.length - 1 && (
              <div className="hidden sm:block text-gray-600 text-xl px-4">|</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
