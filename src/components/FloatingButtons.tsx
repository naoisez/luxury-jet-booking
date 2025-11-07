import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const FloatingButtons = () => {
  const whatsappNumber = "1234567890"; // Replace with actual WhatsApp number
  const phoneNumber = "+1234567890"; // Replace with actual phone number

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <Button
        size="lg"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-xl transition-all duration-300"
        asChild
      >
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </Button>

      <Button
        size="lg"
        className="w-14 h-14 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 shadow-[var(--shadow-gold-glow)]"
        asChild
      >
        <a href={`tel:${phoneNumber}`} aria-label="Call us">
          <Phone className="w-6 h-6" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingButtons;
