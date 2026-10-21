import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import { siteConfig } from "./site-config";

export default function Footer() {
  return (
    <footer className="w-full bg-nav-dark text-white pt-20 sm:pt-28 pb-12 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-4 space-y-6">
            <Link
              href="#home"
              className="inline-block transition-transform active:scale-95"
            >
              <div className="relative h-12 sm:h-14 w-60 sm:w-72">
                <Image
                  src={siteConfig.logoSrc}
                  alt={siteConfig.name}
                  fill
                  sizes="280px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-lg text-white/80 leading-snug max-w-sm font-normal">
              Dubai&apos;s premier hair restoration clinic specializing in
              natural, undetectable FUE & DHI hairline restoration led
              exclusively by senior certified surgeons.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/10 text-white backdrop-blur-md">
              <ShieldCheck className="w-7 h-7 text-accent-gold shrink-0" />
              <span className="text-sm sm:text-base font-medium tracking-tight">
                Licensed by Dubai Health Authority (DHA)
              </span>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-2">
            <h4 className="text-xl sm:text-2xl font-semibold text-accent-gold tracking-tight">
              Navigation
            </h4>

            <ul className="space-y-1.5 flex flex-col items-start">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label} className="w-full">
                  <Link
                    href={link.href}
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 -mx-4 rounded-2xl text-lg font-normal text-white hover:bg-white/10 active:scale-98"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 text-accent-gold" />
                  </Link>
                </li>
              ))}
              <li className="w-full">
                <Link
                  href="#quiz"
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 -mx-4 rounded-2xl text-lg font-normal text-white hover:bg-white/10 active:scale-98"
                >
                  <span>Online Assessment</span>
                  <ArrowUpRight className="w-8 h-8 text-accent-gold" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Procedures */}
          <div className="lg:col-span-3 space-y-2 select-none">
            <h4 className="text-xl sm:text-2xl font-semibold text-accent-gold tracking-tight">
              Procedures
            </h4>

            <ul className="space-y-1.5 flex flex-col items-start">
              {[
                "Sapphire Micro-FUE",
                "Direct Hair Implantation (DHI)",
                "Crown & Vertex Restoration",
                "Beard & Mustache Transplant",
                "Female Hairline Lowering",
              ].map((proc) => (
                <li key={proc} className="w-full">
                  <span className="inline-block w-full px-4 py-2.5 -mx-4 text-lg font-normal">
                    {proc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Dubai Clinic Contact*/}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xl sm:text-2xl font-semibold text-accent-gold tracking-tight">
              Jumeirah Clinic
            </h4>

            <div className="space-y-2 flex flex-col items-start">
              <a
                href="https://maps.google.com/?q=Jumeirah+Beach+Road,+Jumeirah+2,+Dubai,+UAE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 px-4 py-2.5 -mx-4 rounded-2xl hover:bg-white/10 text-base sm:text-lg text-white font-normal cursor-pointer"
              >
                <MapPin className="w-7 h-7 text-white shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Villa 42, Jumeirah Beach Road, Jumeirah 2, Dubai, UAE
                </span>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 px-4 py-2.5 -mx-4 rounded-2xl hover:bg-white/10 text-base sm:text-lg text-white font-normal"
              >
                <Phone className="w-7 h-7 text-white shrink-0" />
                <span>{siteConfig.phone}</span>
              </a>

              <a
                href="mailto:consult@novahairclinic.ae"
                className="flex items-center gap-3.5 px-4 py-2.5 -mx-4 rounded-2xl hover:bg-white/10 text-base sm:text-lg text-white font-normal"
              >
                <Mail className="w-7 h-7 text-white shrink-0" />
                <span>consult@novahairclinic.ae</span>
              </a>

              <div className="flex items-center gap-3.5 px-4 py-2.5 -mx-4 rounded-2xl text-base sm:text-lg text-white font-normal">
                <Clock className="w-7 h-7 text-white shrink-0" />
                <span>Mon – Sat: 9:00 AM – 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Dashed Bottom Divider Line */}
        <div className="pt-8 mt-16 sm:mt-20 border-t border-white/15 flex flex-col lg:flex-row items-center justify-between gap-5 text-base sm:text-lg text-white/60">
          <p className="text-center lg:text-left font-normal text-white/60">
            © 2026 {siteConfig.name}. All rights reserved. •{" "}
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-gold hover:underline font-medium"
            >
              Designed & Engineered by Ahmed
            </a>
          </p>

          <p className="text-center lg:text-right max-w-3xl text-xs sm:text-sm text-white/40 leading-snug font-normal">
            Disclaimer: Online assessment provides informational guidance only
            and does not constitute formal medical diagnosis. Formal surgical
            consultations are performed by DHA-licensed specialists in Jumeirah,
            Dubai.
          </p>
        </div>
      </div>
    </footer>
  );
}
