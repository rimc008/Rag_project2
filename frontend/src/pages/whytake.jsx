import { CheckCircle2 } from "lucide-react";

export default function WhyChoose({ darkMode }) {
  const benefits = [
    "AI-powered semantic search for deep context",
    "Answers strictly grounded in your document",
    "Zero unnecessary hallucinations or guesswork",
    "Beautiful, responsive, and distraction-free interface",
    "Optimized for high-volume readers and researchers"
  ];

  return (
    <section className={`py-24 px-6 border-t font-Prata transition-colors duration-300 ${
      darkMode ? "bg-zinc-950 border-zinc-900" : "bg-white border-zinc-100"
    }`}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Section Header */}
        <div className="space-y-6">
          <h2 className={`text-3xl md:text-5xl font-black tracking-tight leading-tight ${
            darkMode ? "text-zinc-50" : "text-zinc-900"
          }`}>
            Why Choose <br/>
            <span className={darkMode ? "text-red-400" : "text-red-500"}>RAGenius AI?</span>
          </h2>
          <p className={`text-base max-w-md leading-relaxed ${
            darkMode ? "text-zinc-400" : "text-zinc-600"
          }`}>
            We built RAGenius to bridge the gap between static text and interactive knowledge. 
            No fluff, just precise answers extracted directly from your own data.
          </p>
        </div>

        {/* Right: Benefits List */}
        <div className={`p-8 rounded-3xl border shadow-sm ${
          darkMode ? "bg-zinc-900/30 border-zinc-800" : "bg-zinc-50/50 border-zinc-200"
        }`}>
          <ul className="space-y-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-4 group">
                <div className={`mt-0.5 rounded-full transition-colors ${
                  darkMode ? "text-emerald-400 group-hover:text-emerald-300" : "text-emerald-600 group-hover:text-emerald-500"
                }`}>
                  <CheckCircle2 size={22} strokeWidth={2} />
                </div>
                <span className={`text-sm md:text-base font-medium leading-relaxed ${
                  darkMode ? "text-zinc-300 group-hover:text-zinc-100" : "text-zinc-700 group-hover:text-zinc-900"
                }`}>
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}