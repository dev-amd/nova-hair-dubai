import {
  MessageSquare,
  UserCheck,
  Sparkles,
  Leaf,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    step: "01",
    tag: "START HERE",
    title: "Free Consultation",
    desc: "Share your scalp photos or chat directly with our medical team on WhatsApp to evaluate your hair loss pattern.",
    icon: MessageSquare,
  },
  {
    step: "02",
    tag: "ANALYSIS",
    title: "Expert Assessment",
    desc: "Our board-certified surgeons create a tailored graft map, calculating exact follicular units for natural density.",
    icon: UserCheck,
  },
  {
    step: "03",
    tag: "TREATMENT",
    title: "Procedure Day",
    desc: "Relax in our private luxury Jumeirah suite with painless local anesthesia and microscopic follicular extraction.",
    icon: Sparkles,
  },
  {
    step: "04",
    tag: "LIFELONG",
    title: "Natural Results",
    desc: "Enjoy permanent, undetectable hair regrowth guaranteed to match your natural facial symmetry and hairline angle.",
    icon: Leaf,
  },
];

export default function ProcessSteps() {
  return (
    <section id="process" className="w-full bg-bg-light py-16 sm:py-24">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="space-y-3 mb-6 sm:mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold font-semibold text-lg tracking-tight">
            <Sparkles className="w-6 h-6" />
            <span>Seamless Patient Journey</span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tighter leading-tighter">
            Our Simple <span className="text-brand-gold">4-Step Process</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl font-normal">
            From your initial assessment to a fuller head of hair, we make every
            stage effortless, transparent, and comfortable.
          </p>
        </div>

        {/* 4 Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="group relative bg-white rounded-[30px] sm:rounded-[34px] p-6 sm:p-7 lg:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.03)] flex flex-col justify-between overflow-hidden"
              >
                <span className="absolute -right-2 -top-2 text-8xl font-black text-slate-900/5 select-none pointer-events-none">
                  {item.step}
                </span>

                {/* Card Top: Jumbo Icon & Tag */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <Icon className="h-12 w-12 sm:w-14 sm:h-14 text-brand-gold" />

                    {/* Step Pill Tag */}
                    <span className="text-base font-bold text-brand-gold bg-cream px-2.5 py-1 rounded-full uppercase">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-slate-900 tracking-tight leading-tight mb-2.5">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg sm:text-xl text-slate-500 font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Card Bottom: Micro Step Indicator */}
                <div className="pt-6 mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-brand-gold tracking-tighter">
                    Stage {item.step}
                  </span>

                  <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-white">
                    <ArrowRight className="w-6 h-6 stroke-[2.5]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
