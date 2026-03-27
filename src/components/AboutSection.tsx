const AboutSection = () => (
  <div className="relative" style={{ background: 'hsl(182 85% 19%)' }}>
    {/* Warm overlay */}
    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 80% 50%, hsla(30,80%,60%,0.08) 0%, transparent 60%)' }} />
    <div className="relative z-[1] text-primary-foreground py-10 px-[5%]">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-6 items-center">
        <div>
          <img src="/images/about.webp" alt="Black Nose Trading Company store" className="w-full h-auto rounded-lg" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }} />
        </div>
        <div>
          <div className="text-[0.68rem] font-extrabold uppercase tracking-[2px] text-orange-light mb-[0.3rem]">Our Story · Since 2007</div>
          <h2 className="text-[2.4rem] font-extrabold leading-[1.12] tracking-[-0.5px] mb-3 text-primary-foreground" style={{ lineHeight: '1.12' }}>A Small Neighborhood Team That Knows Your Dog</h2>
          <p className="text-[0.95rem] opacity-90 leading-[1.7] mb-2">Walt started Black Nose with a simple goal: make dogs feel safe, cared for, and at home.</p>
          <p className="text-[0.95rem] opacity-90 leading-[1.7] mb-2">After 18 years, that is still how we work every day.</p>
          <p className="text-[1rem] font-bold text-orange-light mt-2 italic">— Walt Bell, Owner</p>
        </div>
      </div>
    </div>
    {/* Visual divider */}
    <div className="h-1" style={{ background: 'linear-gradient(90deg, hsl(20 100% 59%) 0%, hsl(178 80% 26%) 100%)' }} />
  </div>
);

export default AboutSection;
