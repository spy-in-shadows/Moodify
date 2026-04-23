# Moodify

Moodify is a Spotify-inspired React app focused on browsing and exploring music collections through a polished frontend experience. The app is entirely frontend-only and uses local mock data for albums, artists, playlists, tracks, and collection details.

## Overview

The current app includes a multi-page music browsing experience with:

- a home page for featured music discovery
- a search page with browse categories and filterable results
- a library page for saved playlists, albums, artists, and recent listens
- collection detail pages for albums and playlists
- a persistent player bar powered by shared React context

This project does not include a backend, authentication, real Spotify integration, or audio streaming.

## Tech Stack

- React 19
- React Router DOM 7
- JavaScript (ES modules)
- Vite
- CSS
- ESLint

## Feature List

- Spotify-inspired responsive layout with sidebar, top bar, and sticky player bar
- Route-based navigation between Home, Search, Library, and collection detail views
- Mock-data-driven content for tracks, albums, artists, playlists, and browse categories
- Search and browse flows built from local catalog data
- Library filtering across playlists, albums, and artists
- Recent listen interactions that update the shared player context
- Reusable UI building blocks for cards, rows, and section headers

## Frontend-Only Data Model

- All app content is sourced from files in `src/data/`
- Playback UI is simulated through React state in `src/context/PlayerContext.jsx`
- The player bar reflects selected tracks, but it does not stream or play real audio

## Project Structure

```text
src/
├── app/                  # Router and shared app shell composition
├── assets/               # Static assets
├── components/
│   ├── player/           # Bottom player bar
│   ├── sidebar/          # Left navigation
│   ├── topbar/           # Context-aware page header
│   └── ui/               # Shared presentational building blocks
├── context/              # Shared React context for player state
├── data/                 # Mock music catalog and browse data
├── pages/
│   ├── CollectionPage/   # Album and playlist detail views
│   ├── HomePage/         # Landing and discovery experience
│   ├── LibraryPage/      # Saved music and recent listens
│   └── SearchPage/       # Browse and filtered search experience
├── styles/               # Shared styling primitives
├── utils/                # Formatting helpers
├── App.jsx
└── main.jsx
```

## Install and Run

### Prerequisites

- Node.js
- npm

### Local development

```bash
npm install
npm run dev
```

### Production build

```bash
npm run build
```

### Preview the production build locally

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Notes

- The app is intended as a frontend learning and portfolio project.
- Content and playback behavior are mock-data-driven.
- Any future backend, auth, or streaming work would be new functionality and is not part of the current implementation.

## Contributors

- [Krishna Verma](https://github.com/spy-in-shadows)
- [Aniruddha Dwivedi](https://github.com/Aniruddhadwivedi07)
- [Sambuddha Banerjee](https://github.com/SammyBanner45)
