import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceComponent } from "@/components/ServiceComponent";

function App() {
  return (
    <div className="select-none min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 flex flex-col">
      {/* 
        Header remains untouched. 
        ServiceHero will handle its own background to overlay the header's if needed,
        or simply follow it in the flow.
      */}
      <Header />

      <ServiceComponent />

      {/* <main className="flex-1 bg-background py-20">
        <div className="text-center">
          <h2 className="text-4xl font-serif text-muted-foreground opacity-20 tracking-widest uppercase">
            Sản phẩm & Dịch vụ
          </h2>
        </div>
      </main> */}

      <Footer />
    </div>
  );
}

export default App;
