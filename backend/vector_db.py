# Convert text chunks into vector embeddings
from langchain_google_genai import GoogleGenerativeAIEmbeddings

# For summary purpose
import google.generativeai as genai
import os

# Local Qdrant client
from qdrant_client import QdrantClient


from dotenv import load_dotenv
load_dotenv()


# embedding model load
embeddings = GoogleGenerativeAIEmbeddings(model="models/gemini-embedding-001")

# key configuration for genai
genai.configure(api_key=os.getenv("GOOGLE_API_KEY_SUMMARY"))
model_summary = genai.GenerativeModel("gemini-2.5-flash")

client = QdrantClient(url="http://localhost:6333")
collection_name="pdf_docs"

# from langchain_huggingface import HuggingFaceEmbeddings
# from qdrant_client import QdrantClient
# #For summary purpose
# import google.generativeai as genai
# import os

# from dotenv import load_dotenv
# load_dotenv()

# embeddings = HuggingFaceEmbeddings(
#     model_name="sentence-transformers/all-MiniLM-L6-v2",
#     cache_folder="./hf_cache"
# )

# #key configuration for genai
# genai.configure(api_key=os.getenv("GOOGLE_API_KEY_SUMMARY"))
# model_summary = genai.GenerativeModel("gemini-2.5-flash")

# client = QdrantClient(url="http://localhost:6333")

# collection_name = "pdf_docs"