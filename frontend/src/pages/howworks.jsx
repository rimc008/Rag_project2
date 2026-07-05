import { UploadCloud, Database, MessageSquareText, Sparkles, ArrowRight, ArrowDown } from "lucide-react";

export default function HowItWorks({ darkMode }) {
  const steps = [
    {
      id: 1,
      title: "Upload your PDF",
      description: "Securely upload your document to your local workspace.",
      icon: UploadCloud,
    },
    {
      id: 2,
      title: "AI Indexes the Document",
      description: "Our RAG engine processes and structures the content instantly.",
      icon: Database,
    },
    {
      id: 3,
      title: "Ask Questions Naturally",
      description: "Chat with your PDF to find exact answers and context.",
      icon: MessageSquareText,
    },
    {
      id: 4,
      title: "Generate & Learn",
      description: "Create smart summaries, outlines, and custom quizzes.",
      icon: Sparkles,
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
            How It Works
          </h2>
          <p className={`text-sm md:text-base max-w-xl mx-auto ${
            darkMode ? "text-zinc-400" : "text-zinc-600"
          }`}>
            Transform static documents into interactive learning experiences in four simple steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex flex-col items-center text-center group transition-all">
              
              {/* Icon Container */}
              <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center mb-6 shadow-sm transition-all duration-300 group-hover:-translate-y-1 ${
                darkMode 
                  ? "bg-zinc-900/50 border-zinc-800 text-zinc-100 group-hover:border-zinc-600" 
                  : "bg-zinc-50 border-zinc-200 text-zinc-900 group-hover:border-zinc-400"
              }`}>
                <step.icon size={28} strokeWidth={1.5} />
                
                {/* Step Number Badge */}
                <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border ${
                  darkMode 
                    ? "bg-zinc-800 border-zinc-700 text-zinc-300" 
                    : "bg-white border-zinc-200 text-zinc-700 shadow-sm"
                }`}>
                  {step.id}
                </div>
                
              </div>

              {/* Text Content */}
              <h3 className={`text-lg font-bold tracking-tight mb-2 ${
                darkMode ? "text-zinc-100" : "text-zinc-900"
              }`}>
                {step.title}
              </h3>
              <p className={`text-sm px-2 leading-relaxed ${
                darkMode ? "text-zinc-500" : "text-zinc-600"
              }`}>
                {step.description}
              </p>

              {/* Connecting Arrows (Hidden on last item) */}
              {index !== steps.length - 1 && (
                <>
                  {/* Desktop Right Arrow */}
                  <div className={`hidden md:block absolute top-8 -right-4 translate-x-1/2 -translate-y-1/2 ${
                    darkMode ? "text-zinc-800" : "text-zinc-200"
                  }`}>
                    <ArrowRight size={24} />
                  </div>
                  {/* Mobile Down Arrow */}
                  <div className={`block md:hidden mt-8 ${
                    darkMode ? "text-zinc-800" : "text-zinc-200"
                  }`}>
                    <ArrowDown size={24} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}