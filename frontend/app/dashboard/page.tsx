"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {

  const [data, setData] =
    useState<any>(null);

  useEffect(() => {

    const saved =
      localStorage.getItem(
        "analysis"
      );

    if (saved) {

      setData(
        JSON.parse(saved)
      );

    }

  }, []);

  if (!data) {

    return (
      <div className="p-10">
        No data found
      </div>
    );

  }

  const result = data.result;

  console.log(
  "KEY DECISIONS:",
  result.analysis.key_decisions
);

console.log(
  "RECOMMENDATIONS:",
  result.analysis.recommendations
);

  return (

    <main className="min-h-screen bg-slate-50 p-8">

     <div className="mb-10">

  <h1 className="text-5xl font-bold">

    WorkSphere AI

  </h1>

  <p className="text-xl text-gray-600 mt-2">

    Multi-Agent Workplace Intelligence Platform

  </p>

</div>

      {/* Executive Summary */}

      <div className="bg-white rounded-xl shadow p-6 mb-6">

        <h2 className="text-2xl font-semibold mb-3">
          Executive Summary
        </h2>

        <p className="text-gray-700">
          {result.report.executive_summary}
        </p>

      </div>

      <div className="bg-white rounded-xl shadow p-6 mb-6">

    {/* Key Decisions */}


<div className="bg-white rounded-xl shadow p-6 mb-6">

  <h2 className="text-2xl font-semibold mb-4">
    Key Decisions
  </h2>


  <ul className="list-disc pl-6">

{
  result.analysis.key_decisions.map(
    (
      decision: any,
      index: number
    ) => (

      <div
        key={index}
        className="border rounded p-3 mb-3"
      >

        <p className="font-semibold">

          {
            decision.decision ||
            decision.item ||
            "Decision"
          }

        </p>

        <p>

          Owner:

          {
            decision.responsible_party ||
            decision.owner ||
            "Not specified"
          }

        </p>

        {
          decision.deadline && (

            <p>

              Deadline:
              {" "}
              {decision.deadline}

            </p>

          )
        }

        {
          decision.status && (

            <p>

              Status:
              {" "}
              {decision.status}

            </p>

          )
        }

      </div>

    )
  )
}

  </ul>

</div>

  <h2 className="text-2xl font-semibold mb-3">

    Business Impact

  </h2>

  <p className="text-gray-700">

    {
      result.report.business_impact
    }

  </p>

</div>

      <div className="mb-6">

  <button

    onClick={async () => {

      const response =
        await fetch(
          "http://localhost:8000/generate-report",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json"
            },
            body: JSON.stringify(
              result
            )
          }
        );

      const blob =
        await response.blob();

      const url =
        window.URL.createObjectURL(
          blob
        );

      const a =
        document.createElement(
          "a"
        );

      a.href = url;

      a.download =
        "WorkSphere_Report.pdf";

      a.click();

    }}

    className="
      bg-blue-600
      text-white
      px-5
      py-3
      rounded-lg
      hover:bg-blue-700
    "
  >

    📄 Download Executive Report

  </button>

</div>

      {/* Metrics */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

        <div className="bg-white rounded-xl shadow p-6">

          <h3 className="font-semibold">
            Security Score
          </h3>

          <div className="text-5xl font-bold text-green-600 mt-3">
            {result.report.security_score}
          </div>

        </div>

        <div className="bg-white rounded-xl shadow p-6">

          <h3 className="font-semibold">
            Tasks Identified
          </h3>

          <div className="text-5xl font-bold text-blue-600 mt-3">
            {result.tasks.tasks.length}
          </div>

        </div>

        <div className="bg-white rounded-xl shadow p-6">

          <h3 className="font-semibold">
            Risks Detected
          </h3>

          <div className="text-5xl font-bold text-red-600 mt-3">
            {result.report.top_risks.length}
          </div>

        </div>

      </div>

      {/* Tasks */}

      <div className="bg-white rounded-xl shadow p-6 mb-6">

        <h2 className="text-2xl font-semibold mb-4">
          Extracted Tasks
        </h2>

        <div className="space-y-3">

          {result.tasks.tasks.map(
            (
              task: any,
              index: number
            ) => (

              <div
                key={index}
                className="border rounded p-3"
              >

                <div className="font-semibold">
                  {task.task}
                </div>

                <div className="text-sm text-gray-600">
                  Owner: {task.owner}
                </div>

                <div className="text-sm text-gray-600">
                  Deadline: {task.deadline || "Not specified"}
                </div>

              </div>

            )
          )}

        </div>

      </div>

      {/* Priority Actions */}

      <div className="bg-white rounded-xl shadow p-6 mb-6">

        <h2 className="text-2xl font-semibold mb-4">
          Priority Actions
        </h2>

        <ul className="list-disc pl-6">

          {result.report.priority_actions.map(
            (
              action: string,
              index: number
            ) => (

              <li key={index}>
                {action}
              </li>

            )
          )}

        </ul>

      </div>

      {/* Risks */}

      <div className="bg-white rounded-xl shadow p-6 mb-6">

        <h2 className="text-2xl font-semibold mb-4">
          Top Risks
        </h2>

        <ul className="list-disc pl-6">

          {result.report.top_risks.map(
            (
              risk: string,
              index: number
            ) => (

              <li key={index}>
                {risk}
              </li>

            )
          )}

        </ul>

      </div>

      {/* AI Insights */}

      <div className="bg-white rounded-xl shadow p-6 mb-6">

        <h2 className="text-2xl font-semibold mb-4">
          AI Insights
        </h2>

        <ul className="list-disc pl-6">

          {result.report.key_insights.map(
            (
              insight: string,
              index: number
            ) => (

              <li key={index}>
                {insight}
              </li>

            )
          )}

        </ul>

      </div>

      <div className="bg-white rounded-xl shadow p-6 mb-6">

  <h2 className="text-2xl font-semibold mb-4">

    Knowledge Sources Used

  </h2>

  <div className="space-y-2">

{
  result.retrieval.map(
    (
      doc: any,
      index: number
    ) => (

      <div
        key={index}
        className="
          border
          rounded
          p-3
          bg-green-50
        "
      >

        <div>
          ✓ {doc.document}
        </div>

        <div className="text-sm text-gray-500">

          Relevance Score:
          {doc.score}

        </div>

      </div>

    )
  )
}

  </div>

</div>

<div className="bg-white rounded-xl shadow p-6 mb-6">

  <h2 className="text-2xl font-semibold mb-4">

    AI Recommendations

  </h2>
  
  <ul className="list-disc pl-6">

{
  result.analysis.recommendations.map(
    (
      rec: any,
      index: number
    ) => (

      <div
        key={index}
        className="border rounded p-3 mb-3"
      >

        <p className="font-semibold">

          {
            rec.recommendation ||
            rec.item ||
            "Recommendation"
          }

        </p>

        <p>

          Owner:

          {
            rec.responsible_party ||
            rec.owner ||
            "Not specified"
          }

        </p>

      </div>

    )
  )
}

  </ul>

  <div className="bg-white rounded-xl shadow p-6 mb-6">

  <h2 className="text-2xl font-semibold mb-4">

    Agent Execution Details

  </h2>

  <div className="grid md:grid-cols-2 gap-4">

    <div className="border rounded p-4">

      <h3 className="font-bold">
        Planner Agent
      </h3>

      <p>
        Tasks Found:
        {" "}
        {
          result.agent_trace.planner.tasks_found
        }
      </p>

    </div>

    <div className="border rounded p-4">

      <h3 className="font-bold">
        Retrieval Agent
      </h3>

      <p>
        Sources Used:
      </p>

      <ul className="list-disc pl-5">

        {
          result.agent_trace.retrieval.sources_used.map(
            (
              source: string,
              index: number
            ) => (

              <li key={index}>
                {source}
              </li>

            )
          )
        }

      </ul>

    </div>

    <div className="border rounded p-4">

      <h3 className="font-bold">
        Analyst Agent
      </h3>

      <p>
        Decisions:
        {" "}
        {
          result.agent_trace.analyst.decisions
        }
      </p>

      <p>
        Risks:
        {" "}
        {
          result.agent_trace.analyst.risks
        }
      </p>

      <p>
        Recommendations:
        {" "}
        {
          result.agent_trace.analyst.recommendations
        }
      </p>

    </div>

    <div className="border rounded p-4">

      <h3 className="font-bold">
        Insight Agent
      </h3>

      <p>
        Insights Generated:
        {" "}
        {
          result.agent_trace.insight.insights
        }
      </p>

    </div>

    <div className="border rounded p-4">

      <h3 className="font-bold">
        Report Agent
      </h3>

      <p>
        Executive Report Generated:
        {" "}
        {
          result.agent_trace.report.generated
            ? "Yes"
            : "No"
        }
      </p>

    </div>

  </div>

</div>

</div>

      {/* Agent Swarm Visualization */}

      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="text-2xl font-semibold mb-6">
          Agent Swarm Workflow
        </h2>

        <div className="flex flex-col items-center gap-2 text-center">

          <div className="border px-6 py-2 rounded">
            Upload File
          </div>

          <div className="text-green-600 font-bold">
            ✓
          </div>

          <div className="border px-6 py-2 rounded">
            Planner Agent
          </div>

          <div className="text-green-600 font-bold">
           ✓
          </div>

          <div className="border px-6 py-2 rounded">
            Security Agent
          </div>

          <div className="text-green-600 font-bold">
            ✓
          </div>

          <div className="border px-6 py-2 rounded">
            Retrieval Agent
          </div>

          <div className="text-green-600 font-bold">
            ✓
          </div>

          <div className="border px-6 py-2 rounded">
            Analyst Agent
          </div>

          <div className="text-green-600 font-bold">
            ✓
          </div>

          <div className="border px-6 py-2 rounded">
            Task Agent
          </div>

          <div className="text-green-600 font-bold">
             ✓
           </div>

          <div className="border px-6 py-2 rounded">
            Insight Agent
          </div>

          <div className="text-green-600 font-bold">
          ✓
          </div>

          <div className="border px-6 py-2 rounded bg-green-100">
            Report Agent
          </div>

        </div>

      </div>

    </main>

  );
}

<div className="text-center text-gray-500 py-10">

  WorkSphere AI • Multi-Agent Workplace Intelligence Platform

</div>