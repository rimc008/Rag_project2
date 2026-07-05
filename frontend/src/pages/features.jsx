import React from "react";
import { BrainCircuit, ListChecks, Highlighter, Mail } from "lucide-react";
import WhyChoose from "./whytake";


// Inline SVGs to replace the removed Lucide brand icons
const GithubIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>
);

const TwitterIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

export default function Features({ darkMode }) {
  const features = [
    {
      icon: <BrainCircuit size={24} />,
      title: "Context-Aware AI Chat",
      description: "Ask complex questions and get precise answers derived directly from the text of your uploaded documents, eliminating hallucinations."
    },
    {
      icon: <ListChecks size={24} />,
      title: "Instant Quiz Generation",
      description: "Transform dense reading materials into 10, 15, or 20-question assessments in seconds to test your knowledge and retention."
    },
    {
      icon: <Highlighter size={24} />,
      title: "Smart Summaries & Notes",
      description: "Condense hundreds of pages into bite-sized summaries and structured outlines, saving you hours of manual reading."
    }
  ];

  return (
    <div className={`font-Prata antialiased transition-colors duration-300 ${
      darkMode ? "bg-zinc-950 text-zinc-50" : "bg-white text-zinc-900"
    }`}>
      
      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">
            Unlock the power of your documents
          </h2>
          <p className={`mt-4 text-sm md:text-base max-w-2xl mx-auto ${
            darkMode ? "text-zinc-400" : "text-zinc-600"
          }`}>
            Stop reading line-by-line. Let RAGeniusAI do the heavy lifting so you can focus on understanding, learning, and applying your knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-[0.98] cursor-default ${
                darkMode 
                  ? "bg-zinc-900/30 border-zinc-700 hover:bg-zinc-900/50" 
                  : "bg-zinc-50/50 border-zinc-200 hover:bg-zinc-50"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                darkMode 
                  ? "bg-zinc-800 text-zinc-100 border border-zinc-700" 
                  : "bg-white text-zinc-900 border border-zinc-200 shadow-sm"
              }`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-2">
                {feature.title}
              </h3>
              <p className={`text-sm leading-relaxed ${
                darkMode ? "text-zinc-400" : "text-zinc-600"
              }`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div>
        <WhyChoose darkMode={darkMode}/>
      </div>


      {/* Footer Section */}
      <footer className={`border-t transition-colors ${
        darkMode ? "border-zinc-900 bg-zinc-950" : "border-zinc-100 bg-zinc-50/50"
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Brand */}
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold tracking-tight">
                RAGenius<span className={darkMode ? "text-red-400" : "text-red-500"}>AI</span>
              </h2>
            </div>

            {/* Links */}
            <div className={`flex items-center gap-6 text-sm font-medium ${
              darkMode ? "text-zinc-400" : "text-zinc-600"
            }`}>
              <a href="#" className={`${darkMode ? "hover:text-white" : "hover:text-zinc-900"} transition-colors`}>Privacy Policy</a>
              <a href="#" className={`${darkMode ? "hover:text-white" : "hover:text-zinc-900"} transition-colors`}>Terms of Service</a>
              <a href="https://wa.me/918335087150" target="_blank" className={`${darkMode ? "hover:text-white" : "hover:text-zinc-900"} transition-colors`}>Contact</a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" aria-label="GitHub" className={`p-2 rounded-lg transition-all ${
                darkMode ? "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100" : "text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900"
              }`}>
                <GithubIcon size={18} />
              </a>
              <a href="#" aria-label="Twitter" className={`p-2 rounded-lg transition-all ${
                darkMode ? "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100" : "text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900"
              }`}>
                <TwitterIcon size={18} />
              </a>
              <a href="#" aria-label="Email" className={`p-2 rounded-lg transition-all ${
                darkMode ? "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100" : "text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900"
              }`}>
                <Mail size={18} />
              </a>
            </div>
            
          </div>
          
          {/* Copyright */}
          <div className={`mt-8 text-center text-xs ${
            darkMode ? "text-zinc-600" : "text-zinc-400"
          }`}>
            &copy; {new Date().getFullYear()} RAGeniusAI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}