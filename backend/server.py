from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from router.ingest_router import router as ingest_router
from router.query_router import router as query_router
from router.quiz_router import router as quiz_router
from router.summary_router import router as summary_router
from router.notes_router import router as notes_router

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(ingest_router)
app.include_router(query_router)
app.include_router(quiz_router)
app.include_router(summary_router)
app.include_router(notes_router)

@app.get("/health")
def health():
    return {"status": "ok"}