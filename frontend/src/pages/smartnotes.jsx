import { BookOpen, Tag, ChevronRight, X, Clock } from "lucide-react";

export default function SmartNotesView({ 
  darkMode, 
  notesData, 
  showNotes, 
  setShowNotes,ainotes 
}) {
    
  // Mock data tailored for structured "Smart Notes"
  const internalMockData = {
    documentTitle: ainotes.documentTitle,
    tags: ainotes.tags.map((item2) => (item2)),
    sections: ainotes.section.map((item) => ({
        heading: item.heading,
        bullets: item.bullets.map((item1) => (item1))
      }))      
  };

  // Use passed-in data if available, otherwise use the internal mock data
  const data = notesData || internalMockData;

  const onClose = () => {
    console.log("closing smart notes");    
    setShowNotes(false);
  };

  return (
    // Base layout: font-Prata, antialiased, matching your established theme
    <div className={`p-8 font-Prata antialiased transition-colors duration-300 ${
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
            <BookOpen size={20} />
          </div>
          <div>
            <h2 className="text-2xl font-black tracking-tight">
              Smart<span className={darkMode ? "text-red-500 font-semibold" : "text-red-500 font-bold"}> Notes</span>
            </h2>
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
      <section className="space-y-8">
        
        {/* Document Context & Tags */}
        <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 border rounded-2xl ${
          darkMode ? "bg-zinc-900/10 border-zinc-800/50" : "bg-zinc-50/50 border-zinc-200/50"
        }`}>
          <div>
            <span className={`text-[10px] font-mono tracking-widest uppercase ${darkMode ? "text-zinc-500" : "text-zinc-400"}`}>
              Source Document
            </span>
            <h3 className="text-lg font-bold mt-1 tracking-tight">{data.documentTitle}</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {data.tags.map((tag, index) => (
              <span key={index} className={`flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-mono font-bold uppercase rounded-lg border ${
                darkMode 
                  ? "bg-zinc-900 border-zinc-800 text-zinc-400" 
                  : "bg-white border-zinc-200 text-zinc-500"
              }`}>
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Notes Sections Stack */}
        <div className="space-y-6">
          {data.sections.map((section, sIndex) => (
            <div 
              key={sIndex} 
              className={`border rounded-2xl p-6 transition-all ${
                darkMode 
                  ? "bg-zinc-900/20 border-zinc-800 hover:bg-zinc-900/40" 
                  : "bg-white border-zinc-200 shadow-sm hover:shadow-md"
              }`}
            >
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-dashed border-zinc-500/20">
                <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md border ${
                  darkMode ? "bg-zinc-800 border-zinc-700 text-zinc-300" : "bg-zinc-100 border-zinc-200 text-zinc-600"
                }`}>
                  {String(sIndex + 1).padStart(2, '0')}
                </span>
                <h4 className="text-base font-bold tracking-tight">{section.heading}</h4>
              </div>
              
              <ul className="space-y-4 pl-1">
                {section.bullets.map((bullet, bIndex) => (
                  <li key={bIndex} className="flex items-start gap-3">
                    <ChevronRight 
                      size={14} 
                      className={`mt-0.5 flex-shrink-0 ${darkMode ? "text-zinc-600" : "text-zinc-400"}`} 
                    />
                    <p className={`text-sm leading-relaxed ${darkMode ? "text-zinc-300" : "text-zinc-700"}`}>
                      {bullet}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
          Close Notes
        </button>
      </footer>
    </div>
  );
}