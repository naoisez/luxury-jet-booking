import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroJet from "@/assets/hero-jet.jpg";

const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroJet} 
          alt="Luxury Private Jet" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-accent text-sm font-medium">Premium Private Jet Charter</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
            Experience
            <span className="gradient-text"> Luxury </span>
            in the Sky
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 mb-8 text-balance">
            Your journey begins with unparalleled comfort, privacy, and service. 
            Fly on your schedule, to your destination.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              onClick={scrollToBooking}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-[var(--shadow-gold-glow)]"
            >
              Book Your Flight
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-accent/50 text-foreground hover:bg-accent/10 text-lg px-8 py-6"
              asChild
            >
              <a href="#fleet">View Our Fleet</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border">
            <div>
              <div className="text-3xl font-bold gradient-text mb-1">500+</div>
              <div className="text-sm text-foreground/60">Destinations</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-1">24/7</div>
              <div className="text-sm text-foreground/60">Availability</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-1">100%</div>
              <div className="text-sm text-foreground/60">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
