import React, { useState } from "react";

function Challenge() {
  const [userAnswer, setUserAnswer] = useState("");
  const correctAnswer = "println";

  const handleSubmit = () => {
    if (userAnswer === correctAnswer) {
      alert("Correct!");
    } else {
      alert("Incorrect! Hint: Use 'println' to print in Java.");
    }
  };

  return (
    <div>
      <h1>Challenge: Fill in the Blank</h1>
      <p>System.out.______(&quot;Hello, World!&quot;);</p>
      <input
        type="text"
        placeholder="Enter your answer"
        onChange={(e) => setUserAnswer(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Challenge;