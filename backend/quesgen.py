def build_prompt(passage: str, grade_level: int):
    return f"""
You are an expert teacher creating reading comprehension questions for Grade {grade_level}.
Passage:
\"\"\"{passage}\"\"\"

Generate at least 5 questions of diverse types (multiple-choice, short answer, true/false).
Provide an answer key too.
Questions should be relevant, clear, and grade-appropriate.
Format:
Q1. [question]
A1. [answer]
Q2. ...
"""
