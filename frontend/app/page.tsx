"use client";

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState(null);
const generateWorkflow = async () => {

    const res = await fetch("https://turbo-space-broccoli-pjg9w569rv9w2qq6-8000.app.github.dev/analyze",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({

            prompt

        })

    });

    const data = await res.json();

    setResponse(data);

}
  return (
    <main
      style={{
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1>SchneiderFlow AI</h1>

      <textarea
        rows={8}
        cols={70}
        placeholder="Describe your workflow..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <br />
      <br />

      <button onClick={generateWorkflow}>
        Generate Workflow
      </button>
      <pre>
        {JSON.stringify(response,null,2)}
        </pre>
    </main>
  );
}