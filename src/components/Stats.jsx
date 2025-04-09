// components/StatsSection.jsx
export default function StatsSection() {
  const stats = [
    { value: "3800+", label: "USER ACTIVE" },
    { value: "230+", label: "TRUSTED BY COMPANY" },
    { value: "$230M+", label: "TRANSACTION" },
  ];

  return (
    <section className="bg-[#0f0c29] text-white px-6 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-6 sm:gap-0">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center">
            {/* Stat value and label side by side */}
            <div className="flex items-baseline gap-2 text-center sm:text-left">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                {stat.value}
              </span>
              <span className="text-sm sm:text-base md:text-lg text-cyan-400 uppercase tracking-wide">
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
