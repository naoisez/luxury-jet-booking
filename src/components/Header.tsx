import { Phone, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold gradient-text">EliteJet</div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground/80 hover:text-accent transition-colors">Home</a>
            <a href="#fleet" className="text-foreground/80 hover:text-accent transition-colors">Our Fleet</a>
            <a href="#booking" className="text-foreground/80 hover:text-accent transition-colors">Book Now</a>
            <a href="#contact" className="text-foreground/80 hover:text-accent transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="text-foreground/60 hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="text-foreground/60 hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="text-foreground/60 hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            
            <Button 
              variant="outline" 
              size="sm"
              className="bg-accent text-accent-foreground hover:bg-accent/90 border-accent"
              asChild
            >
              <a href="tel:+1234567890" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Call Now</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
