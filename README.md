# VOIDCLI

A conversational terminal AI agent that uses Gemini and a ReAct-style execution loop to generate websites, clone homepages, edit existing projects, and launch instant previews.

VOIDCLI operates using structured reasoning steps:

- START
- THINK
- TOOL
- OBSERVE
- OUTPUT

---

# Features

## 🌐 Homepage Cloning

Clone any public homepage by simply pasting a URL.

VOIDCLI automatically:

- Fetches homepage HTML
- Extracts CSS assets
- Extracts JavaScript assets
- Extracts image assets
- Downloads assets locally
- Rewrites URLs to local paths
- Creates a self-contained clone

Example:

```text
https://example.com
```

Generated output:

```text
generated/
└── example clone/
    ├── index.html
    ├── assets/
```

Homepage cloning is limited to a single page and does not perform recursive crawling.

---

## 🎨 Website Generation

Generate modern websites from natural language prompts.

Example:

```text
Create a modern startup landing page for NIRBHAYA
```

The agent can generate:

- Landing pages
- SaaS websites
- Startup websites
- Portfolio websites
- Product pages
- Marketing pages

Design capabilities:

- Glassmorphism
- Gradients
- Animations
- Responsive layouts
- Testimonials
- Feature sections
- Pricing sections
- CTA sections

---

## ✏️ Website Editing

Modify existing generated websites.

Examples:

```text
Change the hero section background
```

```text
Replace the heading with "Welcome to NIRBHAYA"
```

```text
Add a pricing section
```

VOIDCLI attempts targeted edits before regenerating entire pages.

---

## 🚀 Automatic Preview Server

After generation or cloning, VOIDCLI automatically launches a local preview server.

Features:

- Automatic free-port detection
- Existing preview cleanup
- Browser auto-open
- Preview URL reporting

Typical preview URL:

```text
http://127.0.0.1:3000
```

---

## 🤖 ReAct Agent Architecture

The agent follows a strict reasoning loop:

```text
START
THINK
TOOL
OBSERVE
OUTPUT
```

This enables:

- Tool-based execution
- Multi-step planning
- Website generation workflows
- Homepage cloning workflows

---

# Tech Stack

- Node.js
- TypeScript
- Gemini API
- Axios
- Cheerio
- Zod
- Ora
- Chalk
- Boxen
- http-server

---

# Installation

Install dependencies:

```bash
npm install
```

---

# Environment Variables

Create a `.env` file:

```env
GEMINI_API_KEY=your_gemini_api_key
```

---

# Running VOIDCLI

Development mode:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Production:

```bash
npm start
```

---

# Example Commands

Clone a homepage:

```text
https://example.com
```

Generate a website:

```text
Create a modern startup landing page for NIRBHAYA
```

Generate a SaaS dashboard:

```text
Create a professional AI analytics dashboard
```

Edit an existing website:

```text
Change the hero heading to Welcome
```

---

# Project Structure

```text
src/
├── agent.ts
├── checkpoint.ts
├── cli.ts
├── theme.ts
├── tools.ts
├── types.ts
├── vertex.ts

generated/
├── website clone/
├── website clone 2/
├── website clone 3/
```

---

# Security

## Tool Sandboxing

All write operations are restricted to:

```text
generated/
```

The agent cannot write outside the generated directory.

---

## Homepage Cloning Restrictions

Allowed:

- Public homepages
- Public CSS
- Public JavaScript
- Public images

Not Allowed:

- Recursive crawling
- Login-protected content
- Authenticated sessions
- Bypassing access controls

---

# Reliability Features

VOIDCLI includes:

- Adaptive step budgets
- Loop detection
- Repeated THINK detection
- No-progress detection
- JSON schema validation
- Automatic preview launching

---

# Troubleshooting

## TypeScript Check

```bash
npm run check
```

Expected result:

```text
tsc --noEmit
```

with no errors.

---

## Preview Not Loading

Manually test:

```bash
npx http-server generated/website\ clone
```

Open:

```text
http://127.0.0.1:8080
```

---

## Gemini Quota Exceeded

Example error:

```text
429 Too Many Requests
```

Cause:

```text
Daily Gemini free-tier quota reached.
```

Solutions:

- Wait for quota reset
- Enable billing
- Use another Gemini model

---