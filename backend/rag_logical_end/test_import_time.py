import time

start = time.time()
from langchain_community.document_loaders import PyMuPDFLoader
print("PyMuPDFLoader:", time.time() - start)

start = time.time()
from langchain_text_splitters import RecursiveCharacterTextSplitter
print("TextSplitter:", time.time() - start)

start = time.time()
from langchain_huggingface import HuggingFaceEmbeddings
print("HuggingFaceEmbeddings:", time.time() - start)

start = time.time()
from langchain_qdrant import QdrantVectorStore
print("QdrantVectorStore:", time.time() - start)

start = time.time()
from qdrant_client import QdrantClient
print("QdrantClient:", time.time() - start)

print("Done")