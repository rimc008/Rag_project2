
from vector_db import client,embeddings,collection_name
from langchain_qdrant import QdrantVectorStore
from qdrant_client.models import Filter, FieldCondition, MatchValue

vector_store = None
retriver = None


def retrieve_notes_number(query,document_id):
    
    if client.collection_exists(collection_name):
        vector_store = QdrantVectorStore(
            client=client,
            embedding=embeddings,
            collection_name=collection_name
        )

        collection_info = client.get_collection(collection_name)
        total_chunks = collection_info.points_count

        print(total_chunks)

        forward_chunks = 0

        if (total_chunks > 60):
            forward_chunks = 60
        
        elif (total_chunks <= 60 and total_chunks > 20):
            forward_chunks = total_chunks-1
        
        elif (total_chunks < 20):
            forward_chunks = total_chunks
        
        print(forward_chunks)
            

        retriver = vector_store.as_retriever(search_kwargs={"k": forward_chunks,"filter": Filter(
            must=[FieldCondition(key="metadata.document_id", match=MatchValue(value=document_id))]
        )})
        return retriver.invoke(query)
    
    else:
        raise Exception("Collection does not exist")


def retrieve_notes(query:str,document_id:str):

    retrived = retrieve_notes_number(query,document_id)   
    return retrived
