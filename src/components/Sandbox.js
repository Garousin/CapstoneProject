import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";

function Sandbox() {
  const [code, setCode] = useState("// Write your code here!");

  const runCode = () => {
    try {
      console.log(eval(code)); // Basic execution
      alert("Check the console for output!");
    } catch (error) {
      alert("Error in your code: " + error.message);
    }
  };

  return (
    <div>
      <h1>Sandbox</h1>
      <CodeMirror
        value={code}
        options={{ mode: "javascript", lineNumbers: true }}
        onBeforeChange={(editor, data, value) => setCode(value)}
      />
      <button onClick={runCode}>Run Code</button>
    </div>
  );
}

export default Sandbox;