import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const experiences = [
  {
    number: "01",
    title: "Expert Artisans",
    description: "Our team comprises industry-leading stylists and therapists, each with years of refined expertise.",
  },
  {
    number: "02",
    title: "Luxury Products",
    description: "We curate only the finest products from around the world, ensuring exceptional results every visit.",
  },
  {
    number: "03",
    title: "Personal Consultation",
    description: "Every service begins with a thoughtful consultation to understand your unique needs and desires.",
  },
  {
    number: "04",
    title: "Serene Sanctuary",
    description: "Escape into our tranquil environment designed for complete relaxation and rejuvenation.",
  },
];

const ExperienceItem = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });
  
  return (
    <div
      ref={ref}
      className={cn(
        "group border-t border-border/30 py-12 md:py-16 transition-all duration-700 ease-luxury",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="grid md:grid-cols-12 gap-6 md:gap-12 items-center">
        {/* Number */}
        <div className="md:col-span-2">
          <span className="text-4xl md:text-5xl font-serif font-light text-accent/30 group-hover:text-accent/60 transition-colors duration-500">
            {exp.number}
          </span>
        </div>

        {/* Title */}
        <div className="md:col-span-4">
          <h3 className="text-2xl md:text-3xl font-serif font-light group-hover:text-accent transition-colors duration-500">
            {exp.title}
          </h3>
        </div>

        {/* Description */}
        <div className="md:col-span-6">
          <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/70 transition-colors duration-500">
            {exp.description}
          </p>
        </div>
      </div>

      {/* Hover line */}
      <div className="h-px bg-accent/0 group-hover:bg-accent/20 transition-colors duration-500 mt-12 md:mt-16" />
    </div>
  );
};

const ExperienceSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-accent/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={cn(
            "text-center mb-24 transition-all duration-1000 ease-luxury",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <span className="text-xs tracking-[0.35em] uppercase text-accent mb-4 block">
            The Raevia Difference
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light">
            A signature <span className="italic text-accent">experience</span>
          </h2>
        </div>

        {/* Experience items */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <ExperienceItem key={exp.number} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
