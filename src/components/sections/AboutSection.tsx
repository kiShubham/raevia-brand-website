import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import salonInterior1 from "@/assets/salon-interior-1.jpg";

const AboutSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Text content */}
          <div className={cn(
            "space-y-8 transition-all duration-1000 ease-luxury",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            {/* Section label */}
            <div className="space-y-4">
              <span className="text-xs tracking-[0.35em] uppercase text-accent">
                Our Philosophy
              </span>
              <div className="w-12 h-px bg-accent/50" />
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight">
              Where
              <span className="block italic text-accent">artistry</span>
              meets intention
            </h2>

            {/* Body text */}
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                At Raevia, we believe beauty is personal. Our sanctuary is designed 
                for those who seek more than a service—they seek an experience that 
                honors their individuality.
              </p>
              <p>
                Every detail, from our curated product selection to our private 
                consultation rooms, reflects our commitment to refined craftsmanship 
                and personalized care.
              </p>
            </div>

            {/* Signature element */}
            <div className="pt-4">
              <p className="font-serif italic text-foreground/60 text-lg">
                — The Raevia Promise
              </p>
            </div>
          </div>

          {/* Visual element */}
          <div className={cn(
            "relative transition-all duration-1000 delay-200 ease-luxury",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            {/* Image frame */}
            <div className="relative aspect-[4/5]">
              {/* Outer frame */}
              <div className="absolute inset-0 border border-accent/20" />
              <div className="absolute inset-4 border border-accent/10" />
              
              {/* Image */}
              <div className="absolute inset-8 overflow-hidden">
                <img 
                  src={salonInterior1} 
                  alt="Raevia luxury treatment room" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-background/20" />
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-accent/40" />
              <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-accent/40" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-accent/40" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-accent/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
