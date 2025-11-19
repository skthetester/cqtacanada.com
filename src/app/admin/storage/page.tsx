"use client";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function AdminStoragePage() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    if (!file) return;
    setLoading(true);
    setResult(null);
    const { data, error } = await supabase.storage.from("uploads").upload(file.name, file);
    setLoading(false);
    if (error) setResult(`Error: ${error.message}`);
    else setResult("File uploaded!");
  }

  return (
    <div>
      <h2>Upload File to Supabase Storage</h2>
      <form onSubmit={handleUpload} style={{ maxWidth: 400 }}>
        <input type="file" onChange={e => setFile(e.target.files?.[0] || null)} required />
        <button type="submit" disabled={loading}>{loading ? "Uploading..." : "Upload"}</button>
      </form>
      {result && <p>{result}</p>}
    </div>
  );
}
