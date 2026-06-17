from pprint import pprint
# Store vectors in Qdrant
from langchain_qdrant import QdrantVectorStore
# Local Qdrant client
from langchain_community.document_loaders import PyMuPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter  
from vector_db import embeddings,client,collection_name
import uuid

def ingest_pdf(new_pdf):

    document_id = None 

    if document_id is None:
        document_id = str(uuid.uuid4())

    # fetch pdf    
    pdf = PyMuPDFLoader(new_pdf)

    #load pdf
    pdf_load = pdf.load()

    # chunk creation
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,      # Maximum characters per chunk
        chunk_overlap=200     # Characters shared between chunks
    )

    # divide into chunks
    chunks = splitter.split_documents(pdf_load)

    for i in range(len(chunks)):
        chunks[i].metadata["document_id"] = document_id

    if client.collection_exists(collection_name):

        # Collection already populated, just connect to it
        vector_store = QdrantVectorStore(
            embedding=embeddings,
            client=client,
            collection_name=collection_name
        )
        
        vector_store.add_documents(chunks)

    else:

        vector_store = QdrantVectorStore.from_documents(
                documents=chunks,
                embedding=embeddings,
                url="http://localhost:6333",
                collection_name=collection_name
            )


    return [vector_store,document_id]