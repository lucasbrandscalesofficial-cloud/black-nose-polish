const Hero = () => (
  <>
    <div className="relative overflow-hidden text-primary-foreground text-center" style={{ background: 'linear-gradient(135deg, hsl(182 85% 19%) 0%, hsl(178 80% 26%) 55%, hsl(176 65% 34%) 100%)', padding: '3.4rem 5% 2.8rem' }}>
      {/* Warm emotional overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 70% 40%, hsla(20,100%,59%,0.2) 0%, transparent 60%)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 20% 80%, hsla(30,100%,70%,0.1) 0%, transparent 50%)' }} />
      <div className="relative z-[1] max-w-[720px] mx-auto">
        <div className="inline-block text-[0.7rem] font-bold tracking-[1.5px] uppercase px-[0.9rem] py-[0.3rem] rounded-full mb-4" style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.92)' }}>
          Neighborhood Dog Care Since 2007
        </div>
        <h1 className="text-[2.8rem] font-extrabold leading-[1.12] mb-4 tracking-[-0.5px]" style={{ lineHeight: '1.12' }}>
          A Safe, Happy Place for Your Dog
        </h1>
        <p className="text-[1rem] opacity-90 mb-6 font-normal max-w-[560px] mx-auto">Daycare, walks, boarding, and baths from a local team that treats your dog like family.</p>
        <div className="flex gap-3 justify-center flex-wrap mb-6">
          <a href="#contact" className="inline-block bg-orange text-primary-foreground px-10 py-4 font-extrabold no-underline rounded-lg text-[1.05rem] transition-all duration-200 hover:-translate-y-1 hover:shadow-xl active:scale-[0.97]" style={{ boxShadow: '0 4px 18px hsla(20,100%,59%,0.4)' }}>Book a Meet & Greet</a>
          <a href="#services" className="inline-block px-8 py-4 font-semibold no-underline rounded-lg text-[1rem] text-primary-foreground transition-all duration-200 hover:bg-white/25 active:scale-[0.97]" style={{ background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.3)' }}>See Services</a>
        </div>
        {/* Trust stats */}
        <div className="flex justify-center gap-8 flex-wrap text-primary-foreground/90 text-[0.78rem] font-semibold">
          <div className="flex flex-col items-center">
            <span className="text-[1.5rem] font-extrabold text-orange-light leading-none">18+</span>
            <span className="opacity-80">Years in Business</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[1.5rem] font-extrabold text-orange-light leading-none">2,000+</span>
            <span className="opacity-80">Dogs Served</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[1.5rem] font-extrabold text-orange-light leading-none">4.4★</span>
            <span className="opacity-80">Local Reviews</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[1.5rem] font-extrabold text-orange-light leading-none">100%</span>
            <span className="opacity-80">Cage-Free</span>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-5 h-[180px] overflow-hidden">
      <img src="/images/strip1.webp" alt="Happy Dogs" className="w-full h-full object-cover object-top block" />
      <img src="/images/strip2.webp" alt="Happy Dogs" className="w-full h-full object-cover object-top block" />
      <img src="/images/strip3.webp" alt="Golden Retriever" className="w-full h-full object-cover object-top block" />
      <img src="/images/strip4.webp" alt="Border Collie" className="w-full h-full object-cover object-top block" />
      <img src="/images/strip5.webp" alt="Pit Bull" className="w-full h-full object-cover object-top block" />
    </div>
  </>
);

export default Hero;
