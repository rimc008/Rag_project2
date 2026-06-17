from groq import Groq
from dotenv import load_dotenv

load_dotenv()

genai = Groq()

def generate_answer(question,data):

    context = "\n\n".join([i.page_content for i in data])

    prompt = f"""Answer only from the provided context. Context:{context} Question:{question}"""

    response = genai.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return response.choices[0].message.content