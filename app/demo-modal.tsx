"use client";

import { useEffect } from "react";
import Image from "next/image";
import { CheckCircle2, X, User, Phone, MapPin, BarChart2 } from "lucide-react";
import { siteConfig } from "./site-config";
import ModernButton from "./modern-button";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  leadData?: {
    name?: string;
    phone?: string;
    concern?: string;
    detail?: string;
  };
}

export default function DemoModal({
  isOpen,
  onClose,
  leadData,
}: DemoModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const developerPitchUrl = siteConfig.getDeveloperPitchUrl(leadData?.name);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-100 flex items-center justify-center p-4 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-white rounded-4xl sm:rounded-[40px] p-5 sm:p-7 space-y-4 animate-in zoom-in-95 duration-200 text-center"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-14 h-14 rounded-full hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 cursor-pointer"
        >
          <X className="w-7 h-7" />
        </button>

        {/* Success Icon */}
        <div className="mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-11 h-11 sm:w-13 sm:h-13 text-brand-gold" />
        </div>

        {/* Heading */}
        <div className="space-y-1.5">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tighter leading-tighter">
            Demo Lead Captured!
          </h3>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-sm mx-auto">
            In the live clinic version, this patient inquiry instantly routes to
            your clinic&apos;s <strong>reception WhatsApp</strong> and logs into
            your staff dashboard.
          </p>
        </div>

        {/* Lead Data Summary Box */}
        {leadData && (
          <div className="p-4 rounded-2xl bg-bg-light text-left text-sm space-y-1.5 text-slate-700">
            <div className="font-bold text-slate-900 text-base tracking-tight mb-1">
              Sample Patient Payload:
            </div>
            {leadData.name && (
              <div className="flex items-center gap-1.5 text-slate-900 mb-1">
                <User className="w-5 h-5 text-brand-gold shrink-0" />
                <span>
                  <strong>Name:</strong> {leadData.name}
                </span>
              </div>
            )}
            {leadData.phone && (
              <div className="flex items-center gap-1.5 text-slate-900 mb-1">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <span>
                  <strong>WhatsApp:</strong> {leadData.phone}
                </span>
              </div>
            )}
            {leadData.concern && (
              <div className="flex items-center gap-1.5 text-slate-900 mb-1">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0" />
                <span>
                  <strong>Area:</strong> {leadData.concern}
                </span>
              </div>
            )}
            {leadData.detail && (
              <div className="flex items-center gap-1.5 text-slate-900">
                <BarChart2 className="w-5 h-5 text-brand-gold shrink-0" />
                <span>
                  <strong>Estimate:</strong> {leadData.detail}
                </span>
              </div>
            )}
          </div>
        )}

        {/* CTA to Hire You */}
        <div className="space-y-2">
          <div className="w-full [&>button]:w-full [&>button]:block [&>a]:w-full [&>a]:block">
            <ModernButton
              href={developerPitchUrl}
              variant="green"
              icon={
                <div className="relative w-6 h-6 shrink-0">
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
              <span>Get This Site For Your Clinic</span>
            </ModernButton>
          </div>

          <button
            onClick={onClose}
            className="text-sm font-semibold text-slate-400 hover:text-slate-700 cursor-pointer pt-1.5"
          >
            ← Continue Exploring Demo
          </button>
        </div>
      </div>
    </div>
  );
}
