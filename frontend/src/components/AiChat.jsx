import { useState } from "react";
import { runAI } from "../utils/ai";

export default function AiChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleAI = async () => {
    const res = await runAI(input);
    setOutput(res);
  };

  return (
    <>
      <button className="ai-btn" onClick={() => setOpen(!open)}>
        AI
      </button>

      {open && (
        <div className="ai-box glass">
          <input
            placeholder="Type command..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button className="btn" onClick={handleAI}>
            Run
          </button>

          <p style={{marginTop:"10px"}}>{output}</p>
        </div>
      )}
    </>
  );
}
