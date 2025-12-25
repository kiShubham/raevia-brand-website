import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-salon.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Raevia luxury salon interior with marble surfaces and gold accents" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      {/* Subtle animated accent lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-px h-32 bg-gradient-to-b from-transparent via-accent/20 to-transparent animate-fade-up" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-0 w-px h-24 bg-gradient-to-b from-transparent via-accent/20 to-transparent animate-fade-up" style={{ animationDelay: '1.2s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-24 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent animate-fade-up" style={{ animationDelay: '1.4s' }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Brand name with elegant reveal */}
        <div className="overflow-hidden mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light tracking-[0.2em] animate-fade-up">
            RAEVIA
          </h1>
        </div>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-up-delay-1">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-accent/50" />
          <div className="w-1.5 h-1.5 bg-accent/60 rotate-45" />
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-accent/50" />
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl lg:text-3xl font-serif font-light italic text-foreground/80 mb-4 animate-fade-up-delay-2">
          Refined Beauty. Elevated Grooming.
        </p>

        {/* Sub-tagline */}
        <p className="text-sm md:text-base tracking-[0.35em] uppercase text-muted-foreground mb-12 animate-fade-up-delay-3">
          Luxury salon for him, her & all
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-up-delay-4">
          <Button variant="luxury-gold" size="luxury-lg">
            Book Appointment
          </Button>
          <Button variant="luxury-subtle" size="luxury">
            Explore Services
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up" style={{ animationDelay: '1.5s' }}>
        <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-accent/50 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
