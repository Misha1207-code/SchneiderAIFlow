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

      const res = await fetch(
        "https://turbo-space-broccoli-pjg9w569rv9w2qq6-8000.app.github.dev/analyze",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            prompt,
          }),
        }
      );

      const data = await res.json();

      setResponse(data);

    } catch (err) {

      console.error(err);

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