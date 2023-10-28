import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [charLimit, setCharLimit] = useState(50);
  const [fontSize, setFontSize] = useState(16);

  const handleTextChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue.length <= charLimit) {
      setText(inputValue);
    } else {
      e.preventDefault();
    }

    const wordCount = inputValue.split(/\s+/).filter(Boolean).length;
    const charCount = inputValue.length;

    document.getElementById(
      "word-counter"
    ).textContent = `Word Count: ${wordCount}`;
    document.getElementById(
      "char-counter"
    ).textContent = `Character Count: ${charCount}`;
  };

  const handleCharLimitChange = (e) => {
    const newCharLimit = parseInt(e.target.value);
    setCharLimit(newCharLimit);
  };

  const handleFontSizeChange = (e) => {
    const newFontSize = e.target.value;
    setFontSize(newFontSize);
  };

  return (
    <div className="App">
      <textarea
        onChange={handleTextChange}
        value={text}
        style={{ fontSize: `${fontSize}px` }}
      ></textarea>
      <div id="word-counter">Word Count: 0</div>
      <div id="char-counter">Character Count: 0</div>
      <label htmlFor="char-limit-input">Character Limit:</label>
      <input
        type="number"
        id="char-limit-input"
        value={charLimit}
        onChange={handleCharLimitChange}
      />
      <label htmlFor="fontSize-input">Font Size:</label>
      <input
        type="range"
        id="fontSize-input"
        min="16"
        max="32"
        step="1"
        value={fontSize}
        onChange={handleFontSizeChange}
      />
    </div>
  );
}

export default App;
