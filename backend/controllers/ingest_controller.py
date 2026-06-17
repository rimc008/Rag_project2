# controllers/ingest_controller.py
from fastapi import UploadFile
from rag_logical_end.ingest import ingest_pdf
import tempfile
import os

async def upload(file: UploadFile):
    try:
        pdf_bytes = await file.read()

        with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as tmp:
            tmp.write(pdf_bytes)
            tmp_path = tmp.name

        data2 = ingest_pdf(tmp_path)

        os.unlink(tmp_path)  # delete temp file after ingestion

        return {"success": True, "document_id":data2[1] ,"message": "Pdf Uploaded"}

    except Exception as e:
        return {"success": False, "message": str(e)}