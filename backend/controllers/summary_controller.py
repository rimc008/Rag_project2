from rag_logical_end.retriever_summary import retrieve_summary
from rag_logical_end.generator_summary import generate_answer2


def summary_upload(question:str,document_id:str):

    try:
        data3 = retrieve_summary(question,document_id)

        aianswer2 = generate_answer2(data3)

        if not aianswer2:
            return {"success":False,"message":aianswer2["message"]}
        
        return {"success":True,"message":aianswer2["summary"]}
    
    except Exception as e:
        return {"success":False,"message":str(e)}


    
    