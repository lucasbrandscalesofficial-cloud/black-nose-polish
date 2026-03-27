const ContactSection = () => (
  <section id="contact" className="py-10">
    <div className="max-w-[1200px] mx-auto px-[5%]">
      <div className="text-[0.68rem] font-extrabold uppercase tracking-[2px] text-orange mb-[0.3rem]">Get In Touch</div>
      <h2 className="text-[2.4rem] font-extrabold text-teal-dark leading-[1.15] tracking-[-0.5px] mb-1">Visit, Call, or Stop By</h2>
      <p className="text-[0.88rem] text-muted-foreground mb-6">We are always happy to meet a new pup.</p>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="rounded-lg p-[1.8rem_2rem] border-l-4 border-l-orange" style={{ background: 'hsl(216 14% 97%)' }}>
          <h3 className="text-[1.1rem] text-teal-dark mb-4 font-extrabold">Black Nose Trading Company</h3>
          <div className="flex gap-[0.6rem] mb-[0.6rem] text-[0.85rem] text-muted-foreground">
            <span>📍</span><span>342 Divisadero Street, San Francisco, CA 94117</span>
          </div>
          <div className="flex gap-[0.6rem] mb-[0.6rem] text-[0.85rem]">
            <span>📞</span><a href="tel:+14155031004" className="text-orange no-underline font-bold">(415) 503-1004</a>
          </div>
          <div className="grid grid-cols-2 gap-y-1 gap-x-4 mt-4 text-[0.82rem]">
            <span className="font-semibold text-foreground">Mon–Fri</span><span className="text-muted-foreground">7:00am – 7:00pm</span>
            <span className="font-semibold text-foreground">Saturday</span><span className="text-muted-foreground">9:00am – 7:00pm</span>
            <span className="font-semibold text-foreground">Sunday</span><span className="text-muted-foreground">11:00am – 7:00pm</span>
          </div>
          <div className="flex gap-3 mt-6 flex-wrap">
            <a href="tel:+14155031004" className="inline-block bg-orange text-primary-foreground px-8 py-[0.8rem] font-bold no-underline rounded-[5px] text-[0.9rem] hover:brightness-90 transition-all">Call Now</a>
            <a href="https://maps.google.com/?q=342+Divisadero+St+San+Francisco+CA" target="_blank" rel="noopener noreferrer" className="inline-block bg-background text-teal px-6 py-[0.8rem] font-bold no-underline rounded-[5px] text-[0.82rem] border-2 border-teal hover:bg-teal hover:text-primary-foreground transition-all">Get Directions</a>
          </div>
        </div>
        <div className="rounded-lg flex flex-col items-center justify-center gap-2 min-h-[240px] text-muted-foreground" style={{ background: 'hsl(216 14% 97%)', border: '2px dashed hsl(216 10% 86%)' }}>
          <span className="text-4xl">🗺️</span>
          <strong className="text-foreground text-[0.95rem]">342 Divisadero St</strong>
          <span className="text-[0.78rem]">San Francisco, CA 94117</span>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
