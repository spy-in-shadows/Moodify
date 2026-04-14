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
import CategoryPills from './CategoryPills';
import ContentSection from './ContentSection';
import staticData from '../../../static_data.json';

export default function HomePage() {
  const recommendedItems = staticData.recommended;

  return (
    <div className={styles.homePage}>
      <div className={styles.gradientBg}></div>
      <div className={styles.content}>
        <CategoryPills />
        <ContentSection 
          subtitle="Inspired by your recent activity"
          title="Recommended for today" 
          items={recommendedItems} 
        />
      </div>
    </div>
  );
}
