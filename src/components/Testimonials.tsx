const testimonials = [
  {
    text: "Walt made us feel comfortable right away. Our puppy loves his daily walks and comes home happy.",
    author: "Zoe L.",
    detail: "Goldendoodle owner",
    image: "/images/testimonial-zoe.png",
  },
  {
    text: "Nail trims are quick and gentle, and the team is always kind and professional.",
    author: "John A.",
    detail: "French Bulldog owner",
    image: "/images/testimonial-john.png",
  },
  {
    text: "So sweet, gentle, and fast. We trust Walt with our pets anytime.",
    author: "Shannon R.",
    detail: "Rescue mix owner",
    image: "/images/testimonial-shannon.png",
  },
];

const cardStyles = [
  "border-l-[4px] border-l-orange",
  "border-l-[4px] border-l-teal",
  "border-l-[4px] border-l-orange",
];

const Testimonials = () => (
  <section className="py-10">
    <div className="max-w-[1200px] mx-auto px-[5%]">
      <div className="text-[0.68rem] font-extrabold uppercase tracking-[2px] text-orange mb-[0.3rem]">Kind Words</div>
      <h2 className="text-[2.4rem] font-extrabold text-teal-dark leading-[1.15] tracking-[-0.5px] mb-1">What Local Dog Owners Say</h2>
      <p className="text-[0.88rem] text-muted-foreground mb-5">Real feedback from families we see every week.</p>
      <div className="grid md:grid-cols-3 gap-4">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`rounded-lg p-5 ${cardStyles[i]} transition-all duration-200 hover:-translate-y-1 hover:shadow-lg`}
            style={{ background: 'hsl(216 14% 97%)', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}
          >
            <div className="text-orange text-[1.1rem] tracking-[2px] mb-2">★★★★★</div>
            <p className="text-[0.95rem] text-foreground leading-[1.7] mb-3 font-medium">
              "{t.text}"
            </p>
            <div className="flex items-center gap-2">
              <img
                src={t.image}
                alt={`${t.author} profile`}
                className="w-8 h-8 rounded-full object-cover shrink-0"
              />
              <div>
                <div className="font-bold text-teal-dark text-[0.85rem] leading-tight">{t.author}</div>
                <div className="text-[0.7rem] text-muted-foreground">{t.detail}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
