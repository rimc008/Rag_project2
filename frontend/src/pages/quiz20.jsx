import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sun, Moon, ArrowLeft, CheckCircle2, XCircle, RefreshCw, Layers } from "lucide-react";

export default function Quiz20({ darkMode: externalDarkMode,quizQuestions1 }) {
  const [localDarkMode, setLocalDarkMode] = useState(true);
  const darkMode = externalDarkMode !== undefined ? externalDarkMode : localDarkMode;

  // Mock array simulating a streamlined 10-question context stream 
  const quizQuestions = quizQuestions1.map((item,i) => ({
    id: i + 1,
    question: item.question,
    options: [
      item.options.A,
      item.options.B,
      item.options.C,
      item.options.D
    ],
    correctAnswer: (item.answer === "A") ? 0 : ((item.answer === "B")? 1 : ((item.answer === "C")? 2 : 3)) 
  }));

  // State Management
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleOptionSelect = (questionId, optionIndex) => {
    if (quizSubmitted) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: optionIndex
    });
  };

  const totalAnswered = Object.keys(selectedAnswers).length;
  const progressPercentage = (totalAnswered / quizQuestions.length) * 100;

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) score++;
    });
    return score;
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
  };

  return (
    <div className={`min-h-screen font-Prata antialiased transition-colors duration-300 ${
      darkMode 
        ? "bg-zinc-950 text-zinc-50 selection:bg-zinc-800" 
        : "bg-white text-zinc-900 selection:bg-zinc-200"
    }`}>
      
      {/* Sticky Top Progress Header Module */}
      <div className={`sticky top-0 z-50 border-b backdrop-blur-md transition-colors ${
        darkMode ? "border-zinc-900 bg-zinc-950/90" : "border-zinc-100 bg-white/90"
      }`}>
        <nav className="flex justify-between items-center px-6 md:px-12 py-4">
          <div className="flex items-center gap-4">
            <NavLink to="/" className={`p-2 rounded-xl border transition-all ${
              darkMode ? "border-zinc-800 hover:bg-zinc-900 text-zinc-400" : "border-zinc-200 hover:bg-zinc-50 text-zinc-600"
            }`}>
              <ArrowLeft size={18} />
            </NavLink>
            <h1 className="text-xl font-bold tracking-tight">
              RAGenius<span className={darkMode ? "text-zinc-500 font-normal" : "text-zinc-400 font-normal"}>AI</span>
            </h1>
          </div>

          <div className="flex items-center gap-4">
            {externalDarkMode === undefined && (
              <button
                onClick={() => setLocalDarkMode(!localDarkMode)}
                className={`p-2 rounded-xl border transition-all ${
                  darkMode ? "border-zinc-800 bg-zinc-900 text-zinc-400" : "border-zinc-200 bg-zinc-50 text-zinc-600"
                }`}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <div className={`flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border font-mono ${
              darkMode ? "border-zinc-800 bg-zinc-900 text-zinc-400" : "border-zinc-200 bg-zinc-50 text-zinc-600"
            }`}>
              <Layers size={12} /> {totalAnswered} / {quizQuestions.length} Completed
            </div>
          </div>
        </nav>

        {/* Live Progress Tracker Ribbon */}
        <div className={`w-full h-1 relative ${darkMode ? "bg-zinc-900" : "bg-zinc-100"}`}>
          <div 
            className={`h-full transition-all duration-300 ${darkMode ? "bg-white" : "bg-zinc-900"}`}
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Workspace Area Layout */}
      <main className="max-w-6xl mx-auto mt-12 px-6 pb-24">
        
        {/* Advanced Scoreboard Presentation Box */}
        {quizSubmitted && (
          <div className={`mb-12 border rounded-2xl p-8 text-center max-w-2xl mx-auto tracking-tight transition-all ${
            darkMode ? "bg-zinc-900/30 border-zinc-900 shadow-2xl" : "bg-zinc-50 border-zinc-200 shadow-sm"
          }`}>
            <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">Assessment Complete</span>
            <h2 className="text-3xl font-black mt-1">Performance Summary</h2>
            
            <div className="flex justify-center items-baseline gap-2 mt-6">
              <span className="text-6xl font-black tracking-tighter">{calculateScore()}</span>
              <span className={`text-2xl font-normal ${darkMode ? "text-zinc-600" : "text-zinc-400"}`}>/ 10 correct</span>
            </div>

            <p className={`text-sm mt-4 max-w-md mx-auto leading-relaxed ${darkMode ? "text-zinc-400" : "text-zinc-500"}`}>
              {calculateScore() >= 8 
                ? "Incredible! You have demonstrated a high level of context absorption with this set." 
                : "Good run. Use the AI Chat on your main page to clear up conflicting concepts."}
            </p>

            <Button 
              onClick={resetQuiz}
              className={`mt-6 gap-2 rounded-xl py-5 px-6 font-medium text-xs transition-all ${
                darkMode ? "bg-zinc-100 hover:bg-zinc-200 text-zinc-950" : "bg-zinc-950 hover:bg-zinc-900 text-white"
              }`}
            >
              <RefreshCw size={12} /> Reset & Restart Assessment
            </Button>
          </div>
        )}

        {/* Two-Column Grid Setup to support 10 questions cleanly */}
        <div className="grid md:grid-cols-2 gap-6">
          {quizQuestions.map((q, qIndex) => {
            const hasBeenAnswered = selectedAnswers[q.id] !== undefined;

            return (
              <div 
                key={q.id} 
                className={`border rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between ${
                  darkMode 
                    ? hasBeenAnswered 
                      ? "bg-zinc-900/20 border-zinc-800" 
                      : "bg-zinc-900/5 border-zinc-900/60"
                    : hasBeenAnswered 
                      ? "bg-white border-zinc-300 shadow-sm" 
                      : "bg-zinc-50/50 border-zinc-200/60"
                }`}
              >
                <div>
                  <div className="flex justify-between items-start gap-4">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                      darkMode ? "bg-zinc-900 border-zinc-800 text-zinc-500" : "bg-zinc-100 border-zinc-200 text-zinc-400"
                    }`}>
                      ITEM {String(qIndex + 1).padStart(2, '0')}
                    </span>
                    {hasBeenAnswered && !quizSubmitted && (
                      <span className="text-[10px] font-mono text-zinc-400 animate-pulse">● Logged</span>
                    )}
                  </div>

                  <h3 className="text-base font-bold mt-4 tracking-tight leading-snug">
                    {q.question}
                  </h3>
                </div>

                {/* Multiple Choice Blocks Stack */}
                <div className="mt-6 space-y-2">
                  {q.options.map((option, oIndex) => {
                    const isSelected = selectedAnswers[q.id] === oIndex;
                    const isCorrect = q.correctAnswer === oIndex;
                    
                    let variantStyles = darkMode
                      ? "bg-zinc-900/50 text-zinc-400 border-zinc-900 hover:bg-zinc-900/80 hover:text-zinc-200"
                      : "bg-white text-zinc-600 border-zinc-200/80 hover:bg-zinc-100 hover:text-zinc-900";

                    if (isSelected && !quizSubmitted) {
                      variantStyles = darkMode 
                        ? "bg-zinc-100 text-zinc-950 border-zinc-100 font-semibold" 
                        : "bg-zinc-950 text-white border-zinc-950 font-semibold";
                    } else if (quizSubmitted) {
                      if (isCorrect) {
                        variantStyles = "bg-emerald-500/10 text-emerald-500 border-emerald-500/20 font-medium";
                      } else if (isSelected && !isCorrect) {
                        variantStyles = "bg-rose-500/10 text-rose-500 border-rose-500/20 font-medium";
                      } else {
                        variantStyles = darkMode 
                          ? "bg-zinc-900/10 text-zinc-700 border-transparent opacity-40" 
                          : "bg-zinc-50/50 text-zinc-400 border-transparent opacity-40";
                      }
                    }

                    return (
                      <button
                        key={oIndex}
                        onClick={() => handleOptionSelect(q.id, oIndex)}
                        disabled={quizSubmitted}
                        className={`w-full text-left p-3.5 rounded-xl text-xs transition-all border flex justify-between items-center leading-relaxed ${variantStyles}`}
                      >
                        <span className="max-w-[90%]">{option}</span>
                        {quizSubmitted && isCorrect && <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />}
                        {quizSubmitted && isSelected && !isCorrect && <XCircle size={14} className="text-rose-500 flex-shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Fixed Submit Trigger Panel */}
        {!quizSubmitted && (
          <div className="mt-16 flex flex-col items-center justify-center border-t pt-8 border-zinc-900">
            <p className={`text-xs font-mono mb-4 ${darkMode ? "text-zinc-500" : "text-zinc-400"}`}>
              Ensure all items are logged before finalizing.
            </p>
            <Button
              onClick={() => {
                setQuizSubmitted(true)
                window.scrollTo(0,0)
            }}
              disabled={totalAnswered < quizQuestions.length}
              className={`px-16 py-6 rounded-xl font-medium shadow-xl transition-all text-sm tracking-wide ${
                totalAnswered === quizQuestions.length
                  ? darkMode
                    ? "bg-zinc-100 hover:bg-zinc-200 text-zinc-950"
                    : "bg-zinc-950 hover:bg-zinc-900 text-white"
                  : darkMode
                    ? "bg-zinc-900 text-zinc-700 border border-zinc-900 cursor-not-allowed"
                    : "bg-zinc-100 text-zinc-300 border border-zinc-200 cursor-not-allowed"
              }`}
            >
              Submit Complete Exam ({totalAnswered} / {quizQuestions.length})
            </Button>
          </div>
        )}

      </main>
    </div>
  );
}