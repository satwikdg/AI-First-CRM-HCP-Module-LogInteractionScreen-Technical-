from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional
import uvicorn
from agents import extract_hcp_data

app = FastAPI(title="HCP AI CRM")

class InteractionRequest(充分BaseModel):
    text: str

class InteractionResponse(BaseModel):
    hcp_name: Optional[str]
    product: Optional[str]
    sentiment: Optional[str]
    follow_up_needed: bool
    summary: str

@app.post("/api/log-interaction", response_model=InteractionResponse)
async def log_interaction(request: InteractionRequest):
    try:
        # LangGraph/Groq logic happens here
        result = await extract_hcp_data(request.text)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)