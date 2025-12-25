import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "An oasis of calm in the city. The attention to detail is remarkable—every visit feels like a personal retreat.",
    author: "A.M.",
    location: "London",
  },
  {
    quote: "Finally, a salon that understands modern elegance. The team's expertise is matched only by their genuine care.",
    author: "J.K.",
    location: "New York",
  },
  {
    quote: "Raevia has redefined what I expect from a grooming experience. Subtle luxury at its finest.",
    author: "S.R.",
    location: "Dubai",
  },
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  
  return (
    <div
      ref={ref}
      className={cn(
        "group relative transition-all duration-700 ease-luxury",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Quote */}
      <div className="relative p-8 md:p-10">
        {/* Opening quote mark */}
        <span className="absolute -top-4 left-6 text-6xl font-serif text-accent/20 leading-none">
          "
        </span>

        <blockquote className="relative z-10">
          <p className="text-lg md:text-xl font-serif font-light leading-relaxed text-foreground/80 mb-8">
            {testimonial.quote}
          </p>

          <footer className="flex items-center gap-3">
            <div className="w-8 h-px bg-accent/40" />
            <div>
              <cite className="not-italic text-sm tracking-wide text-foreground">
                {testimonial.author}
              </cite>
              <span className="block text-xs text-muted-foreground mt-1">
                {testimonial.location}
              </span>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section className="relative py-32 md:py-40">
      {/* Background */}
      <div className="absolute inset-0 bg-card/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={cn(
            "text-center mb-20 transition-all duration-1000 ease-luxury",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <span className="text-xs tracking-[0.35em] uppercase text-accent mb-4 block">
            Voices
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light">
            What they <span className="italic">say</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
