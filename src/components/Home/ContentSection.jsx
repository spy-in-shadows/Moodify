/**
 * ContentSection — Horizontal scrollable content section
 * 
 * Contains a header with title + "Show all" link,
 * and a horizontal row of ContentCard items.
 * 
 * TODO: Import section data from mockData
 * TODO: Map data to ContentCard components
 * TODO: Add horizontal scroll behavior
 * 
 * Props to implement:
 * @param {string} title - Section title (e.g. "Made For You")
 * @param {string} subtitle - Optional subtitle
 * @param {Array} items - Content items
 * @param {Function} showAll - "Show all" callback
 */

import styles from './ContentSection.module.css';
import ContentCard from './ContentCard';

export default function ContentSection({ title = 'Section Title' }) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.showAll}>Show all</span>
      </div>
      <div className={styles.cardRow}>
        {/* TODO: Map over items data */}
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
      </div>
    </section>
  );
}
