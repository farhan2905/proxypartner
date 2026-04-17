'use client';

const marqueeItems = [
  'Digital Marketing',
  'Growth Strategy',
  'AI Solutions',
  'Web Development',
  'Brand Identity',
  'Data Analytics',
  'Creative Design',
  'Performance Marketing',
  'SEO Optimization',
  'Social Media',
  'Content Strategy',
  'E-Commerce',
];

export default function Marquee() {
  const repeated = [...marqueeItems, ...marqueeItems];

  return (
    <section className="relative bg-[#0f1419] py-8 overflow-hidden border-y border-white/8">
      <div className="marquee-mask">
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {repeated.map((item, i) => (
            <span
              key={i}
              className="text-[#e4fe7b] text-lg md:text-2xl font-bold tracking-tight mx-4 md:mx-8 flex items-center gap-4 md:gap-8"
            >
              {item}
              <span className="text-[#e4fe7b]/30 text-2xl">&#x2022;</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
