import { FileText, AlignLeft, ListChecks, Hash, X } from "lucide-react";

export default function AiSummaryView({ darkMode, summaryData, showsummary,setShowsummary ,aisummary
}) {

    
  // Mock data updated to reflect a PDF document summary
  const internalMockData = {
    mainSummary: aisummary[0].mainSummary,
    keyTakeaways: aisummary[0].keyTakeaways.map((item) => (item)),
    keyTopics: aisummary[0].keyTopics.map((item) => (item))
  };

  // Use passed-in data if available, otherwise use the internal mock data
  const data = summaryData || internalMockData;

  const onClose = () => {

    console.log("inside onclose");    
    setShowsummary(!showsummary);
  }

  return (
    // Base layout: using font-Prata and antialiased matching Quiz10
    <div className={`p-8 font-Prata antialiased  transition-colors duration-300 ${
      darkMode 
        ? "bg-zinc-950 text-zinc-50 selection:bg-zinc-800" 
        : "bg-white text-zinc-900 selection:bg-zinc-200"
    }`}>
      
      {/* Header Module */}
      <header className={`flex justify-between border-t pt-8 items-start gap-4 mb-10 pb-6 border-b ${
        darkMode ? 'border-zinc-900' : 'border-zinc-200'
      }`}>
        <div className="flex items-center gap-3">
          <div className={`p-2.5 rounded-xl border ${
            darkMode ? "border-zinc-800 bg-zinc-900 text-zinc-300" : "border-zinc-200 bg-zinc-50 text-zinc-700"
          }`}>
            <FileText size={20} />
          </div>
          <div>
            <h2 className="text-2xl font-black tracking-tight">
              Document<span className={darkMode ? "text-red-400 font-semibold" : "text-red-500 font-semibold"}> Summary</span>
            </h2>
            <p className={`text-xs mt-1 font-mono ${darkMode ? "text-zinc-500" : "text-zinc-400"}`}>
              AI-generated extraction from the parsed PDF.
            </p>
          </div>
        </div>

        {/* Dynamic Close Button */}
        <button
          onClick={onClose}
          className={`p-2 rounded-xl border transition-all cursor-pointer ${
            darkMode 
              ? "border-zinc-800 hover:bg-zinc-900 text-zinc-500 hover:text-zinc-100" 
              : "border-zinc-200 hover:bg-zinc-50 text-zinc-400 hover:text-zinc-800"
          }`}
        >
          <X size={18} />
        </button>
      </header>

      {/* Main Content Area */}
      <section className="space-y-10">
        
        {/* Core Analysis */}
        <div className={`border rounded-2xl p-6 ${
          darkMode ? "bg-zinc-900/30 border-zinc-800" : "bg-zinc-50 border-zinc-200"
        }`}>
          <div className="flex items-center gap-2 mb-4">
            <AlignLeft size={16} className={darkMode ? "text-zinc-300" : "text-zinc-700"} />
            <h3 className="text-lg font-bold tracking-tight">Executive Abstract</h3>
          </div>
          <p className={`text-sm leading-relaxed ${darkMode ? "text-zinc-300" : "text-zinc-700"}`}>
            {data.mainSummary}
          </p>
        </div>

        {/* Two-Column Grid Setup */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Column 1: Key Takeaways */}
          <div className={`border rounded-2xl p-6 transition-all ${
            darkMode 
              ? "bg-zinc-900/20 border-zinc-800" 
              : "bg-white border-zinc-200 shadow-sm"
          }`}>
            <div className="flex items-center gap-2.5">
              <ListChecks size={16} className={darkMode ? "text-zinc-400" : "text-zinc-600"} />
              <h4 className="text-base font-bold tracking-tight">Key Takeaways</h4>
            </div>
            <ul className="mt-5 space-y-3.5">
              {data.keyTakeaways.map((point, index) => (
                <li key={index} className={`flex items-start gap-3 p-3.5 rounded-xl text-xs border leading-relaxed ${
                  darkMode
                    ? "bg-zinc-900/50 text-zinc-300 border-zinc-800"
                    : "bg-zinc-50/50 text-zinc-700 border-zinc-200"
                }`}>
                  <span className={`text-[10px] font-mono font-bold mt-0.5 px-2 py-0.5 rounded border ${
                    darkMode ? "bg-zinc-800 border-zinc-700 text-zinc-400" : "bg-white border-zinc-300 text-zinc-500"
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Key Topics */}
          <div className={`border rounded-2xl p-6 transition-all ${
            darkMode 
              ? "bg-zinc-900/20 border-zinc-800" 
              : "bg-white border-zinc-200 shadow-sm"
          }`}>
            <div className="flex items-center gap-2.5">
              <Hash size={16} className={darkMode ? "text-zinc-400" : "text-zinc-600"} />
              <h4 className="text-base font-bold tracking-tight">Key Topics & Entities</h4>
            </div>
            <ul className="mt-5 space-y-3.5">
              {data.keyTopics.map((topic, index) => (
                <li key={index} className={`flex items-center gap-3 p-3.5 rounded-xl text-xs border leading-relaxed ${
                  darkMode
                    ? "bg-zinc-900/30 text-zinc-300 border-zinc-800/60"
                    : "bg-zinc-50/30 text-zinc-700 border-zinc-200/60"
                }`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${darkMode ? 'bg-zinc-600' : 'bg-zinc-400'}`} />
                  <span className="flex-1">{topic}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </section>

      {/* Footer / CTA */}
      <footer className={`mt-16 flex justify-center border-t pt-8 ${darkMode ? "border-zinc-900" : "border-zinc-200"}`}>
        <button
          onClick={onClose}
          className={`px-12 py-5 rounded-xl font-bold hover:scale-95 shadow-xl cursor-pointer transition-all text-sm tracking-wide ${
            darkMode
              ? "bg-zinc-100 hover:bg-zinc-200 text-zinc-950"
              : "bg-zinc-950 hover:bg-zinc-900 text-white"
          }`}
        >
          Close Summary
        </button>
      </footer>
    </div>
  );
}