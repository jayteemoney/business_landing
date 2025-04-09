// components/PartnerSection.jsx
export default function Partners() {
  const partners = [
    "/images/partner1.png",
    "/images/partner2.png",
    "/images/partner3.png",
    "/images/partner4.png",
    "/images/partner5.png",
  ];

  return (
    <section className=" bg-[#00040F] px-6 py-12">
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
