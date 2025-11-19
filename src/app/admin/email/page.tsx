"use client";
import { useState } from "react";

export default function AdminEmailPage() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ to, subject, text }),
    });
    const data = await res.json();
    setLoading(false);
    if (data.success) setResult("Email sent!");
    else setResult(`Error: ${data.error}`);
  }

  return (
    <div>
      <h2>Send Test Email (Resend)</h2>
      <form onSubmit={handleSend} style={{ maxWidth: 400 }}>
        <div>
          <label>To:</label>
          <input type="email" value={to} onChange={e => setTo(e.target.value)} required style={{ width: "100%" }} />
        </div>
        <div>
          <label>Subject:</label>
          <input type="text" value={subject} onChange={e => setSubject(e.target.value)} required style={{ width: "100%" }} />
        </div>
        <div>
          <label>Text:</label>
          <textarea value={text} onChange={e => setText(e.target.value)} required style={{ width: "100%" }} />
        </div>
        <button type="submit" disabled={loading}>{loading ? "Sending..." : "Send Email"}</button>
      </form>
      {result && <p>{result}</p>}
    </div>
  );
}
