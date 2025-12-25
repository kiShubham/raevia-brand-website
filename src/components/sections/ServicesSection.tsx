import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface ServiceCategory {
  title: string;
  subtitle: string;
  services: string[];
  accent: string;
}

const categories: ServiceCategory[] = [
  {
    title: "For Her",
    subtitle: "Refined elegance",
    services: ["Hair Styling & Color", "Skin Treatments", "Makeup Artistry", "Nail Care"],
    accent: "from-blush/20",
  },
  {
    title: "For Him",
    subtitle: "Modern grooming",
    services: ["Precision Haircuts", "Beard Sculpting", "Classic Shaves", "Skin Therapy"],
    accent: "from-stone/30",
  },
  {
    title: "Unisex",
    subtitle: "Wellness for all",
    services: ["Spa Rituals", "Hair Treatments", "Scalp Therapy", "Relaxation Massage"],
    accent: "from-accent/10",
  },
];

const ServiceCard = ({ category, index }: { category: ServiceCategory; index: number }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={cn(
        "group relative transition-all duration-700 ease-luxury",
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-16"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Card */}
      <div className="relative p-8 md:p-10 border border-border/50 bg-card/30 backdrop-blur-sm h-full transition-all duration-500 group-hover:border-accent/30 group-hover:bg-card/50">
        {/* Gradient accent */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          category.accent
        )} />

        {/* Content */}
        <div className="relative z-10 space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-serif font-light">
              {category.title}
            </h3>
            <p className="text-xs tracking-[0.35em] uppercase text-accent">
              {category.subtitle}
            </p>
          </div>

          {/* Divider */}
          <div className="w-8 h-px bg-accent/40 transition-all duration-500 group-hover:w-16" />

          {/* Services list */}
          <ul className="space-y-3">
            {category.services.map((service, i) => (
              <li 
                key={service}
                className="flex items-center gap-3 text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <span className="w-1 h-1 bg-accent/60 rotate-45 flex-shrink-0" />
                <span className="text-sm">{service}</span>
              </li>
            ))}
          </ul>

          {/* View more link */}
          <div className="pt-4">
            <button className="text-xs tracking-[0.2em] uppercase text-muted-foreground transition-all duration-300 hover:text-accent group-hover:translate-x-2 inline-flex items-center gap-2">
              <span>Explore</span>
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-accent/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-accent/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section className="relative py-32 md:py-40">
      {/* Background */}
      <div className="absolute inset-0 bg-luxury-gradient" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={cn(
            "text-center max-w-2xl mx-auto mb-20 transition-all duration-1000 ease-luxury",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <span className="text-xs tracking-[0.35em] uppercase text-accent mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-6">
            Tailored to <span className="italic">you</span>
          </h2>
          <div className="divider-gold mb-6" />
          <p className="text-muted-foreground leading-relaxed">
            From precision grooming to transformative treatments, 
            every service is crafted to elevate your unique beauty.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <ServiceCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
