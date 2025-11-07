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
    <section id="fleet" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Exclusive Fleet</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Choose from our selection of meticulously maintained aircraft, 
            each offering the ultimate in comfort and performance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {jets.map((jet, index) => (
            <Card key={index} className="bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-[var(--shadow-gold-glow)]">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{jet.name}</h3>
                  <p className="text-foreground/60">{jet.description}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-foreground/60">Capacity</div>
                      <div className="font-semibold">{jet.passengers} passengers</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-foreground/60">Range</div>
                      <div className="font-semibold">{jet.range}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Gauge className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-foreground/60">Cruise Speed</div>
                      <div className="font-semibold">{jet.speed}</div>
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
