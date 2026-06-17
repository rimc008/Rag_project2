# # Convert text chunks into vector embeddings
# from langchain_google_genai import GoogleGenerativeAIEmbeddings
# # Local Qdrant client
# from qdrant_client import QdrantClient
# from dotenv import load_dotenv
# load_dotenv()


# # embedding model load
# embeddings = GoogleGenerativeAIEmbeddings(model="models/gemini-embedding-001")

# client = QdrantClient(url="http://localhost:6333")
# collection_name="pdf_docs"

from langchain_huggingface import HuggingFaceEmbeddings
from qdrant_client import QdrantClient

embeddings = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-MiniLM-L6-v2",
    cache_folder="./hf_cache"
)

client = QdrantClient(url="http://localhost:6333")

collection_name = "pdf_docs"