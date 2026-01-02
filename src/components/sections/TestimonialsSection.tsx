import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "Nanoplastia at RAEVIA STUDIO 💇‍♂️ Got my Nanoplastia treatment done and the results are amazing! My hair feels smooth, frizz-free, and easy to style.The team at RAEVIA STUDIO was professional, friendly, and made the whole process super comfortable.Highly recommend it for guys who want healthy, sleek, and manageable hair! ✨",
    author: "Aditya Dhone AD",
    // location: "London",
  },
  {
    quote:
      "Loved my hair color transformation! My hair feels healthy and soft. Highly recommend!",
    author: "Supriya Desai",
    // location: "New York",
  },
  {
    quote:
      "This is a spot on place for anything you would like to do. Personally, this has been my go to place for my hair, face and nails for so many years now.As a girl, I am too reluctant to trust someone in regards to my hair. But this has been the best trustworthy place so far. Loving it :) Would like to give special credits to Mr Ajay who has always done my hair without any disappointment.",
    author: "Prernaa Bisst",
    // location: "Dubai",
  },
];

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) => {
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
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
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
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
