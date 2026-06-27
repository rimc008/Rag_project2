from fastapi import APIRouter,Request
from controllers.notes_controller import notes_upload

router = APIRouter()

@router.post("/notes")
async def notes_route(request:Request):
    
    try:
        body = await request.json()  # read ONCE
        question = body.get("question")
        document_id = body.get("document_id")

        if not question:
            return {"success":False,"message":"write a valid quesion"}
        
        return notes_upload(question,document_id)
    
    except Exception as e:
        return {"success":False, "message":str(e)}