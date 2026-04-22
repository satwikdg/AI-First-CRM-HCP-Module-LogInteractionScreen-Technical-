Objective: Conceptualize and outline the key components of an AI-first Customer Relationship Management (CRM) system, specifically focusing on the Healthcare Professional (HCP) module. You should approach this task with the mindset of a life science expert designing a tool for field representatives.
Core Requirements & Tech Stack:
Functionality: Design the "Log Interaction Screen." This screen must be offer users the flexibility to log interactions with HCPs via either a structured form or a conversational chat interface.
Frontend: React UI with Redux for state management.
Backend: Python with FastAPI.
AI Agent Framework: LangGraph.
LLMs: Utilize Groq(https://console.groq.com/docs/models), specifically the gemma2-9b-it model (assume you will create a new API token for this). You may also consider llama-3.3-70b-versatile for context.
Database: MySQL/Postgres SQL
Font: Google Inter.
You may use Gemini 2.5 Pro (1-month free trial) or ChatGPT 5.0 for all coding and research, with zero human-written code.
LangGraph AI Agent & Tools: 
Describe the role of the LangGraph agent in managing HCP interactions.
Define a minimum of five (5) specific "tools" that this LangGraph agent would use for sales-related activities. Two tools must be: 
Log Interaction: Detail how this tool captures interaction data (potentially using the LLM for summarization, entity extraction, etc.).
Edit Interaction: How this tool allows modification of logged data.
