"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Clock,
  ShieldCheck,
  User,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import ModernButton from "./modern-button";
import ModernInput from "./modern-input";
import DemoModal from "./demo-modal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    treatment: "Front Hairline Restoration",
    type: "In-Clinic VIP Suite (Jumeirah)",
    message: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e?: React.SyntheticEvent) => {
    if (e) e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Popup Modal khol do:
    setIsModalOpen(true);
  };

  return (
    <section id="contact" className="w-full bg-bg-light py-16 sm:py-24">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 space-y-7">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold font-semibold text-lg tracking-tight">
                <Sparkles className="w-6 h-6" />
                <span>Private & Confidential</span>
              </div>

              <h2 className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tighter leading-tighter">
                Schedule Your VIP <br className="hidden sm:inline" />
                <span className="text-brand-gold">Hair Consultation</span>
              </h2>

              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl font-normal">
                Speak directly with our senior surgeons. Receive a computerized
                hair density analysis and an exact graft estimate with complete
                discretion.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-6 rounded-3xl bg-white">
                <div className="w-16 h-16 rounded-2xl bg-cream text-brand-gold flex items-center justify-center shrink-0">
                  <MapPin className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 tracking-tight leading-tight">
                    Jumeirah Flagship Clinic
                  </h4>
                  <p className="text-lg text-slate-600 font-medium leading-snug">
                    Villa 42, Jumeirah Beach Road, Jumeirah 2, Dubai, UAE
                  </p>
                </div>
              </div>

              {/* Direct Phone & WhatsApp */}
              <div className="flex items-start gap-4 p-6 rounded-3xl bg-white">
                <div className="w-16 h-16 rounded-2xl bg-brand-green/15 text-brand-green flex items-center justify-center shrink-0">
                  <Phone className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 tracking-tight leading-tight">
                    Direct VIP WhatsApp Line
                  </h4>
                  <p className="text-lg text-slate-600 font-medium leading-snug">
                    +971 4 348 8920 • 7 Days a week priority response
                  </p>
                </div>
              </div>

              {/* Hours & Valet */}
              <div className="flex items-start gap-4 p-6 rounded-3xl bg-white">
                <div className="w-16 h-16 rounded-2xl bg-black/15 text-slate-700 flex items-center justify-center shrink-0">
                  <Clock className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 tracking-tight leading-tight">
                    Hours & Discretion
                  </h4>
                  <p className="text-lg text-slate-600 font-medium leading-snug">
                    Mon – Sat: 9:00 AM – 8:00 PM • Free Private Valet Parking
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Pill */}
            <div className="flex items-center gap-1.5 pt-1 text-sm font-medium text-slate-500">
              <ShieldCheck className="w-5 h-5 text-brand-gold shrink-0" />
              <span>100% Medical Confidentiality under DHA Regulations</span>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="lg:col-span-7 bg-white rounded-4xl p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1 mb-4">
                <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight tracking-tight">
                  Book A Priority Consult
                </h3>
                <p className="text-lg sm:text-xl text-slate-500">
                  Share your details below to check senior surgeon availability.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <ModernInput
                  label="Full Name"
                  required
                  placeholder="e.g. Ahmed"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  icon={<User className="w-6 h-6" />}
                />

                <ModernInput
                  label="WhatsApp Number"
                  type="tel"
                  required
                  placeholder="+971 50 000 0000"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  icon={<Phone className="w-6 h-6" />}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-base sm:text-lg font-bold text-slate-800 tracking-tight">
                    Area of Concern
                  </label>
                  <div className="relative">
                    <select
                      id="area-of-concern"
                      value={formData.treatment}
                      onChange={(e) =>
                        setFormData({ ...formData, treatment: e.target.value })
                      }
                      className="w-full h-18 px-5 pr-12 rounded-2xl bg-bg-light border-2 border-transparent text-slate-900 text-base sm:text-lg font-semibold transition-all duration-200 outline-none focus:bg-white focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/15 appearance-none cursor-pointer"
                    >
                      <option value="Front Hairline Restoration">
                        Front Hairline Restoration
                      </option>
                      <option value="Crown / Vertex Thinning">
                        Crown / Vertex Thinning
                      </option>
                      <option value="Complete Head Restoration">
                        Complete Head Restoration
                      </option>
                      <option value="Beard & Mustache Transplant">
                        Beard & Mustache Transplant
                      </option>
                      <option value="Previous Transplant Correction">
                        Previous Transplant Correction
                      </option>
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-base sm:text-lg font-bold text-slate-800 tracking-tight">
                    Consultation Type
                  </label>
                  <div className="relative">
                    <select
                      id="consultation-type"
                      value={formData.type}
                      onChange={(e) =>
                        setFormData({ ...formData, type: e.target.value })
                      }
                      className="w-full h-18 px-5 pr-12 rounded-2xl bg-bg-light border-2 border-transparent text-slate-900 text-base sm:text-lg font-semibold transition-all duration-200 outline-none focus:bg-white focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/15 appearance-none cursor-pointer"
                    >
                      <option value="In-Clinic VIP Suite (Jumeirah)">
                        In-Clinic VIP Suite (Jumeirah)
                      </option>
                      <option value="Virtual Video Consultation">
                        Virtual Video Consultation
                      </option>
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Row 3: Notes Textarea */}
              <div className="space-y-2">
                <label className="block text-base sm:text-lg font-bold text-slate-800 tracking-tight">
                  Additional Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Share any past surgeries, specific questions, or medical notes..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full p-5 sm:p-6 rounded-2xl bg-bg-light border-2 border-transparent text-slate-900 text-lg sm:text-xl font-semibold placeholder:text-slate-400 placeholder:font-normal transition-all duration-200 outline-none focus:bg-white focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/15 resize-none"
                />
              </div>

              <div className="pt-2 w-full [&>button]:w-full [&>button]:block">
                <ModernButton
                  variant="green"
                  onClick={handleSubmit}
                  showArrow={true}
                  icon={
                    <div className="relative w-7 h-7 shrink-0">
                      <Image
                        src="/whatsapp-icon.png"
                        alt="WhatsApp"
                        fill
                        sizes="28px"
                        className="object-contain"
                      />
                    </div>
                  }
                >
                  <span>Confirm Consultation on WhatsApp</span>
                </ModernButton>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Demo Success Modal Popup */}
      <DemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        leadData={{
          name: formData.name,
          phone: formData.phone,
          concern: formData.treatment,
          detail: `${formData.type}${formData.message ? ` • "${formData.message}"` : ""}`,
        }}
      />
    </section>
  );
}
