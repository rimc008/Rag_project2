from groq import Groq
from dotenv import load_dotenv
import json

load_dotenv()

genai = Groq()

def generate_answer1(question,data1):

    context = "\n\n".join([i.page_content for i in data1])

    prompt = f"""Answer only from the provided context. Context:{context} Question:{question} .Return ONLY valid JSON, no preamble, no markdown formatting, no backticks. Use exactly this structure:
                {{
                "quiz": [
                    {{
                    "question": "...",
                    "options": {{"A": "...", "B": "...", "C": "...", "D": "..."}},
                    "answer": "A"
                    }}
                ]
                }}
                """

    response = genai.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    raw = response.choices[0].message.content

    cleaned = raw.strip().removeprefix("```json").removeprefix("```").removesuffix("```").strip()

    try:
        quiz_data = json.loads(cleaned)
    except json.JSONDecodeError:
        return {"success": False, "message": "Failed to parse quiz JSON", "raw": raw}

    return {"success": True, "quiz": quiz_data.get("quiz", [])}