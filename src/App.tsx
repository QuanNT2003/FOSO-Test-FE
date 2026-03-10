import { Button } from "@/components/ui/button";

import { Search, Plus, ShoppingCart, Leaf, Wind, Droplets } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/90 backdrop-blur-md z-50 border-b border-border/50">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-serif text-xl border-2 border-primary/20">
              O
            </div>
            <div>
              <h1 className="text-xl font-serif tracking-widest uppercase font-semibold leading-none">
                The Om
              </h1>
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground ml-0.5">
                Lounge
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-10 text-xs uppercase tracking-[0.2em] font-medium text-muted-foreground">
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300"
            >
              Trang chủ
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300"
            >
              Giới thiệu
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300 border-b border-primary text-foreground"
            >
              Dịch vụ
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300"
            >
              Tin tức
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300"
            >
              Liên hệ
            </a>
          </nav>

          <div className="flex items-center gap-6">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex rounded-full px-6 border-primary/30 hover:bg-primary/10 hover:text-primary text-xs uppercase tracking-widest gap-2"
            >
              <ShoppingCart className="h-3 w-3" />
              Giỏ hàng
              <span className="bg-primary text-primary-foreground w-4 h-4 rounded-full text-[8px] flex items-center justify-center ml-1">
                0
              </span>
            </Button>
            <div className="text-[10px] uppercase tracking-widest font-semibold border-l pl-6 border-border hidden md:block">
              English
            </div>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/spa_hero_bg.png"
              alt="Spa Hero"
              className="w-full h-full object-cover brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
          </div>
          <div className="container relative z-10 px-6 text-center">
            <h2 className="text-6xl md:text-8xl font-serif text-white tracking-tight mb-4 animate-in fade-in slide-in-from-bottom-5 duration-1000">
              Dịch Vụ
            </h2>
            <div className="w-24 h-0.5 bg-primary/80 mx-auto rounded-full"></div>
          </div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto px-6 py-20">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-between gap-6 mb-16 border-b border-border/50 pb-8">
            <div className="flex flex-wrap items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-bold">
              <button className="text-primary border-b-2 border-primary pb-2">
                Gói Combo
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors pb-2">
                Medicure
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors pb-2">
                Pedicure
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors pb-2">
                Hiệu ứng
              </button>
            </div>
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="bg-muted/30 w-full pl-10 pr-4 py-2 rounded-full text-xs border border-transparent focus:border-primary/50 focus:outline-none transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Featured Image Case */}
            <div className="space-y-12 animate-in fade-in slide-in-from-left-5 duration-700">
              <div className="group relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
                <img
                  src="/spa_manicure.png"
                  alt="Combo Service"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply group-hover:opacity-0 transition-opacity"></div>
              </div>

              <div className="pl-6 border-l-2 border-primary/30">
                <h3 className="text-4xl font-serif mb-6 italic">Medicure</h3>
                <div className="space-y-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between border-b border-border/50 pb-4 group cursor-pointer hover:pl-2 transition-all"
                    >
                      <div>
                        <h4 className="font-semibold text-sm tracking-wide">
                          Perfectly Polished
                        </h4>
                        <p className="text-[11px] text-muted-foreground">
                          Làm mới màu sắc (Mani hoặc Pedi)...
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-serif font-bold text-sm">
                          390k
                        </span>
                        <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                          <Plus className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Text and Secondary Images */}
            <div className="space-y-12 animate-in fade-in slide-in-from-right-5 duration-700">
              <div className="pr-6">
                <h3 className="text-4xl font-serif mb-8 italic">Gói Combo</h3>
                <div className="space-y-8">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between border-b border-border/50 pb-4 group cursor-pointer hover:translate-x-1 transition-all"
                    >
                      <div>
                        <h4 className="font-semibold text-sm tracking-wide">
                          Perfectly Polished
                        </h4>
                        <p className="text-[11px] text-muted-foreground">
                          Làm mới màu sắc (Mani hoặc Pedi)...
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-serif font-bold text-sm">
                          390k
                        </span>
                        <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                          <Plus className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-2xl aspect-square w-2/3 ml-auto">
                <img
                  src="/spa_massage.png"
                  alt="Spa Massage"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply group-hover:opacity-0 transition-opacity"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Minimal */}
        <section className="bg-muted/30 py-20 border-y border-border/50">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="flex justify-center text-primary">
                <Leaf className="h-10 w-10" />
              </div>
              <h5 className="font-serif text-lg">Natural Products</h5>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">
                Chúng tôi sử dụng 100% thảo mộc tự nhiên
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center text-primary">
                <Wind className="h-10 w-10" />
              </div>
              <h5 className="font-serif text-lg">Clean Space</h5>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">
                Không gian yên tĩnh và thư giãn tuyệt đối
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center text-primary">
                <Droplets className="h-10 w-10" />
              </div>
              <h5 className="font-serif text-lg">Expert Care</h5>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">
                Đội ngũ chuyên gia giàu kinh nghiệm
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background py-16">
        <div className="container mx-auto px-6 text-center space-y-8">
          <div className="flex justify-center grayscale opacity-50">
            <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center text-background font-serif text-2xl">
              O
            </div>
          </div>
          <div className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
            The Om Lounge • Relaxation & Beauty
          </div>
          <p className="text-xs text-muted-foreground">
            © 2026 THE OM LOUNGE. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
