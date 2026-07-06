# VOIDCLI

> A conversational AI-powered terminal agent that can generate websites, clone public homepages, edit existing projects, and launch instant previews using a structured ReAct-style reasoning loop powered by Gemini.

![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Node.js](https://img.shields.io/badge/Node.js-20+-green)
![Gemini](https://img.shields.io/badge/Google-Gemini-orange)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## Overview

VOIDCLI is an AI terminal assistant that uses a strict ReAct workflow to reason, plan, execute tools, and generate outputs.

The agent can:

- Generate complete websites from prompts
- Clone public homepages
- Download and localize website assets
- Edit generated websites
- Launch instant previews
- Execute multi-step workflows through tool use

VOIDCLI follows a structured execution loop:

```text
START
THINK
TOOL
OBSERVE
OUTPUT
```

This architecture enables reliable planning, tool usage, and iterative website generation.

---

## Features

### 🌐 Homepage Cloning

Clone any public homepage by simply providing a URL.

VOIDCLI automatically:

- Fetches homepage HTML
- Extracts CSS assets
- Extracts JavaScript assets
- Extracts image assets
- Downloads assets locally
- Rewrites asset URLs
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
    └── assets/
```

Homepage cloning is intentionally limited to a single page and does not perform recursive crawling.

---

### 🎨 Website Generation

Generate complete websites using natural language.

Example:

```text
Create a modern startup landing page for NIRBHAYA
```

Supported website types:

- Startup websites
- SaaS landing pages
- Product pages
- Portfolio websites
- Marketing websites
- Event websites
- Business websites

Design capabilities:

- Modern responsive layouts
- Glassmorphism
- Gradients
- Animations
- Hero sections
- Feature sections
- Pricing sections
- Testimonials
- CTA sections

---

### ✏️ Website Editing

Modify existing generated websites.

Examples:

```text
Change the hero background to a gradient
```

```text
Replace the heading with "Welcome to NIRBHAYA"
```

```text
Add a pricing section
```

VOIDCLI attempts targeted edits before regenerating entire pages.

---

### 🚀 Automatic Preview Server

After generation or cloning, VOIDCLI automatically launches a local preview server.

Features:

- Automatic port selection
- Existing preview cleanup
- Browser auto-open
- Preview URL reporting

Example:

```text
http://127.0.0.1:3000
```

---

### 🤖 ReAct Agent Architecture

VOIDCLI follows a strict reasoning workflow:

```text
START
THINK
TOOL
OBSERVE
OUTPUT
```

Benefits:

- Multi-step planning
- Tool-driven execution
- Structured reasoning
- Reduced hallucinations
- Improved reliability

---

## Screenshots

### CLI Interface

Add your screenshots inside:

```text
docs/screenshots/
```

Example:

```text
docs/
└── screenshots/
    ├── cli.png
    ├── cloning.png
    └── generation.png
```

---

## Architecture

```text
User Prompt
      │
      ▼
 ┌───────────┐
 │ ReAct AI  │
 │   Agent   │
 └─────┬─────┘
       │
       ▼
 ┌───────────┐
 │ Tool Use  │
 └─────┬─────┘
       │
 ┌─────┼────────────────┐
 ▼     ▼                ▼
Files  Gemini      Website Assets
       API

       ▼
 Generated Website

       ▼
 Preview Server
```

---

## Tech Stack

### Core

- Node.js
- TypeScript

### AI

- Gemini API
- Vertex AI

### Libraries

- Axios
- Cheerio
- Zod
- Ora
- Chalk
- Boxen
- http-server

---

## Project Structure

```text
VOIDCLI/
│
├── src/
│   ├── agent.ts
│   ├── checkpoint.ts
│   ├── cli.ts
│   ├── theme.ts
│   ├── tools.ts
│   ├── types.ts
│   └── vertex.ts
│
├── generated/
│   ├── website clone/
│   ├── website clone 2/
│   └── website clone 3/
│
├── docs/
│   └── screenshots/
│
├── package.json
├── tsconfig.json
├── .env.example
├── LICENSE
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Gladiespriyanka/voidcli.git

cd voidcli
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file:

```env
GEMINI_API_KEY=your_gemini_api_key
```

---

## Running VOIDCLI

Development:

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

## Example Commands

### Clone a Homepage

```text
https://example.com
```

### Generate a Startup Website

```text
Create a modern startup landing page for NIRBHAYA
```

### Generate a SaaS Dashboard

```text
Create a professional AI analytics dashboard
```

### Edit Existing Website

```text
Change the hero heading to Welcome
```

---

## Security

### Tool Sandboxing

All write operations are restricted to:

```text
generated/
```

The agent cannot write outside this directory.

---

### Homepage Cloning Restrictions

Allowed:

- Public homepages
- Public CSS assets
- Public JavaScript assets
- Public images

Not Allowed:

- Recursive crawling
- Login-protected content
- Authenticated sessions
- Access control bypasses

---

## Reliability Features

VOIDCLI includes:

- Adaptive step budgets
- Loop detection
- Repeated THINK detection
- No-progress detection
- JSON schema validation
- Automatic preview launching
- Structured execution tracing

---

## Roadmap

### Current

- [x] Homepage cloning
- [x] Website generation
- [x] Website editing
- [x] Asset extraction
- [x] Preview server
- [x] ReAct execution loop

### Planned

- [ ] Multi-page website generation
- [ ] React project generation
- [ ] Next.js support
- [ ] Tailwind CSS support
- [ ] AI code review
- [ ] Project refactoring agent
- [ ] Vercel deployment integration
- [ ] Plugin system

---

## Troubleshooting

### TypeScript Check

```bash
npm run check
```

Expected:

```text
tsc --noEmit
```

with no errors.

---

### Preview Not Loading

Run manually:

```bash
npx http-server generated/website\ clone
```

Open:

```text
http://127.0.0.1:8080
```

---

### Gemini Quota Exceeded

Example:

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
- Use a different Gemini model

---

## Contributing

Contributions are welcome.

To contribute:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push your branch
5. Open a Pull Request

---

## License

This project is licensed under the MIT License.

See the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

- Google Gemini
- Vertex AI
- TypeScript
- Axios
- Cheerio
- Open Source Community

---

## Author

**Gladies Priyanka**

GitHub: https://github.com/Gladiespriyanka

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


If you found this project useful, consider giving it a ⭐ on GitHub.