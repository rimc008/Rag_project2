import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Send, UploadCloud, FileText } from "lucide-react"; // Note: Ensure lucide-react is installed
import { NavLink } from 'react-router-dom'
import AiSummaryView from "./aisummaryview";
import SmartNotesView from "./smartnotes";



export default function Heropage({setQuizQuestions1,documentid,setDocumentid,document,setDocument,documentname,setDocumentname,chatHistory,setChatHistory,colorset,setColorset,showsummary,setShowsummary,aisummary,setAisummary,showNotes,setShowNotes,ainotes,setAinotes}) {

  const [darkMode, setDarkMode] = useState(true);

  const [selectedQuestions, setSelectedQuestions] = useState(10);

  const [chatInput, setChatInput] = useState("");

  const documentrenders = useRef(0)

  let airesponse = ""

  const messageref = useRef(null)

  const [gettingmessageref,setGettingmessageref] = useState(1)

  const [uploading, setUploading] = useState(false)

  const [uploading1, setUploading1] = useState(false)

  const [uploading2, setUploading2] = useState(false)


  useEffect(() => {

    const goTo = () => {

      if (!messageref.current) return; 

      messageref.current.scrollTo({
        top: messageref.current.scrollHeight,
        behavior: "smooth"
        });
    };
    goTo()

  },[gettingmessageref])

  useEffect(()=>{

    const handleChange1 = async() => {

      if (document === null){
        alert("Pdf Not Uploaded")
      }
      else{

        console.log(document);
        

        try {
          
          setUploading(true)  // starts spin

          const formData = new FormData();
          formData.append("file", document);
            
          const res = await fetch("http://127.0.0.1:8000/ingest",{

            method : "POST",
            body: formData
          })

          const data3 = await res.json()

          if (data3.success){

            alert(data3.message)
            setColorset(1)
            setDocumentid(data3.document_id)
          }
          else {
            alert(data3.message)
          }
        } 
        
        catch (error) {
          
          console.log(error.message);
          
        }

        finally {
          setUploading(false)  // stop spin
        }
      
      }

    }

    if (documentrenders.current === 0){

      console.log("you are at if block");
      
      return
    }
    else{
      console.log("you are at else block");
      
      handleChange1()
    }
    
  },[document])

  const handleSendMessage = async(e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    // Add user message
    const updatedHistory = [...chatHistory, { role: "user", text: chatInput }];
    setChatHistory(updatedHistory);
    setGettingmessageref(item => item+1)
    setChatInput("");

    try {

      const res = await fetch("http://127.0.0.1:8000/question",{
        method:"POST",
        headers : {
          "Content-Type":"application/json"
        },

        body : JSON.stringify({"question":chatInput,"document_id":documentid})

      })

      const data4 = await res.json()

      if (data4.success){

        alert("getting response")
        airesponse = data4.message
      }
      else{
        alert(data4.message)
      }

    } catch (error) {
      console.log(error.message);
      
    }

    // Simulate AI response response
    setTimeout(() => {
      setChatHistory([...updatedHistory, { 
        role: "assistant", 
        text: airesponse || "I've analyzed your request. Please upload your PDF document using the button above so I can extract the relevant context and answer accurately!"

      }])
      setGettingmessageref(item => item+1)
    }, 100);
  };

  const handleChange2 = async() => {

    try {

      const res = await fetch("http://127.0.0.1:8000/quiz",{
        method:"POST",
        headers : {
          "Content-Type":"application/json"
        },
        body : JSON.stringify({"question":`Generate ${selectedQuestions} quizes`,"number":`${selectedQuestions}`,"document_id":documentid})

      })

      const data4 = await res.json()

      if (data4.success){

        alert("getting request");
        console.log(data4.message);
                
        setQuizQuestions1(data4.message)

      }
      else{
        alert(data4.message)
      }
    } catch (error) {
      console.log(error.message);
            
    }
  }

  const handleChange3 = async() => {

    try {

      setUploading2(true)

      const res = await fetch("http://127.0.0.1:8000/summary",{
        
        method:"POST",
        headers : {
          "Content-Type":"application/json"
        },
        body : JSON.stringify({"question":"Generate summary of this document.","document_id":documentid})
      })

      const data6 = await res.json()

      if (data6.success){

        alert("getting response summary")
        console.log(data6.message);
        
        setAisummary(data6.message)
        setShowsummary(true)
        
      }
      else{
        alert(data6.message)
      }

    } catch (error) {
      alert(error.message)      
    }

    finally{
      setUploading2(false)
    }
  }

  const handleChange4 = async() => {
    
    try {

      setUploading1(true)
      const res = await fetch("http://127.0.0.1:8000/notes",{
        
        method:"POST",
        headers : {
          "Content-Type":"application/json"
        },
        body : JSON.stringify({"question":"Generate notes from this document.","document_id":documentid})
      })

      const data6 = await res.json()

      if (data6.success){

        alert("getting response notes")
        console.log(data6.message);
        
        setAinotes(data6.message[0])
        setShowNotes(true)
      }
      else{
        alert(data6.message)
      }

    } catch (error) {
      alert(error.message)      
    }
    finally{
      setUploading1(false)
    }
  }


  return (

    <div>
      <div className={`min-h-screen font-Prata antialiased transition-colors duration-300 ${
        darkMode 
          ? "bg-zinc-950 text-zinc-50 selection:bg-zinc-800" 
          : "bg-white text-zinc-900 selection:bg-zinc-200"
      }`}>
        
        {/* Navbar */}
        <nav className={`flex justify-between items-center px-6 md:px-12 py-5 border-b transition-colors ${
          darkMode ? "border-zinc-900 bg-zinc-950/80" : "border-zinc-100 bg-white/80"
        } backdrop-blur-md sticky top-0 z-50`}>
          <h1 className="text-xl font-bold tracking-tight">
            RAGenius<span className={darkMode ? "text-red-400 font-bold" : "text-red-500 font-bold"}>AI</span>
          </h1>

          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                darkMode 
                  ? "border-zinc-800 bg-zinc-900 hover:bg-zinc-1000 text-zinc-400 hover:text-zinc-100" 
                  : "border-zinc-200 bg-zinc-50 text-zinc-600 hover:text-zinc-900"
              }`}
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Button 
              variant="outline" 
              className={`flex items-center gap-2 rounded-xl transition-all cursor-pointer ${
                darkMode 
                  ? `border-zinc-800 ${(colorset === 1) ? "bg-green-300 hover:bg-green-300" :"bg-zinc-900 hover:bg-zinc-800"} ${(colorset === 1)?"text-black font-bold":"text-white-200 font-bold"} hover:text-white` 
                  : `border-zinc-200 ${(colorset === 1) ? "bg-green-300 hover:bg-green-300" :"bg-white hover:bg-zinc-100"}  text-black-800 font-bold`
              }`}
            >
              {uploading ? (
                  <div className="w-5 h-5 border-4 border-zinc-700 border-t-white rounded-full animate-spin" />
                ):<UploadCloud size={16} />}

              <label htmlFor="upload pdf" className="cursor-pointer"> {(documentname !== "") ? documentname :"Upload Pdf"} </label>

              <input type="file" name="upload pdf" id="upload pdf" onChange={(e) => {

                documentrenders.current = 1
                let nextUpload = e.target.files[0]
                console.log(nextUpload);              
                setDocument(nextUpload)
                alert("Wait untill you get the message pdf uploaded")
                setDocumentname(nextUpload.name)
                

              }} hidden/>
            </Button>
          </div>
        </nav>

        {/* Hero Header */}
        <header className="max-w-4xl mx-auto text-center mt-16 px-6">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border tracking-wide ${
            darkMode 
              ? "border-zinc-800 bg-zinc-900 text-white-400" 
              : "border-zinc-200 bg-zinc-50 text-black-600"
          }`}>
            <FileText size={12} />

            <div className="font-bold">
              AI Powered PDF Workspace
            </div> 
            
          </div>

          <h1 className="text-4xl md:text-6xl font-black mt-6 tracking-tight leading-[1.15]">
            Chat, Learn & Generate
            <br />
            <span className={darkMode ? "text-zinc-500" : "text-zinc-700"}>
              Quizzes From Documents
            </span>
          </h1>
        </header>

        {/* Main Grid Workspace */}
        <main className="max-w-6xl mx-auto mt-12 grid md:grid-cols-5 gap-8 px-6 pb-24">
          
          {/* Left Side: Quiz Settings Controls (2 Columns) */}
          <section className="md:col-span-2 space-y-6 h-max">
            <div className={`border rounded-2xl p-6 shadow-sm transition-all ${
              darkMode ? "bg-zinc-900/40 border-zinc-700" : "bg-zinc-50/50 border-zinc-500"
            }`}>
              <h2 className="text-lg font-bold tracking-tight">Quiz Generator</h2>
              <p className={`text-sm mt-1 ${darkMode ? "text-zinc-400" : "text-zinc-700"}`}>
                Select length preference to build custom assessments.
              </p>

              {/* Quiz Selectors */}
              <div className="grid grid-cols-3 gap-2 mt-6">
                {[10, 15, 20].map((count) => (
                  <button
                    key={count}
                    onClick={() => setSelectedQuestions(count)} 
                    className={`py-3 rounded-xl text-sm font-bold cursor-pointer transition-all border ${
                      selectedQuestions === count
                        ? darkMode
                          ? "bg-zinc-100 text-zinc-950 border-zinc-100 shadow-md"
                          : "bg-zinc-950 text-white border-zinc-950 shadow-md"
                        : darkMode
                          ? "bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:bg-zinc-800 hover:text-zinc-200"
                          : "bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-100 hover:text-zinc-900"
                    }`}
                  >
                    {count} Qs
                  </button>
                ))}
              </div>

              <NavLink to={`Quiz${selectedQuestions}`}>
              <Button className={`w-full mt-6 rounded-xl py-5 font-medium cursor-pointer transition-all ${
                darkMode 
                  ? "bg-zinc-100 hover:bg-zinc-200 text-zinc-950 font-bold" 
                  : "bg-zinc-950 hover:bg-zinc-900 text-white font-bold"
              }`} onClick={handleChange2}>

                Generate {selectedQuestions} Questions
              </Button>
              </NavLink>
            </div>

            {/* Quick Utility Features */}
            <div className="grid grid-cols-2 gap-4">

              <a href={showNotes ? "#notes" : null}>
              <div className={`p-4 rounded-xl border hover:scale-95 transition-all cursor-pointer ${darkMode ? "bg-zinc-900/20 border-zinc-700" : "bg-zinc-50/30 border-zinc-500"}`} onClick={handleChange4}>
                <div className="flex flex-row justify-between">
                  <h3 className="text-sm font-bold">Smart Notes</h3>
                  {uploading1 ? (
                    <div className="w-5 h-5 border-4 border-zinc-700 border-t-white rounded-full animate-spin" />
                  ): null}
                </div>
                <p className={`text-xs mt-1 ${darkMode ? "text-zinc-400" : "text-zinc-700"}`}>Instantly extract clean, outlines.</p>
              </div></a>

              <a href={showsummary ? "#summary" : null}>
              <div className={`p-4 rounded-xl border cursor-pointer hover:scale-95 transition ${darkMode ? "bg-zinc-900/20 border-zinc-700" : "bg-zinc-50/30 border-zinc-500"}`} onClick={handleChange3}>

                <div className="flex flex-row justify-between">
                  <h3 className="text-sm font-bold">AI Summary</h3>
                  {uploading2 ? (
                    <div className="w-5 h-5 border-4 border-zinc-700 border-t-white rounded-full animate-spin" />
                  ): null}
                </div>
                <p className={`text-xs mt-1 ${darkMode ? "text-zinc-400" : "text-zinc-700"}`}>Condense dense sections fast.</p>
              </div></a>
            </div>
          </section>

          {/* Right Side: Input & Live AI Chat Interface (3 Columns) */}
          <section className={`md:col-span-3 border rounded-2xl flex flex-col min-h-[420px] shadow-sm overflow-hidden ${
            darkMode ? "bg-zinc-900/30 border-zinc-700" : "bg-zinc-50/30 border-zinc-500"
          }`}>
            {/* Chat Header */}
            <div className={`px-4 py-3 border-b flex items-center justify-between ${
              darkMode ? "border-zinc-900 bg-zinc-900/50" : "border-zinc-200/60 bg-zinc-100/40"
            }`}>
              <span className="text-xs font-semibold uppercase tracking-wider text-white-400">Contextual Assistant</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>

            {/* Message Stream */}
            <div ref={messageref} className="flex-1 p-4 space-y-4 overflow-y-auto text-sm max-h-[320px]">
              {chatHistory.map((msg, i) => (
                <div 
                  key={i} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed ${
                    msg.role === 'user'
                      ? darkMode
                        ? "bg-zinc-100 text-zinc-950 font-medium"
                        : "bg-zinc-950 text-white font-medium"
                      : darkMode
                        ? "bg-zinc-900 text-zinc-300 border border-zinc-800"
                        : "bg-white text-zinc-800 border border-zinc-200"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* User Input Form Field Section */}
            <form 
              onSubmit={handleSendMessage}
              className={`p-3 border-t flex gap-2 items-center ${
                darkMode ? "border-zinc-900 bg-zinc-950" : "border-zinc-200 bg-white"
              }`}
            >
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask a question about your documents..."
                className={`flex-1 text-sm bg-transparent px-3 py-2 outline-none border-none focus:ring-0 ${
                  darkMode ? "text-zinc-100 placeholder-zinc-400" : "text-zinc-900 placeholder-zinc-700"
                }`}
              />
              
              <button
                type="submit"
                disabled={!chatInput.trim()}
                className={`p-2.5 rounded-xl transition-all flex items-center justify-center ${
                  chatInput.trim()
                    ? darkMode
                      ? "bg-zinc-100 text-zinc-950 hover:bg-zinc-200"
                      : "bg-zinc-950 text-white hover:bg-zinc-900"
                    : darkMode
                      ? "bg-zinc-900 text-zinc-700 cursor-not-allowed"
                      : "bg-zinc-100 text-zinc-300 cursor-not-allowed"
                }`}
              >
                <Send size={16} />
              </button>
            </form>

          </section>
        </main>
      </div>
      <div id="summary">
        {showsummary && aisummary && (<AiSummaryView showsummary={showsummary} setShowsummary={setShowsummary} darkMode={darkMode} setDarkMode={setDarkMode} aisummary={aisummary}/>)}
      </div>
      <div id="notes">
        {showNotes && ainotes && <SmartNotesView darkMode={darkMode} setDarkMode={setDarkMode} setShowNotes={setShowNotes} ainotes={ainotes}/>}
      </div>
    </div>
  );
}