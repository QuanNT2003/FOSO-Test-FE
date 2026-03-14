import logo from "@/assets/images/logo.png";
import flower from "@/assets/images/flower.png";
import { useTranslation } from "react-i18next";

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.77 1.52V6.74a4.85 4.85 0 0 1-1-.05z" />
  </svg>
);

const ZaloIcon = () => (
  <div className="w-5 h-5 bg-[#E1C084] rounded-full flex items-center justify-center">
    <span className="text-[#291E0A] text-[8px] font-bold">Zalo</span>
  </div>
);

const SectionLabel = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2 mb-4">
    <div className="w-[6px] h-[6px] rounded-full bg-[#E1C084]" />
    <span className="text-[10px] text-[#E1C084]/50 tracking-[0.3em] uppercase">
      {text}
    </span>
  </div>
);

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="relative bg-[#291E0A] pt-[64px] pb-[40px] px-[96px] overflow-hidden">
      {/* Flower Decoration */}
      <img
        src={flower}
        alt=""
        className="absolute top-0 right-0 w-[180px] opacity-40 pointer-events-none translate-x-[20%] -translate-y-[10%]"
      />

      <div className="flex justify-between items-start mb-[80px]">
        {/* LEFT COLUMN: Logo and Brand */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="The Om Lounge" className="h-[72px] w-auto" />
          <div className="flex flex-col">
            <span className="font-serif text-[32px] text-[#E1C084] tracking-widest uppercase leading-none font-light">
              THE OM
            </span>
            <span className="text-[14px] text-[#E1C084]/60 tracking-[0.4em] uppercase">
              LOUNGE
            </span>
          </div>
        </div>

        <div className="flex items-start mb-[80px]">
          <div className="flex flex-col gap-[60px]">
            {/* Sitemap links */}
            <div>
              <SectionLabel text={t("common.footer.sitemap")} />
              <div className="flex flex-col gap-2 font-serif text-[20px] text-[#F5EAD6]">
                <a href="#home" className="hover:opacity-70 transition-opacity">
                  {t("nav.home")}
                </a>
                <a
                  href="#about"
                  className="hover:opacity-70 transition-opacity"
                >
                  {t("nav.about")}
                </a>
                <a
                  href="#services"
                  className="hover:opacity-70 transition-opacity"
                >
                  {t("nav.services")}
                </a>
              </div>
            </div>

            {/* Contact info */}
            <div>
              <SectionLabel text={t("common.footer.contact")} />
              <div className=" space-y-1 text-[#F5EAD6]">
                <p className="font-semibold text-[14px]">+84 89 812 12 97</p>
                <p className="text-[14px] leading-relaxed">
                  6 Đường G, Phú Mỹ, Quận 7, TP Hồ Chí Minh
                  <br />
                  <span className="text-[13px] opacity-70 text-[#F5EAD6]">
                    {t("common.footer.addr_proximity")}
                  </span>
                </p>
                <div className="pt-2 text-[13px] opacity-90 leading-relaxed">
                  <p>{t("common.footer.weekdays")}: &nbsp;&nbsp;09:00 - 19:00</p>
                  <p>{t("common.footer.weekends")}: 09:00 - 20:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Secondary Links & Booking */}
          <div className="flex flex-col gap-x-[96px] items-center">
            {/* Secondary links */}
            <div className="w-full flex justify-start pl-[40px] mt-[26px]">
              <div className="flex flex-col gap-2 font-serif text-[20px] text-[#F5EAD6]">
                <a href="#news" className="hover:opacity-70 transition-opacity">
                  {t("nav.news")}
                </a>
                <a
                  href="#contact"
                  className="hover:opacity-70 transition-opacity "
                >
                  {t("nav.contact")}
                </a>
              </div>
            </div>

            {/* Booking Button */}
            <div className="w-full flex justify-center pt-10">
              <div className="-rotate-15 transform-gpu">
                <button
                  style={{ borderRadius: "50% 50% 50% 50% / 50% 50% 50% 50%" }}
                  className="border! border-[#E1C084]/60! bg-transparent! w-[180px] h-[85px] flex items-center justify-center text-[#E1C084] text-[15px] font-medium hover:bg-[#E1C084]/5! transition-all duration-500 cursor-pointer outline-none shadow-none"
                >
                  <span className="rotate-15 block pointer-events-none">
                    {t("common.footer.book_now")}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR: Socials and Copyright */}
      <div className="flex items-center justify-between pt-8">
        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-[#E1C084] hover:opacity-70 transition-opacity"
          >
            <FacebookIcon />
          </a>
          <a
            href="#"
            className="text-[#E1C084] hover:opacity-70 transition-opacity"
          >
            <TikTokIcon />
          </a>
          <a
            href="#"
            className="text-[#E1C084] hover:opacity-70 transition-opacity"
          >
            <ZaloIcon />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-[11px] text-[#E1C084]/40 tracking-wider">
          © 2025 — Copyright The OM Lounge. {t("common.footer.rights_reserved")}
        </div>
      </div>
    </footer>
  );
}
