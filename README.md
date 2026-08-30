# Nick Sofianakos — Portfolio Website

Personal portfolio site built to showcase my background, skills, certifications, projects, and work experience as a technology consultant and developer.

## Live Sections

This is a single-page site — the navbar smoothly scrolls you to each section rather than loading separate pages. Click a link in the navbar, or jump directly via the anchors below.

| Section | Anchor | What's there |
|---|---|---|
| **Hero** | — | Landing intro, tagline, and social links (LinkedIn, GitHub, email) |
| **About** | `#about` | A bit about my background and what I do |
| **Skills** | `#skills` | A rotating carousel of core skills — languages, web dev, data analysis, tools, databases, testing/DevOps |
| **Certifications** | `#certifications` | Databricks and Microsoft Azure certifications, filterable by issuer |
| **Projects** | `#projects` | Featured projects with descriptions, tech stacks, and links |
| **Experience** | `#experience` | Work history laid out along an interactive road timeline — click a company/date marker to open a modal with details |

## Navigating the Site

- Use the sticky navbar at the top to jump between sections — it smooth-scrolls and highlights the section you're currently viewing.
- Click the logo to scroll back to the top.
- In the Experience section, click any company/date marker along the road for a detailed breakdown of that role.

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 6](https://vite.dev/) for dev server and builds
- Plain CSS (no framework) for styling
- ESLint for linting

## Getting Started

```bash
npm install      # install dependencies
npm run dev      # start the local dev server
npm run build    # type-check and build for production
npm run preview  # preview the production build locally
npm run lint      # run ESLint
```

## Project Structure

```
src/
├── components/   # One component per section (Navbar, Hero, About, Skills, Certifications, Projects, Experience, Footer)
├── hooks/        # Custom hooks (scroll effects, intersection observer, carousel)
├── styles/       # Global stylesheet
├── types/        # Shared TypeScript interfaces
└── assets/       # Images and icons
```

## Contact

- Email: [nsofianakos@gmail.com](mailto:nsofianakos@gmail.com)
- LinkedIn: [linkedin.com/in/nick-sofianakos](https://www.linkedin.com/in/nick-sofianakos/)
- GitHub: [github.com/Nick3429](https://github.com/Nick3429)
