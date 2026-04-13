/**
 * NavControls — Back/Forward navigation buttons
 * 
 * TODO: Add SVG arrow icons
 * TODO: Integrate with React Router history (goBack / goForward)
 * TODO: Disable forward when at end of history stack
 */

import styles from './NavControls.module.css';

export default function NavControls() {
  return (
    <div className={styles.controls}>
      <button className={styles.navButton}>◀</button>
      <button className={styles.navButton}>▶</button>
    </div>
  );
}
