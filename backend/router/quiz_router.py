from fastapi import APIRouter,Request
from controllers.quiz_controller import quiz_upload

router = APIRouter()

@router.post("/quiz")
async def quiz_route(request:Request):
    
    try:
        body = await request.json()  # read ONCE
        question = body.get("question")
        number = body.get("number")
        document_id = body.get("document_id")

        if not question:
            return {"success":False,"message":"write a valid quesion"}
        
        return quiz_upload(question,number,document_id)
    
    except Exception as e:
        return {"success":False, "message":str(e)}