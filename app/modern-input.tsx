import React from "react";

interface ModernInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export default function ModernInput({
  label,
  error,
  icon,
  required,
  className = "",
  id,
  ...props
}: ModernInputProps) {
  const inputId =
    id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

  return (
    <div className="w-full space-y-2">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-base sm:text-lg font-bold text-slate-800 tracking-tight"
        >
          {label}
          {required && (
            <span className="text-brand-gold ml-1 text-2xl">*</span>
          )}
        </label>
      )}

      {/* Input Field Container */}
      <div className="relative flex items-center">
        {icon && (
          <div className="absolute left-4.5 pointer-events-none text-slate-400">
            {icon}
          </div>
        )}

        <input
          id={inputId}
          required={required}
          className={`w-full h-18 ${
            icon ? "pl-12" : "px-5 sm:px-6"
          } pr-5 rounded-2xl bg-bg-light border-2 border-transparent text-slate-900 text-lg sm:text-xl font-semibold placeholder:text-slate-400 placeholder:font-normal transition-all duration-200 outline-none focus:bg-white focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/15 ${
            error ? "border-red-500! bg-red-50/30!" : ""
          } ${className}`}
          {...props}
        />
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-xs sm:text-sm font-semibold text-red-500 mt-1 pl-1">
          {error}
        </p>
      )}
    </div>
  );
}
