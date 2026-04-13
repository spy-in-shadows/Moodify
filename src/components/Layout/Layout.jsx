/**
 * Layout — Main Application Layout
 * 
 * Implements the classic Spotify 3-panel layout:
 * ┌──────────┬──────────────────┐
 * │ Sidebar  │  Navbar          │
 * │          │  ──────────────  │
 * │          │  Main Content    │
 * │          │  (scrollable)    │
 * ├──────────┴──────────────────┤
 * │  Player (fixed bottom)      │
 * └─────────────────────────────┘
 * 
 * TODO: The sidebar and player should always be visible.
 *       Main content area should scroll independently.
 */

import styles from './Layout.module.css';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import Player from '../Player/Player';
import HomePage from '../Home/HomePage';

export default function Layout() {
  return (
    <div className={styles.layout}>
      {/* Top section: sidebar + main content */}
      <div className={styles.topSection}>
        <Sidebar />
        <main className={styles.mainContent}>
          <Navbar />
          <div className={styles.scrollArea}>
            {/* TODO: Replace with React Router <Outlet /> when routing is added */}
            <HomePage />
          </div>
        </main>
      </div>

      {/* Bottom section: player bar */}
      <Player />
    </div>
  );
}
