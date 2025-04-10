// components/PartnerSection.jsx
import { partners } from "../others";
export default function Partners() {


  return (
    <section className=" bg-[#00040F] px-6 md:px-16 py-4">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 items-center">
        {partners.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Partner ${index + 1}`}
            className="h-10 sm:h-12 opacity-60 hover:opacity-100 transition"
          />
        ))}
      </div>
    </section>
  );
}
