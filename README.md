# EchoLearn

### Teach to Learn — An Interactive AI-Powered Learning Experience

EchoLearn is a cozy, pixel-themed learning platform built around one core idea: **the best way to learn is to teach**. Instead of passive studying, users reinforce knowledge by explaining concepts to an AI that asks questions, challenges assumptions, and helps deepen understanding.

## Features

* **Teach-to-Learn Engine** — Explain topics to an AI that behaves like a curious student.
* **Interactive Pixel-Themed Lessons** — Cozy, Stardew-Valley-inspired UI with beginner‑friendly explanations.
* **Two AI Modes** — Teacher mode (challenges you) and Baby mode (simplifies concepts).
* **Progress Tracking** — Lessons track completion using localStorage.
* **Modular Lesson Layout** — Easily add new DSA topics.

## Inspiration

EchoLearn was inspired by the Feynman Technique: when you teach a concept simply, you truly understand it. I wanted a tool that encourages active learning while staying warm and cozy.

## What EchoLearn Does

* Delivers short, structured lessons
* Prompts users to *teach* the AI
* AI asks clarifying questions and identifies gaps
* Strengthens comprehension through active recall

## How It’s Built

* **Frameworks:** Next.js 15, React
* **Languages:** JavaScript, TypeScript, JSX
* **Styling:** TailwindCSS
* **AI:** OpenAI API
* **State:** Custom hooks + localStorage
* **Assets:** Custom pixel art and banners
* **Deployment:** Netlify

## Challenges

* Keeping AI personality consistent across modes
* Managing Next.js dynamic routes without breaking static exports
* Balancing simplicity and accuracy in lessons
* Creating cohesive pixel art assets

## Accomplishments

* Fully functional themed learning platform
* Reusable lesson layouts and AI panel system
* Consistent cozy aesthetic
* Structured DSA lesson content

## What we Learned

* Next.js server/client patterns
* Prompt engineering
* Pixel‑art‑friendly UI design
* Stronger understanding of CS fundamentals

## What’s Next for EchoLearn

* User accounts + cloud‑backed progress
* Quizzes, challenges, mini‑projects
* Teach‑me‑back mode
* Community lesson packs
* Expanded topics: recursion, graphs, DP, OOP

## Installation

```bash
npm install
npm run dev
npm run build
npm run export
```

## AI Assistance

Some code snippets, lesson wording, and pixel art assets were generated or refined with the help of AI tools to accelerate development and maintain consistency.

## License

MIT
