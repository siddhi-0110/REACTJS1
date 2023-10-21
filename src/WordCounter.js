import React, { useState } from 'react';
import './WordCounter.css'; // Import the CSS file

function ParagraphWordCounter() {
  const [text, setText] = useState('');

  const wordCount = text.split(/\s/).filter(word => word !== '').length;

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="counter-box">
      <h2>Paragraph Word Counter</h2>
      <textarea
        rows="5"
        placeholder="Enter text here..."
        value={text}
        onChange={handleTextChange}
      />
      <p>Word count: {wordCount}</p>
    </div>
  );
}

export default ParagraphWordCounter;
