from fastapi import FastAPI, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from .schemas import ComprehensionRequest
from .groq_utils import call_groq
from .quesgen import build_prompt

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], allow_methods=["*"], allow_headers=["*"]
)

@app.post("/generate")
async def generate_questions(req: ComprehensionRequest):
    prompt = build_prompt(req.passage, req.grade_level)
    result = await call_groq(prompt)
    return {"questions": result}
