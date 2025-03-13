import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/star.png';
import checkMarkIconLight from '../../assets/star-dark.png';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList className={styles.skillItem} src={checkMarkIcon} skill="HTML" />
        <SkillList className={styles.skillItem} src={checkMarkIcon} skill="CSS" />
        <SkillList className={styles.skillItem} src={checkMarkIcon} skill="JavaScript" />
        <SkillList className={styles.skillItem} src={checkMarkIcon} skill="Java" />
        <SkillList className={styles.skillItem} src={checkMarkIcon} skill="Python" />
        <SkillList className={styles.skillItem} src={checkMarkIcon} skill="C" />
        <SkillList className={styles.skillItem} src={checkMarkIcon} skill="Rust" />
      </div>
  

      
      <div className={styles.skillList}>
        <SkillList className={styles.skillItem} src={checkMarkIcon} skill="LUA" />
        <SkillList className={styles.skillItem} src={checkMarkIcon} skill="ARM Assembly" />
        <SkillList className={styles.skillItem} src={checkMarkIcon} skill="SQL" />
        <SkillList className={styles.skillItem} src={checkMarkIcon} skill="React" />
      </div>
     
     
      <div className={styles.skillList}>
        <SkillList className={styles.skillItem} src={checkMarkIcon} skill="Excel" />
        <SkillList className={styles.skillItem} src={checkMarkIcon} skill="Windows OS" />
        <SkillList className={styles.skillItem} src={checkMarkIcon} skill="Linux" />
        <SkillList className={styles.skillItem} src={checkMarkIcon} skill="Git" />
      </div>
    </section>
  );
}

export default Skills;