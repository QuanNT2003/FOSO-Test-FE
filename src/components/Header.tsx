import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import logo from "@/assets/images/logo.png";
import bgHeader from "@/assets/images/bg-header.png";
import { CartModal } from "./CartModal";
import { useCart } from "@/lib/contexts/CartContext";
import { useTranslation } from "react-i18next";

const CartButton = ({
  isSticky = false,
  isCartOpen = false,
  onClick,
}: {
  isSticky?: boolean;
  isCartOpen?: boolean;
  onClick: () => void;
}) => {
  const { itemCount } = useCart();
  const { t } = useTranslation();

  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className={`${
        isCartOpen
          ? "bg-[#FCE48C]! text-[#824C08]!"
          : "bg-[#824C08]! text-white!"
      } hover:opacity-90 rounded-md px-4 py-2 flex items-center gap-2 border-none transition-colors ${
        isSticky ? "h-9 min-w-[140px]" : "px-5 py-3 h-12 min-w-[193px]"
      }`}
    >
      <ShoppingCart
        className={`h-4 w-4 ${isCartOpen ? "text-[#824C08]" : "text-white"}`}
      />
      <span
        className={`${
          isSticky ? "text-[10px]" : "text-[11px]"
        } uppercase tracking-widest font-bold`}
      >
        {t("common.cart")}
      </span>
      <span
        className={`${
          isCartOpen ? "bg-[#824C08] text-white" : "bg-white text-[#824C08]"
        } w-4 h-4 rounded-full text-[9px] flex items-center justify-center font-bold`}
      >
        {itemCount}
      </span>
    </Button>
  );
};

export function Header() {
  const { t, i18n } = useTranslation();
  const [activeHash, setActiveHash] = useState(window.location.hash || "#home");
  const [isSticky, setIsSticky] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === "vi" ? "en" : "vi";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    };

    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { href: "#home", label: t("nav.home") },
    { href: "#about", label: t("nav.about") },
    { href: "#services", label: t("nav.services") },
    { href: "#news", label: t("nav.news") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <>
      {/* Sticky Header */}
      <div
        className={`fixed top-0 left-0 w-full z-100 transition-all duration-500 ease-in-out transform ${
          isSticky ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } bg-[#403426] border-b border-white/10 py-3 px-12`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="The Om Lounge" className="h-10 w-auto" />
            <div className="flex flex-col">
              <div className="text-[18px] font-serif tracking-widest uppercase text-white leading-none">
                The Om
              </div>
              <div className="text-[10px] text-center uppercase tracking-[0.2em] text-white/60">
                Lounge
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-medium text-white/70">
            {navItems.map((item) => (
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
          <div className="flex items-center gap-14">
            <div className="">
              <span
                onClick={toggleLanguage}
                className="text-[11px] uppercase tracking-[0.3em] font-semibold text-white/80 cursor-pointer hover:text-white transition-colors"
              >
                {i18n.language === "vi" ? "English" : "Tiếng Việt"}
              </span>
            </div>
            <CartButton
              isSticky={true}
              isCartOpen={isCartOpen}
              onClick={() => setIsCartOpen(!isCartOpen)}
            />
          </div>
        </div>
      </div>

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
              <span
                onClick={toggleLanguage}
                className="text-[11px] uppercase tracking-[0.3em] font-semibold text-white/80 cursor-pointer hover:text-white transition-colors"
              >
                {i18n.language === "vi" ? "English" : "Tiếng Việt"}
              </span>
            </div>

            {/* Center: Brand Logo */}
            <div className="flex items-center gap-4">
              <img src={logo} alt="The Om Lounge" className="h-16 w-auto" />
              <div className="text-left flex flex-col">
                <div className="text-[36px] font-serif tracking-[0.2em] uppercase font-light text-white leading-none">
                  The Om
                </div>
                <div className="text-[16px] text-center uppercase tracking-[0.4em] text-white/60">
                  Lounge
                </div>
              </div>
            </div>

            {/* Right: Cart */}
            <div className="w-1/4 flex justify-end">
              <CartButton
                isSticky={false}
                isCartOpen={isCartOpen}
                onClick={() => setIsCartOpen(!isCartOpen)}
              />
            </div>
          </div>

          {/* Bottom Row: Navigation */}
          <nav className="flex items-center justify-center gap-12 text-[11px] uppercase tracking-[0.25em] font-medium text-white/70">
            {navItems.map((item) => (
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

        {/* Cart Modal Integration */}
        <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </>
  );
}
