/**
 * HomePage — Main content area / landing page
 * 
 * Contains:
 * 1. CategoryPills — filter tabs (All / Music / Podcasts)
 * 1. Greeting header — time-based greeting
 * 
 * TODO: Import data from static_data.json or mockData.js
 * TODO: Implement time-based greeting
 * TODO: Add gradient background (Spotify-style color extraction)
 */

import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <h1 className={styles.greeting}>Good evening</h1>
    </div>
  );
}
