## RAGenius AI 🧠
Transform your PDFs into an intelligent AI learning workspace. Chat with documents, generate AI-powered summaries, smart notes, and quizzes using a Retrieval-Augmented Generation (RAG) pipeline built with FastAPI, React, MongoDB, and Qdrant.

## A Little Preview 🚀
https://github.com/user-attachments/assets/0c24d12b-b2e0-4950-b893-f3c3597c8a27


## Features ✨

* 📄 Upload and process PDF documents.
* 💬 Chat with PDFs using Retrieval-Augmented Generation (RAG).
* 📝 Generate AI-powered document summaries.
* 📚 Create structured smart notes instantly.
* ❓ Automatically generate quizzes from uploaded documents.
* 🎯 Context-aware answers grounded in your uploaded PDF.
* ⚡ Fast semantic search using vector embeddings.
* 🧠 HuggingFace embedding model integration.
* 🗄️ Qdrant Vector Database for efficient similarity search.
* 🌐 FastAPI backend with modular API architecture.
* 🎨 Modern responsive React frontend.
* 🌙 Beautiful Dark/Light Mode interface.
* 🔥 Clean modular project structure for easy scalability.

## Folder Structure 📁

```text
RAG_PROJECT2/
│
├── backend/
│   ├── controllers/
│   ├── data_dummy/
│   ├── hf_cache/
│   ├── rag_logical_end/
│   │   ├── generator.py
│   │   ├── generator_notes.py
│   │   ├── generator_quiz.py
│   │   ├── generator_summary.py
│   │   ├── ingest.py
│   │   ├── retriver.py
│   │   ├── retriever_notes.py
│   │   ├── retriever_quiz.py
│   │   ├── retriever_summary.py
│   │   └── test_import_time.py
│   │
│   ├── router/
│   │   ├── ingest_router.py
│   │   ├── notes_router.py
│   │   ├── query_router.py
│   │   ├── quiz_router.py
│   │   └── summary_router.py
│   │
│   ├── .env
│   ├── server.py
│   └── vector_db.py
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── lib/
│   │   ├── pages/
│   │   │   ├── heroPage.jsx
│   │   │   ├── features.jsx
│   │   │   ├── howworks.jsx
│   │   │   ├── whytake.jsx
│   │   │   ├── youget.jsx
│   │   │   ├── dynamicalert.jsx
│   │   │   ├── smartnotes.jsx
│   │   │   ├── aisummaryview.jsx
│   │   │   ├── quiz10.jsx
│   │   │   ├── quiz15.jsx
│   │   │   └── quiz20.jsx
│   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── App.css
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## Tech Stack 🛠️

### Frontend 🎨

- React.js
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- Lucide React

### Backend ⚙️

- FastAPI
- Python
- Uvicorn

###  AI & Machine Learning 🤖

- Retrieval-Augmented Generation (RAG)
- Hugging Face Embeddings
- LangChain
- Sentence Transformers

### Vector Database 🗄️

- Qdrant

### Document Processing 📄

- PyMuPDF
- Recursive Text Splitter

### Tools 🔧

- Docker
- Git
- GitHub
- VS Code
- Postman

## How It Works ⚡

```text
Upload PDF
      │
      ▼
Extract & Chunk Text
      │
      ▼
Generate Embeddings
      │
      ▼
Store Vectors in Qdrant
      │
      ▼
Retrieve Relevant Context
      │
      ▼
Generate AI Response
      │
      ▼
Summary • Notes • Quiz • Chat
```

## Run Locally 🚀

### Clone Repository

```bash
git clone https://github.com/rimc008/Rag_project2.git
```
### rag_project2
```bash
venv\Scripts\activate
```
### Backend

```bash
cd backend

python -m venv venv

uvicorn server:app --reload
```

### Frontend

```bash
cd frontend

npm install

npm run dev
```

### Run Qdrant

```bash
docker run -p 6333:6333 \
-v qdrant_storage:/qdrant/storage \
--name qdrant \
qdrant/qdrant
```

## Future Enhancements 📌

- Multiple PDF Chat
- Conversation History
- PDF Highlighting
- Citation Support
- User Authentication
- Cloud Deployment
- Streaming AI Responses
- Voice-based Querying

## Liked it ⭐

If you found this project useful, consider giving it a **⭐ Star** on GitHub.




