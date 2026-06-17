from rag_logical_end.retriever_quiz import retrieve_quiz
from rag_logical_end.generator_quiz import generate_answer1

def quiz_upload(question:str,number:str,document_id:str):

    try:
        data1 = retrieve_quiz(question,int(number),document_id)

        aianswer1 = generate_answer1(question,data1)

        if (aianswer1["success"] == False):
            return {"success":False,"message":aianswer1["message"]}
        
        return {"success":True,"message":aianswer1["quiz"]}
    
    except Exception as e:
        return {"success":False, "message":str(e)}