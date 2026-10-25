from vector_db import embeddings, client, collection_name
from langchain_qdrant import QdrantVectorStore
from qdrant_client.models import Filter, FieldCondition, MatchValue
from langchain_cohere import CohereRerank
from langchain_classic.retrievers import (
    ContextualCompressionRetriever,EnsembleRetriever
)
from langchain_community.retrievers import BM25Retriever
from langchain_core.documents import Document

import os
from dotenv import load_dotenv

load_dotenv()

vector_store = None
retriever = None

print(collection_name)

def retrieve_answer(query,document_id,all_chunks):
    if client.collection_exists(collection_name):
        vector_store = QdrantVectorStore(
            client=client,
            collection_name=collection_name,
            embedding=embeddings,
        )

        all_chunks = [
            Document(
                page_content=chunk["page_content"],
                metadata=chunk.get("metadata", {})
            ) if isinstance(chunk, dict) else chunk
            for chunk in all_chunks
            if (
                chunk.get("metadata", {}).get("document_id") == document_id
                if isinstance(chunk, dict)
                else chunk.metadata.get("document_id") == document_id
            )
        ]

        # Keyword search
        bm25_retriever = BM25Retriever.from_documents(all_chunks)
        bm25_retriever.k = 6

        # Wraps vector_store in a "retriever" interface — a standard LangChain object whose job is: take a text query, return the top k (here, 5) most similar documents. search_kwargs={"k": 5} configures how many results to return.
        retriever = vector_store.as_retriever(search_kwargs={"k": 6,"filter": Filter(
            must=[FieldCondition(key="metadata.document_id", match=MatchValue(value=document_id))]
        )})

        # Hybrid search
        hybrid_retriever = EnsembleRetriever(
            retrievers=[
                bm25_retriever,
                retriever
            ],
            weights=[0.4, 0.6]
        )

        # reranker 
        reranker = CohereRerank(
        model="rerank-v3.5",
        top_n=3,
        cohere_api_key=os.environ["COHERE_KEY"]
        )

        retriever_ = ContextualCompressionRetriever(
            base_compressor = reranker,
            base_retriever= hybrid_retriever
        )

        return retriever_.invoke(query)
    else:
        raise Exception("collection does not exist")

# a simple retrieve function wrap with a question
def retrieve(query: str,document_id:str,chunks:list):
    
    return retrieve_answer(query,document_id,chunks)

