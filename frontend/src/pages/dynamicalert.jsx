import { useEffect } from "react";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

export default function DynamicAlert({ isVisible, message, type = "info", onClose, darkMode }) {
  // Auto-close after 3 seconds
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  // Determine icon and colors based on the alert type
  const typeStyles = {
    success: {
      icon: <CheckCircle2 size={18} className="text-emerald-500" />,
      border: darkMode ? "border-emerald-500/30" : "border-emerald-500/40",
      bg: darkMode ? "bg-emerald-500/10" : "bg-emerald-50",
    },
    error: {
      icon: <AlertCircle size={18} className="text-red-500" />,
      border: darkMode ? "border-red-500/30" : "border-red-500/40",
      bg: darkMode ? "bg-red-500/10" : "bg-red-50",
    },
    info: {
      icon: <Info size={18} className={darkMode ? "text-blue-400" : "text-blue-500"} />,
      border: darkMode ? "border-blue-500/30" : "border-blue-500/40",
      bg: darkMode ? "bg-blue-500/10" : "bg-blue-50",
    },
  };

  const currentStyle = typeStyles[type];

  return (
    <div
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "-translate-y-12 opacity-0 scale-95 pointer-events-none"
      }`}
    >
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-full border shadow-xl backdrop-blur-md ${
          darkMode
            ? "bg-zinc-950/80 border-zinc-800 text-zinc-100"
            : "bg-white/80 border-zinc-200 text-zinc-900"
        }`}
      >
        {/* Subtle background glow based on type */}
        <div className={`absolute inset-0 rounded-full border ${currentStyle.border} ${currentStyle.bg} -z-10`} />

        {currentStyle.icon}

        <span className="text-sm font-medium tracking-wide pr-2">
          {message}
        </span>

        {/* Optional Manual Close Button */}
        <button
          onClick={onClose}
          className={`p-1 rounded-full transition-colors ${
            darkMode ? "hover:bg-zinc-800 text-zinc-400" : "hover:bg-zinc-100 text-zinc-500"
          }`}
        >
          <X size={14} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}