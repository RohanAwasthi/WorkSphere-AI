# WorkSphere AI 🚀

## Multi-Agent Workplace Intelligence Platform

Transform workplace conversations into actionable business intelligence using a collaborative AI Agent Swarm.

---

## 📌 Overview

Organizations conduct hundreds of meetings every month, yet valuable decisions, risks, action items, and insights often remain buried inside lengthy transcripts.

**WorkSphere AI** is a Multi-Agent AI platform that automatically analyzes meeting transcripts, extracts critical business information, identifies risks, generates recommendations, and produces executive-ready reports.

The platform combines specialized AI agents with Retrieval-Augmented Generation (RAG) to provide context-aware workplace intelligence powered by enterprise knowledge bases.

---

## 🎯 Problem Statement

Modern organizations face several challenges:

* Important decisions are lost in meeting notes
* Action items are manually tracked
* Risks are discovered too late
* Leadership lacks visibility into meeting outcomes
* Knowledge from company policies and standards is not consistently applied

### Business Impact

* Delayed execution
* Reduced accountability
* Increased operational risk
* Poor decision visibility

---

## 💡 Solution

WorkSphere AI leverages a collaborative swarm of AI agents where each agent performs a specialized task.

The platform:

1. Accepts meeting transcripts
2. Retrieves organizational knowledge
3. Extracts decisions and action items
4. Identifies risks and bottlenecks
5. Generates recommendations
6. Produces executive-ready reports
7. Provides agent-level traceability

---

## 🏗️ System Architecture

```text
Meeting Transcript
        │
        ▼

   Next.js Frontend
        │
        ▼

   FastAPI Backend
        │
        ▼

  Agent Orchestrator
        │
 ┌──────┼──────────────┐
 │      │              │
 ▼      ▼              ▼

Planner  Retrieval   Security
Agent    Agent       Agent

          │
          ▼

       Analyst
        Agent
          │
          ▼

        Task
        Agent
          │
          ▼

       Insight
        Agent
          │
          ▼

       Report
        Agent
```

---

## 🤖 Multi-Agent AI Workflow

### Planner Agent

* Understands meeting workflow
* Identifies execution stages
* Creates workflow plans

### Retrieval Agent

* Retrieves company policies
* Retrieves engineering standards
* Provides contextual knowledge

### Security Agent

* Detects sensitive information
* Identifies prompt injection attempts
* Generates security score

### Analyst Agent

* Generates executive summaries
* Extracts decisions
* Detects risks
* Creates recommendations

### Task Agent

* Extracts action items
* Identifies owners
* Detects deadlines

### Insight Agent

* Identifies bottlenecks
* Generates productivity insights
* Detects delivery risks

### Report Agent

* Creates executive reports
* Generates business impact analysis
* Produces final dashboard content

---

## 📚 Retrieval-Augmented Generation (RAG)

WorkSphere AI enriches AI responses using enterprise knowledge documents.

### Knowledge Sources

#### company_policy.txt

* QA approval requirements
* Deployment policies
* Incident documentation standards

#### engineering_standards.txt

* API development standards
* Error handling guidelines
* Logging requirements
* Documentation requirements

This ensures recommendations align with organizational standards and best practices.

---

## ✨ Key Features

### Executive Summary Generation

Automatically creates leadership-ready summaries.

### Task Extraction

Extracts:

* Task
* Owner
* Deadline

### Risk Detection

Identifies:

* Delivery risks
* Compliance risks
* Documentation risks

### AI Recommendations

Suggests actionable improvements based on company policies and engineering standards.

### Agent Traceability

Provides transparency into:

* Sources used
* Decisions extracted
* Risks detected
* Recommendations generated

### Security Analysis

Detects:

* Emails
* Phone numbers
* Prompt injection attempts

---

## 📊 Sample Output

### Executive Summary

> API integration to be completed by Friday, deployment documentation prepared, and testing scheduled for next week.

### Tasks Identified

| Owner | Task                             | Deadline      |
| ----- | -------------------------------- | ------------- |
| John  | Complete API Integration         | Friday        |
| Sarah | Prepare Deployment Documentation | Not Specified |
| Mike  | Perform Testing                  | Next Week     |

### Risks Detected

* Missing QA signoff
* Incomplete documentation
* Testing delays

### Recommendations

* Add unit tests and logging
* Obtain QA approval before deployment
* Document incidents within 24 hours

---

## 📷 Application Screenshots

### Upload Experience

Upload a meeting transcript and start AI-powered analysis.

### Executive Dashboard

View:

* Executive Summary
* Security Score
* Tasks Identified
* Risks Detected

### Knowledge Retrieval

View enterprise documents used during analysis.

### Agent Traceability

Track how each AI agent contributed to the final report.

---

## 🛠️ Technology Stack

### Frontend

* Next.js
* React
* Tailwind CSS

### Backend

* FastAPI
* Python

### AI & LLM

* Ollama
* Llama 3.1

### AI Architecture

* Multi-Agent AI
* Retrieval-Augmented Generation (RAG)

### Knowledge Base

* Enterprise Documents
* Meeting Transcripts

---

## 🚀 Installation Guide

### Clone Repository

```bash
git clone <repository-url>
cd workshpere-ai
```

### Backend Setup

```bash
cd backend

python -m venv .venv

# Windows
.venv\Scripts\activate

pip install -r requirements.txt

python -m uvicorn main:app --reload
```

Backend URL:

```text
http://localhost:8000
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend URL:

```text
http://localhost:3000
```

---

## 🎬 Demo Workflow

### Step 1

Upload meeting transcript.

### Step 2

Multi-Agent AI analyzes transcript.

### Step 3

Knowledge documents are retrieved.

### Step 4

Tasks, risks, and decisions are extracted.

### Step 5

Executive report is generated.

### Step 6

Results are displayed with full traceability.

---

## 📈 Business Impact

WorkSphere AI enables organizations to:

* Improve meeting productivity
* Increase accountability
* Reduce delivery risks
* Accelerate decision-making
* Enhance executive visibility
* Leverage enterprise knowledge effectively

---

## 🔮 Future Enhancements

### Azure OpenAI Integration

Replace local inference with Azure OpenAI.

### Azure AI Search

Enterprise-scale semantic search and retrieval.

### Azure Blob Storage

Centralized document management.

### Microsoft Teams Integration

Real-time meeting analysis.

### Jira Integration

Automatic task creation and tracking.

### Executive Email Reports

Automated report distribution.

### Agent Memory

Long-term organizational learning and context retention.

---

## ☁️ Azure Migration Path

The current MVP uses Ollama for local inference.

The architecture is intentionally designed for seamless migration to:

* Azure OpenAI Service
* Azure AI Search
* Azure Blob Storage
* Azure AI Document Intelligence

This enables enterprise-scale deployment with minimal architectural changes.

---

## 🏆 Hackathon Submission

**Project Name:** WorkSphere AI

**Category:** Multi-Agent Workplace Intelligence

### Core Innovation

Combining Agent Swarms, RAG, Security Analysis, Risk Detection, Task Extraction, Executive Reporting, and Explainable AI into a unified workplace intelligence platform.

---

## 👥 Team

| Name          | Role                                 |
| ------------- | ------------------------------------ |
| Rohan Awasthi | AI Engineering & Backend Development |
| Team Member   | Frontend Development                 |
| Team Member   | Architecture & Testing               |

---

## 🙏 Thank You

### WorkSphere AI

**Turning workplace conversations into actionable intelligence.**
