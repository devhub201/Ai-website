export async function runAI(prompt) {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await res.json();

  if (!data.choices) {
    return "Error: API not working";
  }

  return data.choices[0].message.content;
}
