# LandingPage-VueJS

A Vue 3 single-page marketing site for a luxury property project, built with Vite, Vue Router, Tailwind CSS v4, and VueUse Motion.

## Overview

This project includes a branded landing experience plus dedicated pages for plans and floor plans. The app is organized around reusable Vue components for hero content, booking actions, highlights, property details, and call-to-action sections.

## Tech Stack

- Vue 3
- Vite 5
- Vue Router
- Tailwind CSS v4
- @vueuse/motion
- Headless UI for Vue
- Iconify and Lucide Vue icons

## Routes

- `/` - Main landing page
- `/plans` - Plans page
- `/floorplans` - Floor plans page

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project Structure

```text
.
├─ public/
│  └─ assets/
│     ├─ floorplan/
│     └─ highlights/
├─ src/
│  ├─ components/
│  │  ├─ ui/
│  │  ├─ About.vue
│  │  ├─ BookingBar.vue
│  │  ├─ BookingCTA.vue
│  │  ├─ Features.vue
│  │  ├─ FloorPlanDetails.vue
│  │  ├─ Footer.vue
│  │  ├─ Hero.vue
│  │  ├─ Highlights.vue
│  │  ├─ Navbar.vue
│  │  ├─ PropertyOverview.vue
│  │  ├─ ReserveBanner.vue
│  │  └─ SubmissionModal.vue
│  ├─ pages/
│  │  ├─ FloorPlansPage.vue
│  │  ├─ LandingPage.vue
│  │  └─ PlansPage.vue
│  ├─ router/
│  │  └─ index.js
│  ├─ App.vue
│  ├─ main.js
│  └─ style.css
├─ index.html
├─ package.json
└─ vite.config.js
```

## Key Implementation Notes

- Routing is handled in `src/router/index.js` using `createWebHistory()`.
- Global styling and theme tokens are defined in `src/style.css` with Tailwind CSS v4.
- The app mounts the router and Motion plugin from `src/main.js`.
- Page-level composition lives under `src/pages`, while reusable UI sections live under `src/components`.

## Available Scripts

- `npm run dev` starts the Vite dev server.
- `npm run build` creates the production bundle.
- `npm run preview` serves the production build locally.

## Notes

- Static imagery is served from `public/assets`.
- There is currently no test suite configured in this repository.
