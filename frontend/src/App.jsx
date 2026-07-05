import React, { useState,useRef } from 'react'
import Heropage from './pages/heropage'
import { Route , Routes } from 'react-router-dom';
import Quiz10 from './pages/quiz10';
import Quiz15 from './pages/quiz15';
import Quiz20 from './pages/quiz20';
import AiSummaryView from './pages/aisummaryview';
import SmartNotesView from './pages/smartnotes';







const App = () => {

  const [quizQuestions1,setQuizQuestions1] = useState([])
  const [documentid,setDocumentid] = useState("")
  const [document1,setDocument1] = useState(null)
  const [documentname,setDocumentname] = useState("")
  const [chatHistory, setChatHistory] = useState([
      { role: "assistant", text: "Hello! Upload a PDF, and I can help you generate quizzes, summaries, or answer specific questions about it. What are we studying today?" }
    ]);
  const [colorset,setColorset] = useState(0)
  const [showsummary,setShowsummary] = useState(false)
  const [aisummary,setAisummary] = useState([])
  const [showNotes,setShowNotes] = useState(false)
  const [ainotes,setAinotes] = useState([])
  const [quizloading,setQuizloading] = useState(false)

  return (
    <div>
      <Routes>
        <Route path="/" element={< Heropage setQuizQuestions1={setQuizQuestions1} documentid={documentid} setDocumentid={setDocumentid} document1={document1} setDocument1={setDocument1} documentname={documentname} setDocumentname={setDocumentname} chatHistory={chatHistory} setChatHistory={setChatHistory} colorset={colorset} setColorset={setColorset} showsummary={showsummary} setShowsummary={setShowsummary} aisummary={aisummary} setAisummary={setAisummary} showNotes={showNotes} setShowNotes={setShowNotes} ainotes={ainotes} setAinotes={setAinotes} setQuizloading={setQuizloading}/>}/>

        <Route path="/quiz10" element={< Quiz10 quizQuestions1={quizQuestions1} quizloading={quizloading}/>}/>
        <Route path="/quiz15" element={< Quiz15 quizQuestions1={quizQuestions1} quizloading={quizloading}/>}/>
        <Route path="/quiz20" element={< Quiz20 quizQuestions1={quizQuestions1} quizloading={quizloading}/>}/>
        <Route path="/aiview" element={<AiSummaryView showsummary={showsummary} setShowsummary={setShowsummary} aisummary={aisummary}/>}/>
        <Route path="/notes" element={< SmartNotesView ainotes={ainotes}/>}/>
        

      </Routes>
      
    </div>
  )
}

export default App