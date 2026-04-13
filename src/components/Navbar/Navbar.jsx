/**
 * Navbar — Top navigation bar
 * 
 * Layout: NavControls (left) | SearchBar (center) | UserMenu (right)
 * 
 * TODO: Implement scroll-based background transition (transparent → dark)
 * TODO: Add "Explore Premium" and "Install App" buttons
 */

import styles from './Navbar.module.css';
import NavControls from './NavControls';
import SearchBar from './SearchBar';
import UserMenu from './UserMenu';

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.left}>
        <NavControls />
      </div>
      <div className={styles.center}>
        <SearchBar />
      </div>
      <div className={styles.right}>
        {/* TODO: Add "Explore Premium" button */}
        <div className={styles.premiumButton}>Explore Premium</div>
        <UserMenu />
      </div>
    </header>
  );
}
