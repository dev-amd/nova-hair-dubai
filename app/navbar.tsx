"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe, ChevronDown, Menu, X, Check } from "lucide-react";
import { siteConfig } from "./site-config";
import ModernButton from "./modern-button";

const languages = [
  { code: "en", label: "EN", name: "English" },
  { code: "ar", label: "AR", name: "العربية" },
  { code: "ru", label: "RU", name: "Русский" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Google Translate Trigger Function
  const changeLanguage = (langCode: string, label: string) => {
    setCurrentLang(label);
    setLangDropdownOpen(false);

    // 1. Set Google Translate Cookie
    document.cookie = `googtrans=/en/${langCode}; path=/;`;
    document.cookie = `googtrans=/en/${langCode}; domain=${window.location.hostname}; path=/;`;

    // 2. Trigger Google's hidden selector
    const googleCombo = document.querySelector(
      ".goog-te-combo",
    ) as HTMLSelectElement;
    if (googleCombo) {
      googleCombo.value = langCode;
      googleCombo.dispatchEvent(new Event("change"));
    } else {
      // Agar widget load hone mein time le raha ho toh fast reload
      window.location.reload();
    }
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-linear-to-b from-black/70 via-black/20 to-transparent">
      {/* Top Navbar Bar */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 h-20 sm:h-24 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          className="relative z-10 flex items-center transition-transform active:scale-95"
        >
          <div className="relative h-9 w-40 sm:h-11 sm:w-52 lg:h-12 lg:w-64">
            <Image
              src={siteConfig.logoSrc}
              alt={siteConfig.name}
              fill
              priority
              sizes="(max-width: 640px) 160px, (max-width: 1024px) 210px, 260px"
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-base xl:text-lg px-4 py-2.5 rounded-2xl select-none font-medium transition-all ${
                link.active
                  ? "bg-white/15 text-white shadow-sm"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Desktop Interactive Language Dropdown */}
          <div className="relative hidden sm:block">
            <button
              type="button"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 text-sm sm:text-base font-medium text-white px-3.5 py-2 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer"
            >
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-accent-gold" />
              <span>{currentLang}</span>
              <ChevronDown className="w-4 h-4 text-white/80" />
            </button>

            {/* Popup Menu */}
            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-nav-dark/95 backdrop-blur-xl rounded-2xl p-2 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code, lang.label)}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
                  >
                    <span>{lang.name}</span>
                    {currentLang === lang.label && (
                      <Check className="w-4 h-4 text-accent-gold" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop WhatsApp Button */}
          <div className="hidden sm:block">
            <ModernButton
              href={siteConfig.whatsappUrl}
              variant="gold"
              showArrow={false}
              className="h-11! sm:h-13! px-5! rounded-2xl! text-sm sm:text-base font-semibold shadow-lg"
              icon={
                <div className="relative w-5 h-5 sm:w-6 sm:h-6 shrink-0">
                  <Image
                    src="/whatsapp-icon.png"
                    alt="WhatsApp"
                    fill
                    sizes="24px"
                    className="object-contain transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <Image
                    src="/whatsapp-icon-black.png"
                    alt="WhatsApp"
                    fill
                    sizes="24px"
                    className="object-contain absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
              }
            >
              <span>Book Consultation</span>
            </ModernButton>
          </div>

          {/* Quick Mobile WhatsApp Button */}
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="sm:hidden flex items-center justify-center w-13 h-13 rounded-2xl bg-brand-gold text-white shadow-lg active:scale-95 transition-transform"
          >
            <div className="relative w-7 h-7">
              <Image
                src="/whatsapp-icon.png"
                alt="WhatsApp"
                fill
                sizes="28px"
                className="object-contain"
              />
            </div>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            className="lg:hidden flex items-center justify-center w-13 h-13 rounded-2xl bg-white/15 text-white backdrop-blur-md active:scale-95 transition-all cursor-pointer"
          >
            <Menu className="w-7 h-7 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Full-Screen Scrollable Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-nav-dark/98 backdrop-blur-3xl flex flex-col justify-between p-4 overflow-y-auto">
          {/* Top Close Bar */}
          <div className="flex items-center justify-between pb-2">
            <div className="relative h-9 w-40">
              <Image
                src={siteConfig.logoSrc}
                alt={siteConfig.name}
                fill
                sizes="160px"
                className="object-contain object-left"
              />
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 text-white active:scale-95 transition-all cursor-pointer"
            >
              <X className="w-7 h-7 stroke-[2.5]" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-2 my-auto py-4">
            <span className="text-base text-white/40 font-medium mb-1 pl-2">
              Menu Navigation
            </span>
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-medium py-3.5 px-5 rounded-2xl transition-all ${
                  link.active
                    ? "bg-brand-gold text-white shadow-md"
                    : "text-white/90 hover:bg-white/10 active:scale-98"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Drawer Bottom Controls */}
          <div className="flex flex-col gap-3 pt-6 mt-auto">
            {/* Mobile 3-Language Selector Tabs */}
            <div className="p-3 bg-white/5 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-white/50 uppercase pl-1">
                <Globe className="w-4 h-4 text-accent-gold" />
                <span>Select Language</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code, lang.label);
                      setMobileMenuOpen(false);
                    }}
                    className={`py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                      currentLang === lang.label
                        ? "bg-brand-gold text-white shadow-md"
                        : "bg-white/10 text-white/80 hover:bg-white/15"
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Big WhatsApp CTA */}
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-3 py-4.5 rounded-2xl bg-brand-gold text-white text-lg font-semibold active:scale-95 transition-all"
            >
              <div className="relative w-6 h-6 shrink-0">
                <Image
                  src="/whatsapp-icon.png"
                  alt="WhatsApp"
                  fill
                  sizes="24px"
                  className="object-contain"
                />
              </div>
              <span>Book Free Consultation</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
