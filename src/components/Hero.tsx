import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import interiorHero from "@/assets/interior-hero.jpg";

const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={interiorHero} 
          alt="Luxury Private Jet Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-serif font-light mb-8 text-balance leading-[1.1] tracking-wide">
            Luxury beyond limits
          </h1>
          
          <p className="text-lg md:text-xl font-sans font-light text-foreground/90 mb-12 text-balance max-w-2xl mx-auto leading-relaxed">
            Elevate your expectations and let us turn your journey into a one-of-a-kind experience
          </p>

          <Button 
            size="lg"
            onClick={scrollToBooking}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-sans text-base font-normal px-10 py-6 rounded-full shadow-[var(--shadow-gold-glow)] transition-all duration-500"
          >
            Book your flight
          </Button>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
