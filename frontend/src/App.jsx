import React, { useState,useRef } from 'react'
import Heropage from './pages/heropage'
import { Route , Routes } from 'react-router-dom';
import Quiz10 from './pages/quiz10';
import Quiz15 from './pages/quiz15';
import Quiz20 from './pages/quiz20';



const App = () => {

  const [quizQuestions1,setQuizQuestions1] = useState([])
  const [documentid,setDocumentid] = useState("")
  const [document,setDocument] = useState(null)
  const [documentname,setDocumentname] = useState("")
  const [chatHistory, setChatHistory] = useState([
      { role: "assistant", text: "Hello! Upload a PDF, and I can help you generate quizzes, summaries, or answer specific questions about it. What are we studying today?" }
    ]);
  const [colorset,setColorset] = useState(0)

  return (
    <div>
      <Routes>
        <Route path="/" element={< Heropage setQuizQuestions1={setQuizQuestions1} documentid={documentid} setDocumentid={setDocumentid} document={document} setDocument={setDocument} documentname={documentname} setDocumentname={setDocumentname} chatHistory={chatHistory} setChatHistory={setChatHistory} colorset={colorset} setColorset={setColorset}/>}/>

        <Route path="/quiz10" element={< Quiz10 quizQuestions1={quizQuestions1}/>}/>
        <Route path="/quiz15" element={< Quiz15 quizQuestions1={quizQuestions1}/>}/>
        <Route path="/quiz20" element={< Quiz20 quizQuestions1={quizQuestions1}/>}/>
        

      </Routes>
      
    </div>
  )
}

export default App