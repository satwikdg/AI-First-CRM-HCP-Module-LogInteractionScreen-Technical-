import os
from groq import Groq
from langchain_core.messages import HumanMessage
from langgraph.graph import StateGraph, END

# Use your Groq API Key
client = Groq(api_key="gsk_your_token_here")

async def extract_hcp_data(user_text: str):
    # Prompting Gemma 2 9B for structured extraction
    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "system",
                "content": "You are a medical CRM agent. Extract JSON: hcp_name, product, sentiment, follow_up_needed (bool), summary."
            },
            {"role": "user", "content": user_text}
        ],
        model="gemma2-9b-it",
        response_format={"type": "json_object"}
    )
    return chat_completion.choices[0].message.content