import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="select-none min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 flex flex-col">
      <Header />

      {/* Hero Title - Positioned over the Header's background */}
      <div className="absolute top-[35vh] left-0 w-full z-10 pointer-events-none">
        <div className="text-center">
          <h2 className="text-7xl md:text-[120px] font-serif text-white/95 tracking-tight animate-in fade-in zoom-in duration-1000 font-light">
            Dịch Vụ
          </h2>
        </div>
      </div>

      <main className="flex-1 bg-background py-20 mt-[40vh]">
        <div className="text-center">
          <h2 className="text-4xl font-serif text-muted-foreground opacity-20 tracking-widest uppercase">
            Giao diện sẽ sớm được cập nhật
          </h2>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
