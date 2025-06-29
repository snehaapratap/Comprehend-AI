import React, { useState } from "react";
import axios from "axios";

export default function InputForm() {
  const [passage, setPassage] = useState("");
  const [grade, setGrade] = useState("5");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://127.0.0.1:8000/generate", {
      passage,
      grade_level: parseInt(grade),
    });
    setResponse(res.data.questions);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea rows="8" cols="60" value={passage} onChange={e => setPassage(e.target.value)} placeholder="Paste your passage here" />
        <br />
        <label>
          Grade Level:
          <select value={grade} onChange={e => setGrade(e.target.value)}>
            {[...Array(12).keys()].map(i => <option key={i+1}>{i+1}</option>)}
          </select>
        </label>
        <br />
        <button type="submit">Generate Questions</button>
      </form>
      {response && (
        <div>
          <h3>Generated Questions & Answers</h3>
          <pre>{response}</pre>
        </div>
      )}
    </div>
  );
}
