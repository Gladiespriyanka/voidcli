# VOIDCLI
### AI-Powered Terminal Development Agent for Website Generation, Cloning & Intelligent Code Automation

<p align="center">

Build websites. Clone webpages. Edit code. Run development workflows.
All from natural language inside your terminal.

</p>

---

## Overview

**VOIDCLI** is an AI-powered terminal development agent built using **Google Gemini** that transforms natural language instructions into real software engineering tasks.

Instead of behaving like a simple chatbot, VOIDCLI follows a structured **Reason → Act → Observe** workflow that enables it to think, choose tools, inspect results, recover from failures, and continue until a task is completed.

Whether you're creating an entirely new landing page, cloning an existing website, searching a codebase, modifying source files, or running development commands, VOIDCLI acts as an intelligent command-line development assistant.

It combines Large Language Models, structured reasoning, secure tooling, filesystem automation, website asset processing, and development workflows into one seamless CLI experience.

---

# Demo Workflow

```
User Prompt
      │
      ▼
 Google Gemini
      │
      ▼
 Structured ReAct Planner
      │
 ┌────┴──────────────────────┐
 │                           │
 ▼                           ▼
Filesystem Tools        Website Tools
 │                           │
 ▼                           ▼
Dev Tools              Asset Processor
 │                           │
 └──────────────┬────────────┘
                ▼
      Generated Website /
      Code Changes /
      Preview Server
```

---

# Key Features

## AI Website Generation

Describe your product, startup, SaaS, portfolio, or business idea in plain English.

VOIDCLI automatically generates a production-ready responsive landing page including:

- Hero section
- Feature cards
- Pricing section
- Testimonials
- Call-to-action
- Footer
- Responsive layout
- Modern gradients
- Glassmorphism
- Animations
- Clean component structure

No templates are hardcoded—the entire page is generated dynamically by Gemini.

---

## Intelligent Website Cloning

Clone the homepage of any publicly accessible website.

VOIDCLI automatically:

- Downloads HTML
- Detects linked CSS
- Downloads JavaScript
- Extracts images
- Rewrites asset paths
- Removes unsafe redirects
- Creates an offline working copy

The generated website can be viewed locally without internet access.

---

## Local Preview Server

After generation or cloning, VOIDCLI automatically launches a lightweight preview server.

No manual setup.

Simply open:

```
http://127.0.0.1:<port>
```

and instantly preview the generated website inside your browser.

---

## AI Development Assistant

VOIDCLI is capable of assisting with real software projects.

It can:

- Search files
- Find specific code
- Replace text safely
- Edit files
- Delete files with backups
- Undo previous edits
- Navigate project directories

This allows VOIDCLI to function as an intelligent coding companion directly from the terminal.

---

## Safe Command Execution

The agent can execute common development commands while preventing arbitrary shell execution.

Supported workflows include:

- npm
- node
- npx
- git
- tsc
- vite

Command output is captured, analyzed, and fed back into the reasoning loop for autonomous decision making.

---

## Structured AI Reasoning

Unlike traditional chat-based assistants, VOIDCLI operates through a deterministic multi-step reasoning loop.

Each interaction follows:

```
START
   ↓
THINK
   ↓
TOOL
   ↓
OBSERVE
   ↓
THINK
   ↓
OUTPUT
```

This enables the model to:

- reason before acting
- inspect intermediate results
- recover from failures
- avoid infinite loops
- perform multi-step tasks reliably

---

# Architecture

```
                 User Prompt
                      │
                      ▼
               Interactive CLI
                      │
                      ▼
             Gemini AI Reasoning
                      │
        ┌─────────────┴─────────────┐
        │                           │
        ▼                           ▼
  Tool Dispatcher            Step Controller
        │                           │
 ┌──────┼───────────────┐            │
 │      │               │            │
 ▼      ▼               ▼            ▼
Filesystem   Website Tools   Dev Tools
        │
        ▼
 Generated Output
```

---

# Project Structure

```
src/
│
├── cli.ts
│      Interactive terminal interface
│
├── agent.ts
│      Core ReAct reasoning loop
│
├── tools.ts
│      Filesystem, website and developer tools
│
├── checkpoint.ts
│      Website cloning, asset extraction and rewriting
│
├── vertex.ts
│      Google Gemini integration
│
├── types.ts
│      Shared schemas and type definitions
│
generated/
│
├── Generated websites
│
package.json
README.md
.env
```

---

# Technology Stack

### AI

- Google Gemini
- Prompt Engineering
- Structured Tool Calling

### Backend

- Node.js
- TypeScript

### Parsing

- Cheerio
- Axios

### Validation

- Zod

### CLI

- Chalk
- Readline

### Development

- npm
- Git
- http-server

---

# Installation

Clone the repository

```bash
git clone https://github.com/your-username/VOIDCLI.git

cd VOIDCLI
```

Install dependencies

```bash
npm install
```

Create a `.env`

```env
GEMINI_API_KEY=YOUR_API_KEY
```

---

# Running VOIDCLI

```bash
npm start
```

or

```bash
node dist/cli.js
```

The interactive terminal launches:

```
VOIDCLI >
```

Simply describe what you want.

---

# Example Prompts

### Generate a Website

```
Create a modern landing page for an AI startup with a dark theme, pricing section, testimonials and smooth animations.
```

---

### Clone a Website

```
Clone the homepage of https://example.com
```

---

### Search a Project

```
Find every use of useEffect inside src.
```

---

### Refactor Code

```
Replace every occurrence of foo with bar inside utils.ts
```

---

### Execute Development Tasks

```
Run npm test and fix obvious issues.
```

---

# Intelligent Workflow

A single request may trigger multiple autonomous operations.

For example:

```
Generate Website

↓

Create Folder

↓

Write HTML

↓

Write CSS

↓

Write JavaScript

↓

Start Local Server

↓

Open Browser

↓

Return Generated Files
```

All without additional user intervention.

---

# Safety

VOIDCLI is designed with secure execution in mind.

### Workspace Isolation

Generated websites are restricted to the `generated/` directory.

---

### Safe File Editing

Every edit creates a backup before modifications are applied.

Edits can be reverted using the built-in undo mechanism.

---

### Restricted Commands

Only approved development commands can be executed.

Arbitrary shell execution is intentionally blocked.

---

### Robust AI Control

The reasoning engine includes:

- invalid JSON recovery
- retry mechanisms
- loop detection
- progress monitoring
- rate-limit handling
- bounded reasoning steps

making the agent significantly more reliable during autonomous execution.

---

# Future Improvements

- Multi-page website cloning
- Recursive crawling
- Authentication-aware cloning
- React project generation
- Next.js support
- Tailwind generation
- Docker integration
- GitHub repository understanding
- Multi-model support (Gemini, OpenAI, Claude)
- Plugin architecture
- Browser automation
- Automated testing workflows

---

# Why VOIDCLI?

Traditional AI assistants generate text.

VOIDCLI performs real development work.

It reasons about tasks, invokes tools, edits files, launches servers, clones websites, and assists software development through an intelligent terminal interface—bringing together AI reasoning and practical automation in a unified developer experience.

---

# License

This project is licensed under the **MIT License**.
