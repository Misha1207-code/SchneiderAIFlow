"use client";

import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import PromptCard from "../components/PromptCard";
import WorkflowCard from "../components/WorkflowCard";
import FlowDiagram from "../components/FlowDiagram";
import RecommendationCard from "../components/RecommendationCard";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState<any>(null);

  const generateWorkflow = async () => {
    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

      console.log("Status:", res.status);

      const text = await res.text();

      console.log("Response:", text);

      if (!text) {
        console.error("Backend returned an empty response.");
        return;
      }

      try {
        const data = JSON.parse(text);

        console.log("Parsed Data:", data);

        setResponse(data);
      } catch (err) {
        console.error("Invalid JSON returned from backend.");
        console.error(text);
      }
    } catch (err) {
      console.error("Fetch Error:", err);
    }
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main">
        <Header />

        <PromptCard
          prompt={prompt}
          setPrompt={setPrompt}
          generateWorkflow={generateWorkflow}
        />

        <WorkflowCard data={response} />

        <FlowDiagram data={response} />

        <RecommendationCard />
      </div>
    </div>
  );
}