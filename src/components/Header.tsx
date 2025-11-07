import { Phone, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-xl font-serif font-light tracking-[0.3em] text-foreground">
              E L I T E J E T
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-10">
            <a href="#home" className="text-sm font-sans font-light text-foreground/90 hover:text-accent transition-all duration-300">Experience</a>
            <a href="#fleet" className="text-sm font-sans font-light text-foreground/90 hover:text-accent transition-all duration-300">Fleet</a>
            <a href="#booking" className="text-sm font-sans font-light text-foreground/90 hover:text-accent transition-all duration-300">Reservation</a>
            <a href="#contact" className="text-sm font-sans font-light text-foreground/90 hover:text-accent transition-all duration-300">Contact</a>
          </nav>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="text-foreground/50 hover:text-accent transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="text-foreground/50 hover:text-accent transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="text-foreground/50 hover:text-accent transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            
            <Button 
              variant="outline" 
              size="sm"
              className="bg-accent text-accent-foreground hover:bg-accent/90 border-accent rounded-full px-6 font-sans text-sm font-light"
              asChild
            >
              <a href="tel:+1234567890" className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" />
                <span>Call</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
