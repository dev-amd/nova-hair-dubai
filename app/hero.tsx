import Image from "next/image";
import { Crown, ShieldCheck, Star, Play } from "lucide-react";
import { siteConfig } from "./site-config";
import ModernButton from "./modern-button";
import HeroQuiz from "./hero-quiz";

export default function Hero() {
  return (
    <section className="relative w-full min-h-dvh bg-nav-dark overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-banner.png"
          alt="Natural Hair Transplant Results"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_top] sm:object-[65%_center] lg:object-center w-full h-full"
        />
        {/* gradient on mobile/tablet */}
        <div className="absolute inset-0 bg-linear-to-b from-black/85 via-black/60 to-nav-dark lg:hidden" />
      </div>

      {/* 2. Hero Content Container */}
      <div className="relative z-10 w-full pt-28 pb-14">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 xl:col-span-7 space-y-4">
              {/* Tagline */}
              <p className="text-base sm:text-xl font-semibold text-accent-gold/90 tracking-wide">
                Natural Results. A More Confident You.
              </p>

              {/* Main Headline */}
              <h1 className="text-6xl sm:text-7xl font-bold text-white leading-tighter tracking-tight">
                Advanced Hair <br className="hidden sm:inline" />
                Transplant Solutions <br />
                <span className="text-accent-gold">in Dubai</span>
              </h1>

              {/* Sub-paragraph */}
              <p className="text-xl sm:text-2xl text-white/90 max-w-2xl font-normal">
                Natural hairlines. Expert surgeons. Personalized care.{" "}
                <br className="hidden sm:inline" />
                Take the first step toward a fuller head of hair with a quick,
                private consultation.
              </p>

              {/* 3 Trust Badges */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 lg:gap-8 pt-2">
                {/* Badge 1 */}
                <div className="flex items-center gap-3 sm:gap-2 bg-white/5 sm:bg-transparent p-2.5 sm:p-0 rounded-2xl border border-white/10 sm:border-0 backdrop-blur-sm sm:backdrop-blur-none">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-nav-dark flex items-center justify-center shrink-0 border-2 border-brand-gold">
                    <Crown className="w-7 h-7 sm:w-9 sm:h-9 text-accent-gold" />
                  </div>
                  <div>
                    <div className="text-xl font-semibold text-white leading-tight">
                      10,000+
                    </div>
                    <div className="text-base text-white/80 sm:text-white leading-tight mt-0.5">
                      Successful Procedures
                    </div>
                  </div>
                </div>

                {/* Badge 2 */}
                <div className="flex items-center gap-3 sm:gap-2 bg-white/5 sm:bg-transparent p-2.5 sm:p-0 rounded-2xl border border-white/10 sm:border-0 backdrop-blur-sm sm:backdrop-blur-none">
                  <div className="w-14 h-14 rounded-full bg-nav-dark flex items-center justify-center shrink-0 border-2 border-brand-gold">
                    <ShieldCheck className="w-9 h-9 text-accent-gold" />
                  </div>
                  <div>
                    <div className="text-xl font-semibold text-white leading-tight">
                      World-Class
                    </div>
                    <div className="text-base text-white/80 sm:text-white leading-tight mt-0.5">
                      Surgeons
                    </div>
                  </div>
                </div>

                {/* Badge 3 */}
                <div className="flex items-center gap-3 sm:gap-2 bg-white/5 sm:bg-transparent p-2.5 sm:p-0 rounded-2xl border border-white/10 sm:border-0 backdrop-blur-sm sm:backdrop-blur-none">
                  <div className="w-14 h-14 rounded-full bg-nav-dark flex items-center justify-center shrink-0 border-2 border-brand-gold">
                    <Star className="w-9 h-9 text-accent-gold fill-accent-gold" />
                  </div>
                  <div>
                    <div className="text-xl font-semibold text-white leading-tight">
                      Natural,
                    </div>
                    <div className="text-base text-white/80 sm:text-white leading-tight mt-0.5">
                      Undetectable Results
                    </div>
                  </div>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4 pt-3 sm:pt-4">
                <ModernButton
                  href={siteConfig.whatsappUrl}
                  variant="green"
                  className="w-full sm:w-auto py-4! sm:py-3! justify-center text-center shadow-lg active:scale-98"
                  icon={
                    <div className="relative w-7 h-7 sm:w-8 sm:h-8 shrink-0">
                      <Image
                        src="/whatsapp-icon.png"
                        alt="WhatsApp"
                        fill
                        sizes="32px"
                        className="object-contain transition-opacity duration-300 group-hover:opacity-0"
                      />
                      <Image
                        src="/whatsapp-icon-black.png"
                        alt="WhatsApp"
                        fill
                        sizes="32px"
                        className="object-contain absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />
                    </div>
                  }
                >
                  <span>
                    Get a Free Consultation <br /> on WhatsApp
                  </span>
                </ModernButton>

                <ModernButton
                  href="#results"
                  variant="ghost"
                  showArrow={false}
                  className="w-full sm:w-auto py-3.5! justify-center text-center border border-white/20 hover:border-white/40 active:scale-98"
                  icon={
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-current flex items-center justify-center">
                      <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                    </div>
                  }
                >
                  <span>View Real Results</span>
                </ModernButton>
              </div>
            </div>

            {/* Right Column */}
            <div
              id="quiz"
              className="lg:col-span-5 xl:col-span-5 w-full max-w-lg mx-auto lg:max-w-none mt-4 lg:mt-0 scroll-mt-28"
            >
              <HeroQuiz />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
