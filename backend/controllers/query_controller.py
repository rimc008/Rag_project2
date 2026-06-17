from rag_logical_end.retriver import retrieve
from rag_logical_end.generator import generate_answer

def query_upload(question:str,document_id:str):

    try:
        data = retrieve(question,document_id)

        if (document_id==""):
            return {"success":False,"message":"Upload Pdf First"}

        aianswer = generate_answer(question,data)

        if not aianswer:
            return {"success":False,"message":"can't get the answer"}
        
        return {"success":True,"message":str(aianswer)}
    
    except Exception as e:
        return {"success":False, "message":str(e)}
