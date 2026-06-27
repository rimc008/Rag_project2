from fastapi import APIRouter,Request
from controllers.summary_controller import summary_upload

router = APIRouter()

@router.post("/summary")
async def summary_route(request:Request):
    
    try:
        body = await request.json()  # read ONCE
        question = body.get("question")
        document_id = body.get("document_id")

        if not question:
            return {"success":False,"message":"write a valid quesion"}
        
        return summary_upload(question,document_id)
    
    except Exception as e:
        return {"success":False, "message":str(e)}