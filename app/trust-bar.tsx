import Image from "next/image";
import { Star } from "lucide-react";

const trustBadges = [
  { name: "Dubai Health Authority", src: "/badge-1.png" },
  { name: "ISHRS Accredited", src: "/badge-2.png" },
  { name: "American Board of Hair Restoration Surgery", src: "/badge-3.png" },
  { name: "JCI Quality Approval", src: "/badge-4.png" },
];

const patientAvatars = [
  "/avatar-1.png",
  "/avatar-2.png",
  "/avatar-3.png",
  "/avatar-4.png",
];

export default function TrustBar() {
  return (
    <section className="w-full bg-bg-light py-8 sm:py-10 lg:py-6">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="flex flex-col lg:flex-row items-center gap-5 w-full lg:w-auto">
          {/* Label */}
          <span className="text-base font-semibold text-slate-500 uppercase tracking-tight text-center lg:text-left whitespace-nowrap">
            Licensed & Accredited By
          </span>

          {/* Badges: 2x2 Grid on Mobile, 4 in a row on Desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-4 items-center gap-4 sm:gap-6 w-full sm:w-auto">
            {trustBadges.map((badge) => (
              <div
                key={badge.name}
                className="relative h-20 w-full sm:w-36 flex items-center justify-center"
              >
                <Image
                  src={badge.src}
                  alt={badge.name}
                  fill
                  sizes="(max-width: 640px) 160px, 200px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side (Patient Avatars + UAE Review Card) */}
        <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-3.5 sm:gap-4 w-full lg:w-auto pt-2 lg:pt-0">
          {/* Overlapping Avatars */}
          <div className="flex -space-x-3.5 py-0.5 shrink-0">
            {patientAvatars.map((src, index) => (
              <div
                key={index}
                className="inline-block h-14 w-14 rounded-full ring-2 ring-white shadow-sm bg-slate-200 overflow-hidden relative shrink-0"
              >
                <Image
                  src={src}
                  alt={`Patient ${index + 1}`}
                  fill
                  sizes="60px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Ratings & Patients Count */}
          <div className="leading-tight space-y-0.5">
            <p className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight">
              Trusted by 3,500+ patients in UAE
            </p>
            <div className="flex items-center justify-center sm:justify-start">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 sm:w-5 sm:h-5 fill-accent-gold text-accent-gold"
                />
              ))}
              <span className="text-sm sm:text-base font-semibold text-slate-700 ml-1">
                5.0 Rating
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
