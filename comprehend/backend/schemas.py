from pydantic import BaseModel

class ComprehensionRequest(BaseModel):
    passage: str
    grade_level: int
