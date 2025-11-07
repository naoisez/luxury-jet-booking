import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-card/50 border-t border-border/30 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="text-xl font-serif font-light tracking-[0.3em] gradient-text mb-5">
              E L I T E J E T
            </div>
            <p className="text-foreground/60 font-sans font-light text-sm leading-relaxed">
              Premium private jet charter services for discerning travelers worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans font-light text-sm uppercase tracking-wider mb-5 text-foreground">Quick Links</h3>
            <ul className="space-y-3 text-sm font-sans font-light">
              <li>
                <a href="#home" className="text-foreground/60 hover:text-accent transition-all duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#fleet" className="text-foreground/60 hover:text-accent transition-all duration-300">
                  Our Fleet
                </a>
              </li>
              <li>
                <a href="#booking" className="text-foreground/60 hover:text-accent transition-all duration-300">
                  Book Now
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/60 hover:text-accent transition-all duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-sans font-light text-sm uppercase tracking-wider mb-5 text-foreground">Contact Us</h3>
            <ul className="space-y-4 text-sm font-sans font-light">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-accent/70 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-foreground/60 hover:text-accent transition-all duration-300">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-accent/70 flex-shrink-0" />
                <a href="mailto:info@elitejet.com" className="text-foreground/60 hover:text-accent transition-all duration-300">
                  info@elitejet.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent/70 flex-shrink-0" />
                <span className="text-foreground/60">
                  123 Aviation Way, Suite 100<br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-sans font-light text-sm uppercase tracking-wider mb-5 text-foreground">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/5 flex items-center justify-center text-accent/70 hover:bg-accent/10 hover:text-accent transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/5 flex items-center justify-center text-accent/70 hover:bg-accent/10 hover:text-accent transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/5 flex items-center justify-center text-accent/70 hover:bg-accent/10 hover:text-accent transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-sans font-light text-foreground/50">
            <p>&copy; {currentYear} EliteJet. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-accent transition-all duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-all duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
