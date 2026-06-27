from rag_logical_end.retriever_notes import retrieve_notes
from rag_logical_end.generator_notes import generate_answer3


def notes_upload(question:str,document_id:str):

    try:
        data4 = retrieve_notes(question,document_id)

        aianswer3 = generate_answer3(data4)

        if not aianswer3:
            return {"success":False,"message":aianswer3["message"]}
        
        return {"success":True,"message":aianswer3["notes"]}
    
    except Exception as e:
        return {"success":False,"message":str(e)}


    
    