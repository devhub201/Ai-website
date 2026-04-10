import { useState } from "react";

export default function AiChat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="ai-btn"
      >
        AI
      </button>

      {open && (
        <div className="ai-box glass">
          <p>Ask AI...</p>
          <input placeholder="Type command..." />
        </div>
      )}
    </>
  );
}
