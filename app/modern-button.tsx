import React from "react";
import { ArrowRight } from "lucide-react";

interface ModernButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "green" | "gold" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
}

export default function ModernButton({
  children,
  icon,
  variant = "green",
  showArrow = true,
  href,
  onClick,
  className = "",
}: ModernButtonProps) {
  const themeStyles = {
    green: "bg-brand-green hover:brightness-105 text-white",
    gold: "bg-brand-gold hover:brightness-105 text-white",
    ghost:
      "bg-black/50 hover:bg-black/70 backdrop-blur-md border-2 border-white text-white",
  };

  const content = (
    <div
      className={`h-17 px-7 rounded-3xl flex items-center justify-between gap-4 cursor-pointer select-none transition-all duration-150 active:scale-95 ${themeStyles[variant]} ${className}`}
    >
      {/* Icon + Text */}
      <div className="flex items-center gap-3">
        {icon && <span className="shrink-0">{icon}</span>}
        <div className="text-left font-medium text-base leading-tight">
          {children}
        </div>
      </div>

      {showArrow && <ArrowRight className="w-6 h-6 shrink-0" />}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className="inline-block">
      {content}
    </button>
  );
}
