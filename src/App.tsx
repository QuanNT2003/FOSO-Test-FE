import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceComponent } from "@/components/ServiceComponent";
import { TestimonialComponent } from "@/components/TestimonialComponent";
import { AppointmentComponent } from "@/components/AppointmentComponent";
import { CartProvider } from "@/lib/contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="select-none min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 flex flex-col">
        {/* 
          Header remains untouched. 
          ServiceHero will handle its own background to overlay the header's if needed,
          or simply follow it in the flow.
        */}
        <Header />

        <ServiceComponent />
        <TestimonialComponent />
        <AppointmentComponent />

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
