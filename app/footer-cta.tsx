import Image from "next/image";
import { Zap, ShieldCheck, UserCheck } from "lucide-react";
import { siteConfig } from "./site-config";
import ModernButton from "./modern-button";

interface FooterCTAProps {
  tag?: string;
  title?: React.ReactNode;
  description?: string;
  buttonText?: string;
  className?: string;
}

const trustPoints = [
  {
    icon: Zap,
    title: "15-Min Response",
    desc: "Quick confidential reply on WhatsApp",
  },
  {
    icon: UserCheck,
    title: "Direct Doctor Review",
    desc: "Evaluated by certified surgeons",
  },
  {
    icon: ShieldCheck,
    title: "100% Confidential",
    desc: "Utmost VIP privacy in Jumeirah",
  },
];

export default function FooterCTA({
  tag = "Private Consultation",
  title = (
    <>
      Ready to Restore <br className="hidden sm:inline" />
      <span className="text-accent-gold">Your Natural Hairline?</span>
    </>
  ),
  description = "Send your photos for an instant, confidential graft assessment. No pushy sales calls, no obligations—just honest advice from senior surgeons.",
  buttonText = "Free WhatsApp Consultation",
  className = "pt-8 pb-20 sm:pb-26",
}: FooterCTAProps) {
  return (
    <section className={`w-full bg-bg-light ${className}`}>
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="relative w-full rounded-4xl sm:rounded-[44px] overflow-hidden bg-nav-dark min-h-95 flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/footer-cta.png"
              alt="Dubai Clinic Night Skyline"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-linear-to-r from-nav-dark/98 via-nav-dark/90 to-nav-dark/75" />
          </div>

          <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 py-12 sm:py-16 flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-14">
            <div className="space-y-6 max-w-2xl">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-accent-gold font-semibold text-lg tracking-tight">
                  {tag}
                </span>

                <h2 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tighter leading-tighter">
                  {title}
                </h2>

                <p className="text-lg sm:text-xl text-white max-w-2xl font-normal">
                  {description}
                </p>
              </div>

              <div className="w-full sm:w-auto [&>button]:w-full sm:[&>button]:w-auto [&>a]:w-full sm:[&>a]:w-auto">
                <ModernButton
                  href={siteConfig.whatsappUrl}
                  variant="green"
                  showArrow={true}
                  className="w-full"
                  icon={
                    <div className="relative w-7 h-7 sm:w-8 sm:h-8 shrink-0">
                      <Image
                        src="/whatsapp-icon.png"
                        alt="WhatsApp"
                        fill
                        sizes="32px"
                      />
                    </div>
                  }
                >
                  <span>{buttonText}</span>
                </ModernButton>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0 select-none">
              {trustPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div
                    key={point.title}
                    className="flex items-center gap-4 p-5 rounded-2xl backdrop-blur-md bg-white/10"
                  >
                    <div className="w-14 h-14 rounded-xl bg-accent-gold/15 flex items-center justify-center shrink-0 text-accent-gold">
                      <Icon className="w-10 h-10" />
                    </div>

                    <div className="leading-tight">
                      <h4 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                        {point.title}
                      </h4>
                      <p className="text-base text-white/80">{point.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
