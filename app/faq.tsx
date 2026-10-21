"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Will my hairline look completely natural under bright Dubai sunlight?",
    a: "100% yes. We exclusively implant fine single-hair follicular units along the front hairline at gentle natural angles (10° to 15°). No straight ruler lines and no pluggy doll hair. Even under direct desert sunlight, your new hairline is completely undetectable.",
  },
  {
    q: "How does recovery work with the Dubai heat, gym, and swimming?",
    a: "You can comfortably return to light air-conditioned office work within 48 to 72 hours. We advise skipping intense gym workouts, direct sun exposure, and pool or beach swimming for the first 10 to 14 days while the sapphire micro-incisions heal.",
  },
  {
    q: "Why choose Nova in Jumeirah over flying to Istanbul or Turkey?",
    a: "Low-cost medical tourism packages often pass patients off to unlicensed technicians in high-volume clinics with zero legal recourse. At Nova, senior board-certified surgeons perform the surgery under strict Dubai Health Authority (DHA) safety regulations—with lifelong in-person aftercare right here in the UAE.",
  },
  {
    q: "Is the procedure painful? How will I feel during the day?",
    a: "Virtually painless. We administer localized anesthesia so you feel comfortable from start to finish. Our patients spend their day in a private luxury VIP suite in Jumeirah, relaxing, watching Netflix, or answering work emails on high-speed Wi-Fi.",
  },
  {
    q: "When will I see my final density and full results?",
    a: "New hair begins sprouting around Months 3 to 4. By Month 6, you will notice dramatic coverage. Your full, permanent, thick density matures between Month 9 and 12, perfectly blending with your natural hair.",
  },
  {
    q: "Are the transplanted hairs guaranteed to be permanent?",
    a: "Yes. Grafts are extracted exclusively from your genetic 'safe donor zone' at the back of your head. These follicles are biologically immune to DHT (the hormone responsible for genetic balding) and continue growing naturally for the rest of your life.",
  },
];

export default function FAQ() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <section id="faq" className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="space-y-3 mb-6 sm:mb-10 text-center sm:text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold font-semibold text-lg tracking-tight">
            <HelpCircle className="w-6 h-6" />
            <span>Clear Answers, Zero Doubts</span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tighter leading-tighter">
            Frequently Asked <span className="text-brand-gold">Questions</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl font-normal">
            Everything you need to know about surgeon-led hair restoration in
            Jumeirah, Dubai.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-start">
          {faqs.map((item, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                key={index}
                className={`rounded-3xl p-6 sm:p-7 ${
                  isOpen
                    ? "bg-bg-light ring ring-brand-gold"
                    : "bg-bg-light hover:bg-slate-100"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <span className="text-2xl font-medium text-slate-900 tracking-tight leading-snug">
                    {item.q}
                  </span>

                  <div>
                    {isOpen ? (
                      <Minus className="w-10 h-10" />
                    ) : (
                      <Plus className="w-10 h-10" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-4 text-xl text-slate-600 font-normal leading-normal">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
