import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import logo from "@/assets/images/logo.png";
import bgHeader from "@/assets/images/bg-header.png";

export function Header() {
  const [activeHash, setActiveHash] = useState(window.location.hash || "#home");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgHeader}
          alt="Spa Header Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#28262659]"></div>
        {/* Soft Buffer Zone Transition */}
        <div className="absolute inset-x-0 bottom-0 h-[10px] bg-[#523C14]"></div>
        <div className="absolute inset-x-0 bottom-[10px] h-[150px] bg-linear-to-t from-[#523C14] to-transparent"></div>
      </div>

      <header className="relative z-50 w-full pt-8 px-12 min-h-[300px]">
        {/* Top Row: Language, Brand, Cart */}
        <div className="flex items-center justify-between mb-8">
          {/* Left: Language */}
          <div className="w-1/4">
            <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-white/80 cursor-pointer hover:text-white transition-colors">
              English
            </span>
          </div>

          {/* Center: Brand Logo */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="The Om Lounge" className="h-16 w-auto" />
            <div className="text-left flex flex-col justify-center">
              <div className="text-[36px] font-serif tracking-[0.2em] uppercase font-light text-white leading-none">
                The Om
              </div>
              <div className="text-[16px] uppercase tracking-[0.4em] text-white/60">
                Lounge
              </div>
            </div>
          </div>

          {/* Right: Cart */}
          <div className="w-1/4 flex justify-end">
            <Button
              variant="ghost"
              className="!bg-[#824C08] !hover:bg-[#824C08]/90 !hover:border-none text-white hover:text-white rounded-md px-5 py-3 h-12 flex items-center justify-center gap-3 border-none ring-0 focus-visible:ring-0 min-w-[193px]"
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold">
                Giỏ hàng
              </span>
              <span className="bg-white text-[#824C08] w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold">
                3
              </span>
            </Button>
          </div>
        </div>

        {/* Bottom Row: Navigation */}
        <nav className="flex items-center justify-center gap-12 text-[11px] uppercase tracking-[0.25em] font-medium text-white/70">
          {[
            { href: "#home", label: "Trang chủ" },
            { href: "#about", label: "Giới thiệu" },
            { href: "#services", label: "Dịch vụ" },
            { href: "#news", label: "Tin tức" },
            { href: "#contact", label: "Liên hệ" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setActiveHash(item.href)}
              className={`transition-colors hover:text-white ${
                activeHash === item.href ? "text-[#E1C084]" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>
    </div>
  );
}
