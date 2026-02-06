# Development Process – Sprint 01 Portfolio

## 1. Architecture & Folder Structure
I chose a component-based folder structure to keep UI and data logic separated.
The `components` folder contains reusable UI sections like Hero, TechStack, and Projects.
The `data` folder contains `skills.js` and `projects.js`, which store structured arrays
used for rendering content dynamically.

## 2. Data Design Decisions
- `skills.js` is divided into Proficient and Familiar skills to clearly communicate
  my comfort level with each technology.
- `projects.js` uses objects with title, description, and GitHub links to ensure
  scalability and clean rendering using `.map()`.

## 3. AI Usage Disclosure
I used AI tools to:
- Generate initial React component boilerplate
- Improve wording for project descriptions

Example prompts included:
"Create a reusable React component for a portfolio project card"
"Refine this project description into a concise two-line summary"

 All generated code was reviewed, modified, and understood before integration.

## 4. Challenges Faced
I initially faced layout overflow issues on smaller screens.
This was resolved by using CSS Grid with `repeat(auto-fit, minmax())`
instead of fixed-width layouts.
