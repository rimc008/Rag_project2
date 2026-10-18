from vector_db import embeddings, client, collection_name
from langchain_qdrant import QdrantVectorStore
from qdrant_client.models import Filter, FieldCondition, MatchValue
from langchain_cohere import CohereRerank
from langchain_classic.retrievers import (
    ContextualCompressionRetriever
)
import os
from dotenv import load_dotenv

load_dotenv()

vector_store = None
retriever = None

print(collection_name)

def retrieve_answer(query,document_id):
    if client.collection_exists(collection_name):
        vector_store = QdrantVectorStore(
            client=client,
            collection_name=collection_name,
            embedding=embeddings,
        )

        # Wraps vector_store in a "retriever" interface — a standard LangChain object whose job is: take a text query, return the top k (here, 5) most similar documents. search_kwargs={"k": 5} configures how many results to return.
        retriever = vector_store.as_retriever(search_kwargs={"k": 6,"filter": Filter(
            must=[FieldCondition(key="metadata.document_id", match=MatchValue(value=document_id))]
        )})

        # reranker 
        reranker = CohereRerank(
        model="rerank-v3.5",
        top_n=3,
        cohere_api_key=os.environ["COHERE_KEY"]
        )

        retriever_ = ContextualCompressionRetriever(
            base_compressor = reranker,
            base_retriever= retriever
        )

        return retriever_.invoke(query)
    else:
        raise Exception("collection does not exist")

# a simple retrieve function wrap with a question
def retrieve(query: str,document_id:str):
    
    return retrieve_answer(query,document_id)