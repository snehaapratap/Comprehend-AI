import React from "react";
import InputForm from "./components/InputForm";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="form-card">
        <h2>🧠 AI Reading Comprehension Generator</h2>
        <p>Generate questions for your passage based on grade level</p>
        <InputForm />
      </div>
    </div>
  );
}

export default App;
