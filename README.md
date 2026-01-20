# Judy-Punk 🤘🧑‍💻

**Local AI SysDdmin & Cybersecurity Companion**

Judy-Punk is a desktop app I’m building to explore what a *responsible*, security-minded AI assistant could 
look like for IT and Cybersecurity work.

Think of it less as a “chatbot” and more as a calm, senior IT pro who:
- talks through system health in plain English  
- helps you reason about what’s going on  
- never silently takes control of your machine  

This project is intentionally **local-first**, **transparent**, and **guardrail-heavy** by design.

⭐ This is my **first application as an IT professional**, and it’s being built in the open as part of my
      transition into IT and Cybersecurity.


## 🚦 Project status

**Early beta (v0.1.x)**  
Actively under development. Features, structure, and UX will evolve.

This version is focused on:
- proving the concept  
- demonstrating design discipline  
- showing how I think about systems, security, and AI tooling  

---

## 🧠 What Judy-Punk does (today)

- Presents system and network status in **human-readable terms** along with TTS Integration
- Offers guided diagnostics instead of blind automation
- Supports local AI models (LM Studio / Ollama workflows)
- Reinforces good IT habits: observability, least privilege, verification

---

## 🚫 What Judy-Punk will *never* do

Judy-Punk is intentionally limited. It will not:

- perform destructive actions automatically  
- escalate privileges without explicit user approval  
- hide system state, assumptions, or changes  
- act as malware, exploit tooling, or pentesting automation  

This project favors **explainability over cleverness**.

---

## 🧱 Design philosophy

- **PRD-first development** — documentation is the source of truth  
- **Local-AI execution** — no cloud dependency by default  
- **Zero-trust mindset** — especially outside the user boundary  
- **Modular agents** — status, network, security, logs, tutor  
- **Senior-engineer tone** — calm, precise, and honest  

Most decisions are documented in the `Documentation/` folder.

---

## 🛠️ Tech stack (current)

- Electron desktop application
- TypeScript + Vite frontend
- Designed to integrate with local LLM runtimes

---

## 🚀 Getting started (dev)

```bash
npm install
npm run dev

This project is still evolving, so expect rough edges.

📂 Documentation

The heart of this project lives here:
Documentation/ — PRD, architecture notes, guardrails, build plans
- If you want to understand why something exists (or doesn’t), start there.

---

💬 Feedback & ideas welcome
This project is very much a learning journey — and I’m open to suggestions, ideas, and constructive feedback.
If you have thoughts about:
- UX improvements
- diagnostics you’d expect from an IT tool
- guardrails that matter in real environments

I genuinely want to hear them.
- sanity-check what questions recruiters will ask when they see it

You did good work here. Now let it work *for you*.
