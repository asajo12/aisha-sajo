import { useState } from 'react';
import { useTheme } from '../../common/ThemeContext';
import styles from './Navbar.module.css';
import lightModeIcon from '../../assets/menu-burger-light.png';
import darkModeIcon from '../../assets/menu-burger-dark.png';

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false); // State to track menu visibility

  return (
    <nav className={`${styles.navbar} ${theme === 'dark' ? styles.dark : ''}`}>
      
      {/* Theme Toggle Icon in the Top Left Corner */}
      <img
        src={theme === 'light' ? darkModeIcon : lightModeIcon}
        alt="Menu Toggle Icon"
        className={styles.menuIcon}
        onClick={() => setMenuOpen(!menuOpen)}
      />

      {/* Navigation Links - Only Show When Menu is Open */}
      <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects & Engagements</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

    </nav>
  );
}

export default Navbar;
