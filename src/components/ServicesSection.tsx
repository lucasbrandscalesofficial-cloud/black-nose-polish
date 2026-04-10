interface PriceItem { label: string; value: string }

interface Service {
  tag: string;
  title: string;
  description: string;
  prices: PriceItem[];
  benefits: string[];
  cta: string;
  popular?: boolean;
}

const services: Service[] = [
  {
    tag: "🐕 Socialization & Play",
    title: "Dog Day Care",
    description: "A full day of supervised play, rest, and walks.",
    prices: [
      { label: "Full Day", value: "$65" },
      { label: "Half Day", value: "$45" },
      { label: "10-Pack", value: "$600" },
      { label: "Monthly", value: "$850" },
    ],
    benefits: [
      "Play groups matched by energy",
      "Daily outdoor walks",
      "Safe, cage-free setting",
    ],
    cta: "Reserve Day Care →",
    popular: true,
  },
  {
    tag: "🛁 Self-Service",
    title: "Dog Bathing & Grooming",
    description: "Easy self-serve baths with everything ready for you.",
    prices: [
      { label: "Self-Serve Bath", value: "$15" },
      { label: "Nail Clipping", value: "$20" },
      { label: "Packages", value: "Call" },
    ],
    benefits: [
      "Shampoo and conditioner included",
      "Towels, dryers, and brushes ready",
      "Skip the mess at home",
    ],
    cta: "Book a Bath →",
  },
  {
    tag: "🏃 Daily Exercise",
    title: "Dog Walking",
    description: "Reliable one-hour walks from people your dog knows.",
    prices: [
      { label: "Single Walk", value: "$35" },
      { label: "2–3x/Week", value: "$32" },
      { label: "4–5x/Week", value: "$30" },
    ],
    benefits: [
      "Full 60-minute walks",
      "Small, social groups",
      "Flexible weekly plans",
    ],
    cta: "Book a Walk →",
  },
  {
    tag: "🌙 While You're Away",
    title: "Overnight Boarding",
    description: "Overnight care in a calm, home-like space.",
    prices: [
      { label: "Per Night", value: "$75" },
      { label: "Holiday", value: "$85" },
    ],
    benefits: [
      "Always cage-free",
      "Comfortable bedtime routine",
      "Vaccines required for safety",
    ],
    cta: "Reserve Boarding →",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-10">
    <div className="max-w-[1200px] mx-auto px-[5%]">
      <div className="mb-7">
        <div className="text-[0.68rem] font-extrabold uppercase tracking-[2px] text-orange mb-[0.3rem]">Services</div>
        <h2 className="text-[2.4rem] font-extrabold text-teal-dark leading-[1.15] tracking-[-0.5px] mb-1">Our Services</h2>
        <p className="text-[0.9rem] text-muted-foreground">Simple care options for your schedule and your dog.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {services.map((s, i) => (
          <div
            key={i}
            className={`relative rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
              s.popular
                ? 'ring-[3px] ring-orange bg-[hsla(20,100%,59%,0.04)]'
                : 'border border-border'
            }`}
            style={{
              boxShadow: s.popular
                ? '0 8px 32px hsla(20,100%,59%,0.18)'
                : '0 2px 8px rgba(0,0,0,0.08)',
            }}
          >
            {s.popular && (
              <div className="bg-orange text-primary-foreground text-[0.65rem] font-extrabold uppercase tracking-[1.5px] text-center py-2 z-10">
                ⭐ Most Popular — Best Value
              </div>
            )}
            <div className={`p-7 flex-1 flex flex-col`}>
              <div className="text-[0.65rem] font-extrabold uppercase tracking-[1.5px] text-orange mb-1">{s.tag}</div>
              <h3 className="text-[1.5rem] font-extrabold text-teal-dark mb-1">{s.title}</h3>
              <p className="text-[0.86rem] text-muted-foreground leading-[1.6] mb-4">{s.description}</p>

              {/* Price chips */}
              <div className="flex flex-wrap gap-3 mb-5">
                {s.prices.map((p, j) => (
                  <div
                    key={j}
                    className={`rounded-lg px-5 py-3 transition-all duration-200 hover:scale-[1.06] cursor-default min-w-[90px] ${
                      j === 0 && s.popular
                        ? 'bg-orange text-primary-foreground'
                        : 'bg-teal text-primary-foreground'
                    }`}
                    style={{
                      boxShadow:
                        j === 0 && s.popular
                          ? '0 4px 14px hsla(20,100%,59%,0.4)'
                          : '0 3px 10px hsla(178,80%,26%,0.3)',
                    }}
                  >
                    <div className="text-[0.58rem] font-bold uppercase tracking-[1px] opacity-80 leading-tight mb-1">{p.label}</div>
                    <div className="text-[1.75rem] font-extrabold leading-none tracking-[-1px]" style={{ fontVariantNumeric: 'tabular-nums' }}>{p.value}</div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <ul className="space-y-1.5 mb-6 flex-1">
                {s.benefits.map((b, k) => (
                  <li key={k} className="flex items-start gap-2 text-[0.82rem] text-foreground/80 leading-snug">
                    <span className="text-orange font-bold text-[0.75rem] mt-px">✔</span>
                    {b}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`self-start inline-block px-9 py-4 rounded-lg text-[1rem] font-extrabold no-underline transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.97] ${
                  s.popular
                    ? 'bg-orange text-primary-foreground'
                    : 'bg-teal text-primary-foreground'
                }`}
                style={{
                  boxShadow: s.popular
                    ? '0 4px 18px hsla(20,100%,59%,0.4)'
                    : '0 4px 16px hsla(178,80%,26%,0.35)',
                }}
              >
                {s.cta}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
