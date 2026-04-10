import { useState } from "react";
import { runAI } from "../utils/ai";
import Loading from "./Loading";

export default function AiChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(0);

  const handleAI = async () => {
    setLoading(20);

    setTimeout(() => setLoading(50), 300);

    const res = await runAI(input);

    setLoading(80);

    setTimeout(() => {
      setOutput(res);
      setLoading(100);
    }, 500);

    setTimeout(() => setLoading(0), 800);
  };

  return (
    <>
      {loading > 0 && <Loading progress={loading} />}

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
            Run AI
          </button>

          <p style={{ marginTop: "10px" }}>{output}</p>
        </div>
      )}
    </>
  );
}
