/**
 * UserMenu — User avatar with dropdown trigger
 * 
 * TODO: Show user avatar (or initial letter if no image)
 * TODO: Implement dropdown menu (Account, Profile, Settings, Log out)
 * TODO: Close dropdown on outside click
 * 
 * Data source: userProfile from mockData.js
 */

import styles from './UserMenu.module.css';

export default function UserMenu() {
  return (
    <div className={styles.container}>
      <div className={styles.avatarButton}>A</div>
      {/* TODO: Dropdown menu goes here */}
    </div>
  );
}
