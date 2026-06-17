# router/ingest_router.py
from fastapi import APIRouter, UploadFile, File
from controllers.ingest_controller import upload

router = APIRouter()

@router.post("/ingest")
async def ingest_route(file: UploadFile = File(...)):
    return await upload(file)