from vector_db import model_summary
from dotenv import load_dotenv
import json

load_dotenv()


def generate_answer3(data4):

    context = "\n\n".join([i.page_content for i in data4])

    prompt = f"""create notes from the following document clearly and concisely:\n\n{context}.Return ONLY valid JSON, no preamble, no markdown formatting, no backticks.Use exactly this structure:
                {{
                "notes": [
                    {{
                    "documentTitle": "name of the document",
                    "tags": ["...","...","...","...",give max 6 relevant tags used in document],
                    "section": [
                            {{
                                heading: "heading of the topic you would discuss",
                                bullets: ["...","...","...",bullet points from the following heading]
                            }}
                        ]
                    }}
                ]
                }}
                """

    response = model_summary.generate_content(prompt)

    raw2 = response.text

    cleaned = raw2.strip().removeprefix("```json").removeprefix("```").removesuffix("```").strip()

    try:
        notes_data = json.loads(cleaned)
    except json.JSONDecodeError:
        return {"success": False, "message": "Failed to parse notes JSON", "raw2": raw2}

    return {"success": True, "notes": notes_data.get("notes", [])}