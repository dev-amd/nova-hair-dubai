"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  CheckCircle2,
  Quote,
} from "lucide-react";

const reviews = [
  {
    id: 1,
    tag: "2,800 Grafts • Sapphire FUE",
    resultTime: "9 Months Post-Op",
    quote:
      "I postponed this for 3 years because I was terrified of getting a fake, pluggy doll hairline. Dr. Tariq designed it so naturally that even my own brother didn't realize I had a transplant—he just thought I changed my hairstyle. 100% worth it.",
    name: "James Thornton",
    role: "British Expat • Dubai Marina",
    avatar: "/avatar-1.png",
    stars: 5,
  },
  {
    id: 2,
    tag: "3,400 Grafts • DHI Implantation",
    resultTime: "12 Months Post-Op",
    quote:
      "I was about to book a flight to Turkey, but traveling back through airports with swollen bandages sounded like a nightmare. Having Nova right here in Jumeirah meant I had my procedure done on Thursday and was back at my desk in DIFC by Monday. Best decision ever.",
    name: "David Miller",
    role: "Managing Director • DIFC, Dubai",
    avatar: "/avatar-4.png",
    stars: 5,
  },
  {
    id: 3,
    tag: "2,200 Grafts • Hairline Restoration",
    resultTime: "6 Months Post-Op",
    quote:
      "Being in front of clients every day, my receding hairline was killing my confidence. The single-hair micro feathered technique they used is undetectable. My barber literally stared at it and asked for Nova's contact number.",
    name: "Ahmed Al-Sayed",
    role: "Tech Entrepreneur • Dubai",
    avatar: "/avatar-3.png",
    stars: 5,
  },
  {
    id: 4,
    tag: "3,100 Grafts • High-Density FUE",
    resultTime: "10 Months Post-Op",
    quote:
      "The discrete VIP entrance in Jumeirah and the 5-star standard made this effortless. They only book a couple of patients a day, so you get 100% of their focus. Permanent natural density.",
    name: "Marcus Vance",
    role: "Investor • Miami / Dubai",
    avatar: "/avatar-2.png",
    stars: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const visibleReviews = [
    reviews[currentIndex % reviews.length],
    reviews[(currentIndex + 1) % reviews.length],
    reviews[(currentIndex + 2) % reviews.length],
  ];

  return (
    <section id="reviews" className="w-full bg-bg-light py-16 sm:py-24">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-6 sm:mb-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold font-semibold text-lg tracking-tight">
              <Quote className="w-6 h-6 fill-brand-gold" />
              <span>Real Transformations</span>
            </div>

            <h2 className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tighter leading-tighter">
              “I Only Wish I Had <br className="hidden sm:inline" />
              <span className="text-brand-gold">Done This 5 Years Ago.</span>”
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl font-normal">
              Read how senior surgeon-led hair restoration transformed
              confidence for over 3,500+ patients in the UAE.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous review"
              className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-slate-700 hover:bg-brand-gold hover:text-white cursor-pointer"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next review"
              className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-slate-700 hover:bg-brand-gold hover:text-white cursor-pointer"
            >
              <ChevronRight className="w-12 h-12" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleReviews.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-4xl sm:rounded-[38px] p-7 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 fill-accent-gold text-accent-gold"
                      />
                    ))}
                  </div>

                  <span className="text-base font-semibold tracking-normal text-slate-400 uppercase">
                    {item.resultTime}
                  </span>
                </div>

                <div className="inline-block bg-cream text-brand-gold text-base font-semibold tracking-normal px-3 py-1 rounded-xl mb-4">
                  {item.tag}
                </div>

                <p className="text-lg sm:text-xl text-slate-700 leading-normal font-normal mb-8">
                  {item.quote}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 right-0 rounded-full">
                    <CheckCircle2 className="w-5 h-5 fill-brand-green text-white" />
                  </div>
                </div>

                <div className="leading-tight">
                  <div className="flex items-center">
                    <h4 className="text-xl font-semibold text-slate-900 tracking-tight">
                      {item.name}
                    </h4>
                  </div>
                  <p className="text-base font-medium text-slate-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
