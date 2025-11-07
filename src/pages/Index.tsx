import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Fleet from "@/components/Fleet";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Fleet />
      <BookingForm />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
