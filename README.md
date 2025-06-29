
<div align="center">
  <h1>🧠 Comprehend AI</h1>
  <p><strong>Auto-generate diverse and grade-appropriate reading comprehension questions using LLMs via Groq API.</strong></p>
</div>

---

## 🚀 Project Overview

This project builds a complete full-stack application that allows users to:

* ✅ Input a reading passage
* ✅ Select a grade level (1–12)
* ✅ Generate 5+ diverse reading comprehension questions
* ✅ View clean Q\&A output in the browser

Powered by **Groq’s blazing-fast LLM API (llama-3.1-8b-instant)** and built with **FastAPI + React**.

---

## 🗂️ File Structure

```
ai-comprehension-app/
├── backend/                    # FastAPI Backend
│   ├── main.py                 # Main FastAPI app
│   ├── groq_utils.py           # Groq API integration
│   ├── schemas.py              # Pydantic data models
│   ├── question_generator.py   # Prompt engineering logic
│   └── requirements.txt        # Python dependencies
│
├── frontend/                   # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.js
│   │   └── components/
│   │       ├── InputForm.jsx
│   │       └── InputForm.css
│   └── package.json            # React dependencies
│
├── outputs/                    # sample outputs
│   ├── sample_message.txt      # sample input message
│   ├── grade3.txt              # grade 3 Q n A
│   ├── grade6.txt              # grade 6 Q n A
│   ├── grade10.txt             # grade 10 Q n A
├── .gitignore
├── Comprehend AI report        # report
├── sneha comprehend ai.mp4     # video demonstration
└── README.md                   # Project documentation
```

---

## ✨ Core Features

* 📤 **Passage Input:** Paste or upload any passage
* 🎓 **Grade Selection:** From Grade 1 to 12
* 🧾 **Question Generation:** 5+ questions per passage
* ✅ **Answer Key:** Auto-generated accurate answers
* 🎯 **Question Diversity:** MCQs, True/False, Short Answers
* 💬 **LLM Prompt Engineering:** Ensures relevance and clarity

---

## 🌐 Tech Stack

| Layer      | Technology          |
| ---------- | ------------------- |
| Frontend   | React + CSS         |
| Backend    | FastAPI (Python)    |
| LLM API    | Groq (llama-3.1-8b-instant) |
| Deployment | Localhost (dev)     |

---

## 🔧 Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/snehaapratap/Comprehend-AI.git
cd Comprehend-AI
```

---

### 2️⃣ Backend Setup

```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt

# Set your Groq API key
export GROQ_API_KEY="your_key_here"

# Run FastAPI server
uvicorn backend.main:app --reload

```

Visit: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🖼️ Screenshots

<img width="1470" alt="Screenshot 2025-06-29 at 14 02 44" src="https://github.com/user-attachments/assets/d6a39162-ed73-4b12-9537-7f63c43d4091" />

---

## 🧪 Sample Prompt Format

```python
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
```

---

## 🏆 Bonus Features (Coming Soon)

* 🎚️ Difficulty slider within a grade
* 🌍 Multilingual question generation
* 📤 Export as PDF/CSV
* 🧪 Filter by question type

---

## 🧾 Deliverables

* ✅ Full source code (frontend + backend)
* ✅ `README.md`
* ✅ `report.pdf` – Prompting strategy + system design
* ✅ Sample passages & outputs in `outputs/`

---

