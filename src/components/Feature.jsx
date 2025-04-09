// components/StatsSection.jsx
export default function Stats() {
    const stats = [
      { value: "3800+", label: "USER ACTIVE" },
      { value: "230+", label: "TRUSTED COMPANIES" },
      { value: "$230M+", label: "TRANSACTION" },
    ];
  
    return (
      <section className="bg-[#0f0c29] text-white px-6 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-0">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center sm:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</h2>
              <p className="text-gray-400 text-sm sm:text-base mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  