const SiteNav = () => (
  <nav className="sticky top-0 z-50 bg-background px-[5%] py-[0.85rem] flex justify-end items-center" style={{ boxShadow: '0 1px 0 hsl(216 10% 90%)' }}>
    <ul className="flex gap-6 sm:gap-10 list-none items-center">
      <li><a href="#services" className="text-[#444] font-semibold text-[0.82rem] tracking-[0.3px] no-underline hover:text-orange transition-colors">Services</a></li>
      <li><a href="#contact" className="text-[#444] font-semibold text-[0.82rem] tracking-[0.3px] no-underline hover:text-orange transition-colors">Contact</a></li>
      <li><a href="tel:+14155031004" className="bg-orange text-primary-foreground font-semibold text-[0.85rem] px-[1.2rem] py-[0.5rem] rounded no-underline hover:bg-teal transition-colors">Call Us</a></li>
    </ul>
  </nav>
);

export default SiteNav;
