import { FileSearch, Brain, ListChecks, Zap } from "lucide-react";

export default function WhatYouGet({ darkMode }) {
  const outcomes = [
    {
      id: 1,
      title: "Accurate Understanding",
      description: "AI answers using strictly your uploaded document. No hallucinations.",
      icon: FileSearch,
    },
    {
      id: 2,
      title: "Smart Study Assistant",
      description: "Learn faster with auto-generated summaries and highly organized notes.",
      icon: Brain,
    },
    {
      id: 3,
      title: "Automatic Quizzes",
      description: "Test your knowledge instantly with custom assessments built from your text.",
      icon: ListChecks,
    },
    {
      id: 4,
      title: "Fast Retrieval",
      description: "Find exact information in seconds instead of scrolling through hundreds of pages.",
      icon: Zap,
    },
  ];

  return (
    <section className={`py-24 px-6 border-t font-Prata transition-colors duration-300 ${
      darkMode ? "bg-zinc-950 border-zinc-900" : "bg-white border-zinc-100"
    }`}>
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className={`text-3xl md:text-4xl font-black tracking-tight ${
            darkMode ? "text-zinc-50" : "text-zinc-900"
          }`}>
            What You Get
          </h2>
          <p className={`text-sm md:text-base max-w-xl mx-auto ${
            darkMode ? "text-zinc-400" : "text-zinc-600"
          }`}>
            Stop reading. Start understanding. Your AI workspace is built to deliver immediate, actionable results.
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((outcome) => (
            <div 
              key={outcome.id} 
              className={`flex flex-col p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                darkMode 
                  ? "bg-zinc-900/40 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60 shadow-black/20" 
                  : "bg-zinc-50/50 border-zinc-200 hover:border-zinc-300 hover:bg-white shadow-zinc-200/50"
              }`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 shadow-sm ${
                darkMode 
                  ? "bg-zinc-800/80 border-zinc-700 text-zinc-100" 
                  : "bg-white border-zinc-200 text-zinc-900"
              }`}>
                <outcome.icon size={22} strokeWidth={1.5} />
              </div>

              {/* Text */}
              <h3 className={`text-lg font-bold tracking-tight mb-2 ${
                darkMode ? "text-zinc-100" : "text-zinc-900"
              }`}>
                {outcome.title}
              </h3>
              <p className={`text-sm leading-relaxed ${
                darkMode ? "text-zinc-400" : "text-zinc-600"
              }`}>
                {outcome.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}