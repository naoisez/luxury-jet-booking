import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Send } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const BookingForm = () => {
  const { toast } = useToast();
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    origin: "",
    destination: "",
    passengers: "1",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.origin || !formData.destination || !departureDate) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Booking Request Received!",
      description: "Our team will contact you shortly to confirm your flight details.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      origin: "",
      destination: "",
      passengers: "1",
    });
    setDepartureDate(undefined);
    setReturnDate(undefined);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="booking" className="py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif font-light mb-6 tracking-wide">
              Book Your <span className="gradient-text">Flight</span>
            </h2>
            <p className="text-foreground/70 font-sans font-light text-lg leading-relaxed">
              Complete the form below and our team will contact you within 2 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card border border-border/50 rounded-lg p-10 shadow-[var(--shadow-luxury)]">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Smith"
                  required
                  className="bg-card border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                  className="bg-card border-border"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 000-0000"
                  required
                  className="bg-card border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="passengers">Number of Passengers *</Label>
                <Input
                  id="passengers"
                  name="passengers"
                  type="number"
                  min="1"
                  max="20"
                  value={formData.passengers}
                  onChange={handleInputChange}
                  required
                  className="bg-card border-border"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <Label htmlFor="origin">Departure City *</Label>
                <Input
                  id="origin"
                  name="origin"
                  value={formData.origin}
                  onChange={handleInputChange}
                  placeholder="New York, NY"
                  required
                  className="bg-card border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="destination">Destination City *</Label>
                <Input
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  placeholder="Los Angeles, CA"
                  required
                  className="bg-card border-border"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <Label>Departure Date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-card border-border",
                        !departureDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {departureDate ? format(departureDate, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={departureDate}
                      onSelect={setDepartureDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label>Return Date (Optional)</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-card border-border",
                        !returnDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {returnDate ? format(returnDate, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={returnDate}
                      onSelect={setReturnDate}
                      disabled={(date) => date < (departureDate || new Date())}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <Button 
              type="submit" 
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-sans text-base font-normal py-7 rounded-full shadow-[var(--shadow-gold-glow)] transition-all duration-500"
            >
              Submit Request
              <Send className="ml-2 w-4 h-4" />
            </Button>

            <p className="text-center text-sm font-sans font-light text-foreground/50 mt-6">
              * Required fields. We'll contact you to confirm availability and pricing.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
