import React, { useState } from "react";
import axios from "axios";
import "./InputForm.css";

export default function InputForm() {
  const [passage, setPassage] = useState("");
  const [grade, setGrade] = useState("5");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse("⏳ Generating questions...");
    try {
      const res = await axios.post("http://127.0.0.1:8000/generate", {
        passage,
        grade_level: parseInt(grade),
      });
      setResponse(res.data.questions);
    } catch (err) {
      setResponse("❌ Error generating questions. Please check server.");
    }
  };

  return (
    <div className="input-form">
      <form onSubmit={handleSubmit}>
        <textarea
          rows="8"
          placeholder="Paste your passage here..."
          value={passage}
          onChange={(e) => setPassage(e.target.value)}
          required
        />
        <div className="grade-select">
          <label>Grade Level: </label>
          <select value={grade} onChange={(e) => setGrade(e.target.value)}>
            {[...Array(12)].map((_, i) => (
              <option key={i}>{i + 1}</option>
            ))}
          </select>
        </div>
        <button type="submit">✨ Generate Questions</button>
      </form>

      {response && (
        <div className="response-box">
          <h3>📘 Generated Questions & Answers</h3>
          <pre>{response}</pre>
        </div>
      )}
    </div>
  );
}
