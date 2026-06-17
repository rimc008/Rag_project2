from vector_db import client,embeddings,collection_name
from langchain_qdrant import QdrantVectorStore
from qdrant_client.models import Filter, FieldCondition, MatchValue

vector_store = None
retriver = None


def retrieve_quiz_number(query,number,document_id):
    
    if client.collection_exists(collection_name):
        vector_store = QdrantVectorStore(
            client=client,
            embedding=embeddings,
            collection_name=collection_name
        )


        retriver = vector_store.as_retriever(search_kwargs={"k": number,"filter": Filter(
            must=[FieldCondition(key="metadata.document_id", match=MatchValue(value=document_id))]
        )})
        return retriver.invoke(query)
    
    else:
        raise Exception("Collection does not exist")


def retrieve_quiz(query:str,number,document_id:str):

    retrived = retrieve_quiz_number(query,number,document_id)   
    return retrived
    