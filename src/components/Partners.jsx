// components/PartnerSection.jsx
import { partners } from "../others";
export default function Partners() {


  return (
    <section className=" bg-[#00040F] px-6 md:px-16 py-4">
   <div className="flex justify-center items-center gap-8 flex-wrap">
    {partners.map((partner, index) => (
      <img
        key={index}
        src={partner.src}
        alt={`partner-${index}`}
        className="h-10 w-auto object-contain"
      />
    ))}
  </div>
    </section>
  );
}
