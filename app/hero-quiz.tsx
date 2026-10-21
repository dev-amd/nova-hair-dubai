"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Lock,
  ArrowLeft,
  Check,
  Crown,
  ShieldCheck,
  User,
  Phone,
} from "lucide-react";
import ModernButton from "./modern-button";
import ModernInput from "./modern-input";
import DemoModal from "./demo-modal";

const hairLossAreas = [
  { id: "front", label: "Front Hairline", img: "/front.png" },
  { id: "crown", label: "Crown Area", img: "/crown.png" },
  { id: "both", label: "Both Areas", img: "/both.png" },
  { id: "other", label: "Other Areas", img: "/other-areas.png" },
];

const preferences = [
  {
    id: "clinic",
    badge: "MOST POPULAR",
    hasCrown: true,
    title: "In-Clinic VIP Suite (Jumeirah)",
    desc: "Private computerized scalp dermoscopy & 3D graft mapping",
  },
  {
    id: "virtual",
    badge: "REMOTE OPTION",
    hasCrown: false,
    title: "Virtual Video Consultation",
    desc: "Private high-definition video assessment from home",
  },
];

export default function HeroQuiz() {
  const [step, setStep] = useState(1);
  const [selectedArea, setSelectedArea] = useState("front");
  const [selectedStage, setSelectedStage] = useState("moderate");
  const [selectedPref, setSelectedPref] = useState("clinic");
  const [patientInfo, setPatientInfo] = useState({ name: "", phone: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const progressPercent = step * 25;

  const activeAreaObj = hairLossAreas.find((a) => a.id === selectedArea);
  const areaName = activeAreaObj ? activeAreaObj.label : "Hairline";

  const severityStages = [
    {
      id: "mild",
      badge: "1,200 – 1,800 GRAFTS",
      title: "Early Stage Thinning",
      desc: `Slight thinning at ${areaName.toLowerCase()} with preserved density elsewhere`,
    },
    {
      id: "moderate",
      badge: "2,200 – 3,200 GRAFTS",
      title: "Moderate Receding Loss",
      desc: `Clear visible recession across ${areaName.toLowerCase()}`,
    },
    {
      id: "advanced",
      badge: "3,500+ GRAFTS",
      title: "Advanced / Extensive Loss",
      desc: `Significant loss requiring maximum follicular unit restoration`,
    },
  ];

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e?: React.SyntheticEvent) => {
    if (e) e.preventDefault();
    if (!patientInfo.name || !patientInfo.phone) return;

    setIsModalOpen(true);
  };

  return (
    <div className="w-full max-w-full bg-white rounded-3xl p-4 sm:p-6">
      {/* Progress Track */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center justify-between text-base font-semibold text-slate-600">
          <div className="flex items-center gap-1.5">
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="flex items-center gap-1 text-slate-500 hover:text-slate-900 cursor-pointer active:scale-95 py-1.5 px-2.5 rounded-xl hover:bg-slate-100"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm font-medium">Back</span>
              </button>
            )}
            <span>Step {step} of 4</span>
          </div>
          <span className="text-brand-gold font-bold tracking-tight">
            {progressPercent}%
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-5 sm:h-5.5 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-brand-gold rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight tracking-tight">
              Where is your hair loss?
            </h3>
            <p className="text-base sm:text-lg text-slate-500">
              Select the main area where you notice hair loss.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 pt-1">
            {hairLossAreas.map((item) => {
              const isSelected = selectedArea === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedArea(item.id)}
                  className={`relative rounded-2xl p-2.5 text-center cursor-pointer transition-all active:scale-95 overflow-hidden flex flex-col items-center justify-between ${
                    isSelected
                      ? "bg-cream ring-2 ring-brand-gold"
                      : "bg-bg-light hover:bg-slate-100"
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-0 right-0 bg-brand-gold text-white rounded-bl-lg p-1">
                      <Check className="w-5 h-5 stroke-4" />
                    </div>
                  )}

                  <div className="relative w-full flex items-center justify-center rounded-xl overflow-hidden mb-1.5 bg-transparent">
                    <Image
                      src={item.img}
                      alt={item.label}
                      width={260}
                      height={260}
                      className="w-full h-auto lg:max-h-28 lg:w-auto object-contain pointer-events-none block"
                    />
                  </div>
                  <span className="text-base sm:text-lg font-bold text-slate-900 leading-tight mt-1.5">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="w-full pt-1 [&>button]:w-full [&>button]:block">
            <ModernButton variant="gold" onClick={handleNext}>
              <span>Next Step</span>
            </ModernButton>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight tracking-tight">
              What stage is your hair loss?
            </h3>
            <p className="text-base sm:text-lg text-slate-500">
              Estimated density requirement for{" "}
              <span className="text-brand-gold font-semibold">{areaName}</span>.
            </p>
          </div>

          <div className="space-y-5 pt-2">
            {severityStages.map((stage) => {
              const isSelected = selectedStage === stage.id;
              return (
                <div
                  key={stage.id}
                  onClick={() => setSelectedStage(stage.id)}
                  className={`relative p-6 rounded-2xl cursor-pointer transition-all active:scale-98 ${
                    isSelected
                      ? "bg-cream ring-2 ring-brand-gold"
                      : "bg-bg-light hover:bg-slate-100"
                  }`}
                >
                  <span className="absolute -top-2.5 right-3 bg-brand-gold text-white text-sm font-semibold px-2 py-0.5 rounded-full uppercase">
                    {stage.badge}
                  </span>

                  <div className="text-lg sm:text-xl font-semibold text-slate-900 tracking-tight">
                    {stage.title}
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 mt-0.5">
                    {stage.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="w-full pt-1 [&>button]:w-full [&>button]:block">
            <ModernButton variant="gold" onClick={handleNext}>
              <span>Next Step</span>
            </ModernButton>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight tracking-tight">
              Preferred Consultation?
            </h3>
            <p className="text-base sm:text-lg text-slate-500">
              Select how you prefer to speak with our specialists.
            </p>
          </div>

          <div className="space-y-5 pt-2">
            {preferences.map((pref) => {
              const isSelected = selectedPref === pref.id;
              return (
                <div
                  key={pref.id}
                  onClick={() => setSelectedPref(pref.id)}
                  className={`relative p-4 sm:p-4.5 rounded-2xl cursor-pointer transition-all active:scale-98 ${
                    isSelected
                      ? "bg-cream ring-2 ring-brand-gold"
                      : "bg-bg-light hover:bg-slate-100"
                  }`}
                >
                  {/* Floating Pill over border */}
                  <div className="absolute -top-2.5 right-3 bg-brand-gold text-white text-sm font-semibold px-2 py-0.5 rounded-full flex items-center justify-center gap-1 uppercase">
                    {pref.hasCrown && <Crown className="w-5 h-5 fill-white" />}
                    <span>{pref.badge}</span>
                  </div>

                  <div className="text-lg sm:text-xl font-semibold text-slate-900 tracking-tight">
                    {pref.title}
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 mt-0.5">
                    {pref.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="w-full pt-1 [&>button]:w-full [&>button]:block">
            <ModernButton variant="gold" onClick={handleNext}>
              <span>Final Step</span>
            </ModernButton>
          </div>
        </div>
      )}

      {step === 4 && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight tracking-tight">
              Where to send your plan?
            </h3>
            <p className="text-base sm:text-lg text-slate-500">
              Receive your personalized graft assessment directly on WhatsApp.
            </p>
          </div>

          <div className="space-y-4 pt-1">
            <ModernInput
              label="Your Full Name"
              required
              placeholder="e.g. Ahmed"
              value={patientInfo.name}
              onChange={(e) =>
                setPatientInfo({ ...patientInfo, name: e.target.value })
              }
              icon={<User className="w-6 h-6" />}
            />

            <ModernInput
              label="WhatsApp Phone Number"
              type="tel"
              required
              placeholder="+971 50 000 0000"
              value={patientInfo.phone}
              onChange={(e) =>
                setPatientInfo({ ...patientInfo, phone: e.target.value })
              }
              icon={<Phone className="w-6 h-6" />}
            />
          </div>

          <div className="w-full pt-1 [&>button]:w-full [&>button]:block">
            <ModernButton variant="green" onClick={handleSubmit}>
              <span>Get Free Assessment</span>
            </ModernButton>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 text-center">
            <ShieldCheck className="w-4 h-4 text-brand-green shrink-0" />
            <span>100% confidential. No spam guaranteed.</span>
          </div>
        </form>
      )}

      {/* Footer Security Badge */}
      <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 pt-3 mt-1">
        <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span>Your information is strictly private and encrypted.</span>
      </div>

      {/* Demo Success Modal Popup */}
      <DemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        leadData={{
          name: patientInfo.name,
          phone: patientInfo.phone,
          concern: areaName,
          detail: `${severityStages.find((s) => s.id === selectedStage)?.title} (${preferences.find((p) => p.id === selectedPref)?.title})`,
        }}
      />
    </div>
  );
}
