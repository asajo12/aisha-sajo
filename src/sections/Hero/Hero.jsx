import styles from './HeroStyles.module.css';
import heroImg from '../../assets/profilepic.jpg';
import sun from '../../assets/clouds-sun.png'
import moon from '../../assets/clouds-moon.png'
import linkedInLight from '../../assets/linkedin-light.svg'
import linkedInDark from '../../assets/linkedin-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const{ theme, toggleTheme } = useTheme();

    // linking the theme to the icons
    const themeIcon= theme === 'light' ? sun : moon;
    const linkedInIcon = theme === 'light' ? linkedInLight : linkedInDark;
    const githubIcon = theme === "light" ? githubLight : githubDark

  return (
    <section id="hero" className={styles.container}>
    
    <div className={styles.colorModeContainer}>
        {/* Profile Picture */}
        <img
            className={styles.hero} 
            src={heroImg}
            alt = "Profile Picture" 
        />
        {/* Night and Light Mode */}

        <img
            className={styles.colorMode}
            src={themeIcon}
            alt = 'Light or Dark Mode Icon'
            onClick={toggleTheme}
        />

    </div>

    <div className={styles.info}>
        <h1>
            Aisha <br /> Sajo
        </h1>
        <h2>
            Computer Science
        </h2>
        <span>
            <a href="https://www.linkedin.com/in/aisha-sajo-825494210/" target ="_blank">
                <img src={linkedInIcon} alt="Linkedin Icon"/>
            </a>
            <a href="https://github.com/asajo12" target ="_blank">
                <img src={githubIcon} alt="github Icon"/>
            </a>
        </span>
        <p className={styles.description}>
        From AI to game development, I focus on creative, data-driven projects.
        <br /> Check out my LinkedIn and GitHub, or contact me for further interets or questions.
        </p>

    </div>
    
    </section>
  );
}

export default Hero;