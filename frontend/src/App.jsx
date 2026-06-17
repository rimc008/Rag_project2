import React, { useState } from 'react'
import Heropage from './pages/heropage'
import { Route , Routes } from 'react-router-dom';
import Quiz10 from './pages/quiz10';
import Quiz15 from './pages/quiz15';
import Quiz20 from './pages/quiz20';



const App = () => {

  const [quizQuestions1,setQuizQuestions1] = useState([])

  return (
    <div>
      <Routes>
        <Route path="/" element={< Heropage setQuizQuestions1={setQuizQuestions1}/>}/>

        <Route path="/quiz10" element={< Quiz10 quizQuestions1={quizQuestions1}/>}/>
        <Route path="/quiz20" element={< Quiz15 quizQuestions1={quizQuestions1}/>}/>
        <Route path="/quiz30" element={< Quiz20 quizQuestions1={quizQuestions1}/>}/>
        

      </Routes>
      
    </div>
  )
}

export default App