from fastapi import APIRouter,Request
from controllers.query_controller import query_upload

router = APIRouter()

@router.post("/question")
async def query_route(request:Request):
    
    try:
        body = await request.json()
        question = body.get("question")
        document_id = body.get("document_id")
        chunks = body.get("chunks")

        if not question:
            return {"success":False,"message":"write a valid quesion"}
        
        return query_upload(question,document_id,chunks)
    
    except Exception as e:
        return {"success":False, "message":str(e)}