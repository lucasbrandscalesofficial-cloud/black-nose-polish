const trustItems = [
  { icon: "🏆", label: "18 Years", suffix: " of Local Care" },
  { icon: "⭐", label: "5.0 Rated", suffix: " on Yelp & Google" },
  { icon: "🐾", label: "2,000+", suffix: " Dogs Cared For" },
  { icon: "🏠", label: "Cage-Free", suffix: " · Always" },
];

const TrustBar = () => (
  <div className="border-b border-border" style={{ background: 'hsl(216 14% 97%)', padding: '0.95rem 5%' }}>
    <div className="max-w-[1200px] mx-auto flex justify-center gap-10 items-center flex-wrap">
      {trustItems.map((item, i) => (
        <div key={i} className="flex items-center gap-2 text-[0.8rem] font-semibold text-muted-foreground">
          <span className="text-[1rem]">{item.icon}</span>
          <span><strong className="text-teal-dark">{item.label}</strong><span className="text-muted-foreground">{item.suffix}</span></span>
        </div>
      ))}
      <div className="flex items-center gap-2 text-[0.8rem] font-semibold">
        <span className="text-[1rem]">📞</span>
        <a href="tel:+14155031004" className="text-orange no-underline font-bold">(415) 503-1004</a>
      </div>
    </div>
  </div>
);

export default TrustBar;
