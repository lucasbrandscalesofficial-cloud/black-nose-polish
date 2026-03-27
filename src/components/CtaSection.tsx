const CtaSection = () => (
  <div className="relative text-center border-t border-b border-border py-10 px-[5%] overflow-hidden" style={{ background: 'hsl(216 14% 97%)' }}>
    <div className="relative z-[1]">
      <div className="text-[0.68rem] font-extrabold uppercase tracking-[2px] text-orange mb-[0.3rem]">Ready to Visit?</div>
      <h2 className="text-[2.4rem] font-extrabold text-teal-dark leading-[1.15] tracking-[-0.5px] mb-1">Let’s Meet You and Your Dog</h2>
      <p className="text-muted-foreground mb-5 text-[0.92rem]">Call us anytime or stop by to say hello.</p>
      <div className="flex gap-4 justify-center flex-wrap">
        <a
          href="tel:+14155031004"
          className="inline-block bg-orange text-primary-foreground px-12 py-4 font-extrabold no-underline rounded-lg text-[1.1rem] transition-all duration-200 hover:-translate-y-1 hover:brightness-110 hover:shadow-xl active:scale-[0.97]"
          style={{ boxShadow: '0 4px 20px hsla(20,100%,59%,0.4)' }}
        >
          📞 Call (415) 503-1004
        </a>
        <a
          href="#contact"
          className="inline-block bg-background text-teal px-10 py-4 font-bold no-underline rounded-lg text-[1.05rem] border-2 border-teal hover:bg-teal hover:text-primary-foreground transition-all duration-200 active:scale-[0.97]"
        >
          See Hours and Location
        </a>
      </div>
    </div>
  </div>
);

export default CtaSection;
