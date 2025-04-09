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
          <div key={index} className="flex items-center gap-4">
            {/* Stat value + label in one line */}
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</h3>
              <p className="text-sm sm:text-base uppercase text-cyan-400 tracking-wide">
                {stat.label}
              </p>
            </div>

            {/* Divider (desktop only, skip last) */}
            {index !== stats.length - 1 && (
              <div className="hidden sm:block text-gray-600 text-xl px-4">|</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
