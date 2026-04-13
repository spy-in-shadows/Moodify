# Moodify 🎧

Moodify is a Spotify-inspired music streaming frontend built using React. It delivers a clean, modern, and responsive UI for browsing songs, albums, artists, and playlists.

---

## 🚀 Features

- 🎵 Spotify-inspired modern UI  
- ⚛️ Built with React  
- 📱 Fully responsive design  
- 🔍 Music search interface  
- 📂 Browse albums, artists, and playlists  
- ▶️ Music player layout (UI)  
- 🧩 Modular and reusable components  
- ⚡ Fast setup using Vite  

---

## 🛠 Tech Stack

- React 19  
- JavaScript (ES6+)  
- CSS Modules  
- Vite 8  

---

## 🎯 Purpose

Moodify was built as a learning project to improve React skills by creating a real-world clone of a music streaming app. The focus is on UI/UX, component structure, and frontend architecture.

---

## 🧑‍💻 Getting Started

### Prerequisites

- Node.js  
- npm  

### Installation

```bash
git clone https://github.com/Aniruddhadwivedi07/Moodify.pvt.git
cd Moodify.pvt
npm install
npm run dev
```

---

## 📦 Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Folder Structure

```
Moodify/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Home/
│   │   │   ├── CategoryPills.jsx / .module.css
│   │   │   ├── ContentCard.jsx / .module.css
│   │   │   ├── ContentSection.jsx / .module.css
│   │   │   ├── HomePage.jsx / .module.css
│   │   │   ├── RecentCard.jsx / .module.css
│   │   │   └── RecentlyPlayed.jsx / .module.css
│   │   ├── Layout/
│   │   │   └── Layout.jsx / .module.css
│   │   ├── Navbar/
│   │   │   ├── NavControls.jsx / .module.css
│   │   │   ├── Navbar.jsx / .module.css
│   │   │   ├── SearchBar.jsx / .module.css
│   │   │   └── UserMenu.jsx / .module.css
│   │   ├── Player/
│   │   │   ├── ExtraControls.jsx / .module.css
│   │   │   ├── PlaybackControls.jsx / .module.css
│   │   │   ├── Player.jsx / .module.css
│   │   │   ├── ProgressBar.jsx / .module.css
│   │   │   ├── TrackInfo.jsx / .module.css
│   │   │   └── VolumeControl.jsx / .module.css
│   │   └── Sidebar/
│   │       ├── FilterChips.jsx / .module.css
│   │       ├── LibraryHeader.jsx / .module.css
│   │       ├── PlaylistItem.jsx / .module.css
│   │       ├── PlaylistList.jsx / .module.css
│   │       └── Sidebar.jsx / .module.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── static_data.json
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

---

## 🏗 Component Architecture (ERD)

```
App
└── Layout
    ├── Sidebar
    │   ├── Nav (Home, Search)
    │   └── Library Section
    │       ├── LibraryHeader
    │       ├── FilterChips
    │       └── PlaylistList
    │           └── PlaylistItem (×N)
    ├── Main Content Area
    │   ├── Navbar
    │   │   ├── NavControls (◀ ▶)
    │   │   ├── SearchBar
    │   │   └── UserMenu
    │   └── HomePage
    │       ├── CategoryPills (All / Music / Podcasts)
    │       ├── RecentlyPlayed
    │       │   └── RecentCard (×N)
    │       └── ContentSection (×N)
    │           └── ContentCard (×N)
    └── Player
        ├── TrackInfo (album art, track name, artist)
        ├── PlaybackControls (shuffle, prev, play/pause, next, repeat)
        ├── ProgressBar (seek slider + timestamps)
        ├── VolumeControl (icon + slider)
        └── ExtraControls (lyrics, queue, devices, fullscreen)
```

### Layout Grid

```
┌──────────────────────────────────────────┐
│  ┌──────────┬──────────────────────────┐ │
│  │          │  Navbar                  │ │
│  │ Sidebar  │  ────────────────────    │ │
│  │          │  Main Content            │ │
│  │          │  (scrollable)            │ │
│  ├──────────┴──────────────────────────┤ │
│  │  Player (fixed bottom bar)          │ │
│  └─────────────────────────────────────┘ │
└──────────────────────────────────────────┘
```

---

## 🎨 Design System

All design tokens are defined as CSS custom properties in `src/index.css`:

| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#121212` | Page background |
| `--color-surface-raised` | `#181818` | Cards, sidebar panels |
| `--color-surface-hover` | `#282828` | Hover states |
| `--color-accent` | `#1DB954` | Spotify green (play buttons) |
| `--color-text-primary` | `#FFFFFF` | Headings, primary text |
| `--color-text-secondary` | `#B3B3B3` | Subtitles, metadata |
| `--font-family` | `Inter, system-ui` | All text |

---

## 🌐 GitHub Repository

🔗 https://github.com/spy-in-shadows/Moodify

---

## 👥 Contributors

- **Krishna Verma**  
  https://github.com/spy-in-shadows

- **Aniruddha Dwivedi**  
  https://github.com/Aniruddhadwivedi07

- **Sambuddha Banerjee**  
  https://github.com/SammyBanner45

---

## 🔮 Future Improvements

- 🎧 Integrate real music APIs (Spotify Web API)  
- 🔐 Add authentication (Spotify OAuth)  
- ▶️ Implement audio playback (Web Audio API)  
- ❤️ Add liked songs & library  
- 📊 Dynamic playlists  
- 🛣 Add routing with `react-router-dom`  
- ✨ Better animations & transitions  
- 🌐 Deploy the project  

---

## 📚 Learning Outcomes

- React component structuring  
- Props and state management  
- CSS Modules for scoped styling  
- UI cloning and design  
- Responsive layouts  
- Project organization  

---

## 🎨 Inspiration

Inspired by Spotify's design and user experience.  
This project is created for educational purposes only.