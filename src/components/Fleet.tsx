import { Card, CardContent } from "@/components/ui/card";
import { Users, Gauge, MapPin } from "lucide-react";

const Fleet = () => {
  const jets = [
    {
      name: "Light Jet",
      passengers: "6-8",
      range: "1,500 miles",
      speed: "450 mph",
      description: "Perfect for short trips and small groups",
    },
    {
      name: "Midsize Jet",
      passengers: "8-10",
      range: "2,500 miles",
      speed: "520 mph",
      description: "Ideal for coast-to-coast travel",
    },
    {
      name: "Heavy Jet",
      passengers: "10-16",
      range: "5,000 miles",
      speed: "560 mph",
      description: "Luxury long-range international flights",
    },
  ];

  return (
    <section id="fleet" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-light mb-6 tracking-wide">
            Our <span className="gradient-text">Fleet</span>
          </h2>
          <p className="text-foreground/70 font-sans font-light text-lg max-w-2xl mx-auto leading-relaxed">
            Choose from our selection of meticulously maintained aircraft, 
            each offering the ultimate in comfort and performance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {jets.map((jet, index) => (
            <Card key={index} className="bg-card border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-[var(--shadow-gold-glow)] group">
              <CardContent className="p-10">
                <div className="mb-8">
                  <h3 className="text-3xl font-serif font-light mb-3 tracking-wide">{jet.name}</h3>
                  <p className="text-foreground/60 font-sans font-light text-sm">{jet.description}</p>
                </div>

                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-accent/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                      <Users className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs font-sans text-foreground/50 uppercase tracking-wider mb-1">Capacity</div>
                      <div className="font-sans font-light">{jet.passengers} passengers</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-accent/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs font-sans text-foreground/50 uppercase tracking-wider mb-1">Range</div>
                      <div className="font-sans font-light">{jet.range}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-accent/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                      <Gauge className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs font-sans text-foreground/50 uppercase tracking-wider mb-1">Cruise Speed</div>
                      <div className="font-sans font-light">{jet.speed}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
