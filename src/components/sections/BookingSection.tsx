import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const BookingSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const handleCallClick = () => {
    window.location.href = "tel:+919594152241";
  };

  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {/* Background with radial gradient */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-luxury-radial" />
      </div>

      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-accent/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-accent/30 to-transparent" />
      </div>

      <div
        ref={ref}
        className={cn(
          "relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ease-luxury",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}
      >
        {/* Label */}
        <span className="text-xs tracking-[0.35em] uppercase text-accent mb-6 block">
          Begin Your Journey
        </span>

        {/* Headline */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light mb-8">
          Reserve your
          <span className="block italic text-accent mt-2">experience</span>
        </h2>

        {/* Decorative element */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-accent/40" />
          <div className="w-2 h-2 bg-accent/40 rotate-45" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-accent/40" />
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Step into a world of refined beauty and personalized care. Our team
          awaits to craft your perfect experience.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Button
            variant="luxury-gold"
            size="luxury-lg"
            className="min-w-[200px]"
            onClick={handleCallClick}
          >
            Book Appointment
          </Button>
          <Button variant="luxury" size="luxury">
            Contact Us
          </Button>
        </div>

        {/* Hours info */}
        <div className="mt-16 pt-8 border-t border-border/30">
          <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-2">
            Hours of Operation
          </p>
          <p className="text-sm text-foreground/70">
            Tuesday – Sunday: 10am – 10pm
          </p>
          {/* <p className="text-sm text-foreground/70">
            Sunday: 10am – 10pm
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
