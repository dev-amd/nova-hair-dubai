import { Award, Sparkles, ShieldCheck, Building2 } from "lucide-react";
import ModernButton from "./modern-button";
import { siteConfig } from "./site-config";
import Image from "next/image";

const stats = [
  { value: "100%", label: "Doctor-Performed (No technicians)" },
  { value: "15+ Yrs", label: "Surgical Hair Specialization" },
  { value: "4000+", label: "Restorations in the UAE" },
];

const pillars = [
  {
    icon: Sparkles,
    title: "Natural Angled Implantation",
    desc: "Every graft follows your scalp’s organic growth pattern and facial symmetry.",
  },
  {
    icon: ShieldCheck,
    title: "Fast-Healing Sapphire Micro-FUE",
    desc: "Precision incisions designed for maximum graft density and quick recovery.",
  },
  {
    icon: Building2,
    title: "Dedicated Post-Op Care",
    desc: "Personalized 12-month follow-up, PRP sessions, and doctor check-ins included.",
  },
];

export default function About() {
  return (
    <section id="about" className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 relative w-full h-full min-h-145 sm:min-h-195 flex flex-col justify-end">
            {/* Giant Doctor Card */}
            <div className="relative w-full h-full rounded-[36px] sm:rounded-[44px] overflow-hidden bg-bg-light">
              <Image
                src="/doctor.png"
                alt="Dr. Tariq Al-Mansoor - Lead Hair Surgeon"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 650px"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-8 left-6 sm:left-8 right-6 text-white pointer-events-none">
                <span className="text-base font-semibold text-accent-gold bg-black/50 px-3.5 py-1.5 rounded-2xl inline-block mb-1.5">
                  Medical Director
                </span>
                <h4 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Dr. Tariq Al-Mansoor
                </h4>
                <p className="text-base sm:text-lg text-white/90 font-medium">
                  Senior Hair Restoration Fellow • 15+ Years Experience
                </p>
              </div>
            </div>

            <div className="absolute -top-6 -left-3 sm:-left-6 z-20 w-60 sm:w-72">
              <div className="relative w-full aspect-2167/725">
                <Image
                  src="/badge.png"
                  alt="ISHRS Certified Global Gold Standard"
                  fill
                  sizes="320px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 space-y-3">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold font-semibold text-lg tracking-tight">
              <Award className="w-6 h-6" />
              <span>Surgeon-Led • Jumeirah Clinic</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h2 className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tighter leading-tighter">
                Hairlines so natural,{" "}
                <span className="text-brand-gold">
                  even your barber won&apos;t notice.
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl font-normal">
                Most hair clinics rush cases through technicians. At Nova, your
                surgery is planned, extracted, and placed directly by senior
                certified surgeons. We treat hair restoration as a permanent art
                form—focusing on natural density, correct growth angles, and
                protecting your donor area for life.
              </p>
            </div>

            {/* 3 Large Borderless Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-bg-light rounded-3xl p-4 sm:p-5 text-center sm:text-left"
                >
                  <div className="text-4xl font-extrabold text-slate-900 tracking-tighter">
                    {s.value}
                  </div>
                  <div className="text-lg text-slate-600 font-medium mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-1">
              {pillars.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-bg-light"
                  >
                    <Icon className="w-14 h-14 text-brand-gold shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <h4 className="text-2xl font-bold text-slate-900 tracking-tight leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-lg text-slate-600 font-medium leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Big Action CTA */}
            <div className="pt-2">
              <ModernButton
                href={siteConfig.whatsappUrl}
                variant="gold"
                showArrow={true}
                className="w-full"
                icon={
                  <div className="relative w-7 h-7 shrink-0">
                    <Image
                      src="/whatsapp-icon.png"
                      alt="WhatsApp"
                      fill
                      sizes="24px"
                      className="object-contain"
                    />
                  </div>
                }
              >
                <span>Book a Private Scalp Assessment</span>
              </ModernButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
