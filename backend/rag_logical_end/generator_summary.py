from vector_db import model_summary
from dotenv import load_dotenv
import json

load_dotenv()


def generate_answer2(data3):

    context = "\n\n".join([i.page_content for i in data3])

    prompt = f"""Summarize the following document clearly and concisely:\n\n{context}.Return ONLY valid JSON, no preamble, no markdown formatting, no backticks.Use exactly this structure:
                {{
                "summary": [
                    {{
                    "mainSummary": "...",
                    "keyTakeaways": ["...","...","...","...",give max 20],
                    "keyTopics": ["...","...","...","...",give max 5]
                    }}
                ]
                }}
                """

    response = model_summary.generate_content(prompt)

    raw1 = response.text

    cleaned = raw1.strip().removeprefix("```json").removeprefix("```").removesuffix("```").strip()

    try:
        summary_data = json.loads(cleaned)
    except json.JSONDecodeError:
        return {"success": False, "message": "Failed to parse summary JSON", "raw1": raw1}

    return {"success": True, "summary": summary_data.get("summary", [])}