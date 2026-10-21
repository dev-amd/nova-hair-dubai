"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Sparkles, ChevronsLeftRight, CheckCircle2 } from "lucide-react";
import ModernButton from "./modern-button";
import { siteConfig } from "./site-config";
import FooterCTA from "./footer-cta";

const cases = [
  {
    id: 1,
    category: "Hairline",
    title: "Front Hairline & Temple Restoration",
    grafts: "2,800 Grafts • Sapphire FUE",
    time: "9 Months Post-Op",
    beforeImg: "/case1-before.png",
    afterImg: "/case1-after.png",
  },
  {
    id: 2,
    category: "Crown",
    title: "Crown Vertex Maximum Density",
    grafts: "3,200 Grafts • DHI Implantation",
    time: "12 Months Post-Op",
    beforeImg: "/case2-before.png",
    afterImg: "/case2-after.png",
  },
  {
    id: 3,
    category: "Hairline",
    title: "Receding Temples & Natural Density",
    grafts: "2,600 Grafts • Micro-FUE",
    time: "8 Months Post-Op",
    beforeImg: "/case3-before.png",
    afterImg: "/case3-after.png",
  },
  {
    id: 4,
    category: "Beard",
    title: "Full Beard & Jawline Sculpting",
    grafts: "1,500 Grafts • DHI Beard",
    time: "6 Months Post-Op",
    beforeImg: "/case4-before.png",
    afterImg: "/case4-after.png",
  },
  {
    id: 5,
    category: "Female",
    title: "Female Hairline Lowering & Parting",
    grafts: "1,900 Grafts • No-Shave DHI",
    time: "10 Months Post-Op",
    beforeImg: "/case5-before.png",
    afterImg: "/case5-after.png",
  },
];

const categories = ["All Results", "Hairline", "Crown", "Beard", "Female"];

function ComparisonCard({ item }: { item: (typeof cases)[0] }) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPos(percent);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDraggingRef.current) {
      updatePosition(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  return (
    <div className="bg-cream rounded-3xl p-5 flex flex-col justify-between group">
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative w-full aspect-square rounded-2xl overflow-hidden cursor-ew-resize touch-none select-none bg-white"
      >
        <Image
          src={item.afterImg}
          alt={`${item.title} After`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover pointer-events-none"
          priority
        />

        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <Image
            src={item.beforeImg}
            alt={`${item.title} Before`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover pointer-events-none"
            priority
          />
        </div>

        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-2xl pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-2xl flex items-center justify-center text-brand-gold">
            <ChevronsLeftRight className="w-7 h-7 stroke-[2.5]" />
          </div>
        </div>

        <div className="absolute bottom-3 left-3 pointer-events-none">
          <span className="bg-black/60 backdrop-blur-md text-white text-sm font-semibold px-2.5 py-1 rounded-full uppercase tracking-normal">
            Before
          </span>
        </div>
        <div className="absolute bottom-3 right-3 pointer-events-none">
          <span className="bg-brand-gold text-white text-sm font-semibold px-2.5 py-1 rounded-full uppercase tracking-normal">
            After
          </span>
        </div>
      </div>

      <div className="pt-5 space-y-1">
        <div className="flex flex-col items-start gap-1.5 mb-1.5">
          <span className="inline-block bg-brand-gold/90 text-white text-base font-semibold tracking-normal px-3 py-1 rounded-xl">
            {item.grafts}
          </span>
          <span className="text-sm sm:text-base font-semibold tracking-normal text-slate-600 uppercase">
            {item.time}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug">
          {item.title}
        </h3>

        <div className="flex items-center gap-1 text-sm text-brand-green font-semibold">
          <CheckCircle2 className="w-5 h-5 fill-brand-green text-white" />
          <span>100% Undetectable Natural Density</span>
        </div>
      </div>
    </div>
  );
}

export default function Results() {
  const [activeTab, setActiveTab] = useState("All Results");

  const filteredCases =
    activeTab === "All Results"
      ? cases
      : cases.filter((c) => c.category === activeTab);

  return (
    <section id="results" className="w-full bg-white py-20 sm:py-28">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="space-y-3 mb-4 sm:mb-6 text-center sm:text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold font-semibold text-lg tracking-tight">
            <Sparkles className="w-6 h-6 fill-brand-gold" />
            <span>Documented Transformations</span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tighter leading-tighter">
            Real Patients,{" "}
            <span className="text-brand-gold">Real Density.</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl font-normal">
            Drag the slider across each case to see the natural hairline angles
            and permanent fullness achieved by our senior surgeons in Dubai.
          </p>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-6 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveTab(cat)}
              className={`px-7 py-3 rounded-2xl text-lg sm:text-xl font-semibold cursor-pointer whitespace-nowrap active:scale-95 ${
                activeTab === cat
                  ? "bg-brand-gold text-white"
                  : "text-slate-700 bg-bg-light hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map((item) => (
            <ComparisonCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <FooterCTA
        className="pt-14 sm:pt-20"
        tag="Free Digital Preview"
        title={
          <>
            Want to See What Your <br className="hidden sm:inline" />
            <span className="text-accent-gold">Hairline Would Look Like?</span>
          </>
        }
        description="Send our team a confidential photo on WhatsApp. Our senior surgeons will create a customized 3D hairline graft preview for you within minutes."
        buttonText="Get Your Free Hairline Preview"
      />
    </section>
  );
}
