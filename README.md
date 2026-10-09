# 🧠 RAGenius AI — Intelligent PDF Learning Workspace

Transform your PDFs into an interactive AI-powered learning experience. **RAGenius AI** lets you chat with documents, generate concise summaries, create structured study notes, and test your understanding with AI-generated quizzes.

Built with **React, FastAPI, LangChain, Hugging Face, and Qdrant**, the application uses a Retrieval-Augmented Generation (RAG) pipeline to retrieve relevant document content and generate context-aware responses.

## A Little Preview 🚀
https://github.com/user-attachments/assets/0c24d12b-b2e0-4950-b893-f3c3597c8a27

## ✨ Key Features

* 📄 **PDF Processing:** Upload PDF documents and extract their text for AI-powered processing.
* 💬 **Conversational PDF Chat:** Ask natural-language questions and receive answers grounded in retrieved document content.
* 📝 **AI-Powered Summaries:** Generate concise summaries to understand lengthy documents quickly.
* 📚 **Smart Notes:** Convert document content into structured, easy-to-review study notes.
* ❓ **Automated Quiz Generation:** Generate quizzes from uploaded documents to evaluate your understanding.
* 🎯 **Context-Aware Responses:** Use semantic retrieval to provide relevant context to the language model.
* 🔎 **Semantic Search:** Retrieve relevant text chunks using vector embeddings and similarity search.
* 🧠 **Hugging Face Embeddings:** Convert document text into numerical vector representations for semantic retrieval.
* 🗄️ **Qdrant Vector Database:** Store and search document embeddings efficiently.
* ⚡ **Modular FastAPI Backend:** Organize document ingestion, retrieval, and generation through dedicated API routers.
* 🎨 **Responsive React UI:** Interact with document chat, summaries, notes, and quizzes through a modern interface.
* 🌙 **Dark/Light Mode:** Switch between interface themes.

## 🛠️ Tech Stack

| Category            | Technologies                               |
| ------------------- | ------------------------------------------ |
| Frontend            | React.js, Vite, Tailwind CSS               |
| UI & Animations     | Framer Motion, React Icons, Lucide React   |
| Backend             | Python, FastAPI, Uvicorn                   |
| RAG Framework       | LangChain                                  |
| Embeddings          | Hugging Face, Sentence Transformers        |
| Vector Database     | Qdrant                                     |
| Document Processing | PyMuPDF, Recursive Character Text Splitter |
| Database            | MongoDB                                    |
| Development Tools   | Docker, Git, GitHub, VS Code, Postman      |

## ⚙️ How It Works

RAGenius AI follows a Retrieval-Augmented Generation pipeline to connect user questions with relevant information from uploaded PDFs.

```text
             PDF Upload
                 |
                 v
         Extract PDF Text
                 |
                 v
          Split into Chunks
                 |
                 v
        Generate Embeddings
                 |
                 v
       Store Vectors in Qdrant
                 |
                 v
          User Asks a Question
                 |
                 v
        Embed the User Query
                 |
                 v
       Retrieve Relevant Chunks
                 |
                 v
      Generate Contextual Response
                 |
                 v
       Chat | Summary | Notes | Quiz
```

### Understanding the RAG Pipeline

1. **Document Ingestion:** Extract text from uploaded PDFs using PyMuPDF.
2. **Text Chunking:** Split extracted content into smaller, overlapping chunks to support retrieval.
3. **Embedding Generation:** Convert document chunks into vector representations using an embedding model.
4. **Vector Storage:** Store embeddings and their associated text in Qdrant.
5. **Semantic Retrieval:** Convert the user's question into an embedding and retrieve relevant document chunks.
6. **Response Generation:** Provide the retrieved context to the language model to generate relevant answers and learning resources.

This approach helps ground AI-generated responses in the uploaded document instead of relying exclusively on the model's general knowledge.

## 📁 Project Structure

```text
Rag_project2/
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

## 💻 Getting Started

Follow these steps to run RAGenius AI locally.

### Prerequisites

Make sure you have installed:

* Python 3.10 or a compatible version for your dependencies
* Node.js and npm
* Docker
* Git

### 1. Clone the Repository

```bash
git clone https://github.com/rimc008/Rag_project2.git
cd Rag_project2
```

### 2. Start Qdrant

Run Qdrant using Docker:

```bash
docker run -d --name qdrant -p 6333:6333 -p 6334:6334 -v qdrant_storage:/qdrant/storage qdrant/qdrant
```

Qdrant dashboard:

http://localhost:6333/dashboard

If the container already exists, start it with:

```bash
docker start qdrant
```

### 3. Configure the Backend

From the project root:

```bash
cd backend
python -m venv venv
```

Activate the virtual environment on Windows PowerShell:

```powershell
.\venv\Scripts\Activate.ps1
```

For Windows Command Prompt:

```bat
venv\Scripts\activate.bat
```

Install the backend dependencies if `requirements.txt` is available:

```bash
pip install -r requirements.txt
```

Configure the required environment variables in `backend/.env`, including the API keys and database/vector-store settings required by your implementation.

**Important:** Never commit your `.env` file or expose API keys publicly.

### 4. Run the FastAPI Backend

From the `backend` directory:

```bash
uvicorn server:app --reload
```

Backend URL:

http://localhost:8000

Interactive API documentation:

http://localhost:8000/docs

### 5. Run the React Frontend

Open a second terminal from the project root:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL printed by Vite, usually:

http://localhost:5173

## 🎯 Use Cases

* Students preparing notes from lecture PDFs and textbooks.
* Learners who want quick summaries of lengthy study material.
* Users who need to ask questions about technical documents.
* Self-learners who want to generate quizzes for revision.
* Anyone who wants to interact with PDF content through natural language.

## 🔮 Future Enhancements

* [ ] Multi-document conversational retrieval.
* [ ] Persistent conversation history.
* [ ] Source citations and PDF page references.
* [ ] PDF highlighting for retrieved passages.
* [ ] User authentication and document management.
* [ ] Cloud deployment.
* [ ] Streaming AI responses.
* [ ] Voice-based queries.

## 👨‍💻 Author

**Roman Chakraborty**

* GitHub: [@rimc008](https://github.com/rimc008)

## ⭐ Support

If you find RAGenius AI useful, consider giving the repository a star on GitHub!

---

*RAGenius AI — Read less, understand more, and learn smarter.*
