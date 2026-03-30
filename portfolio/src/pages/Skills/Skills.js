import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const SkillBar = ({ name, percent }) => {
  return (
    <div className={styles.skillBar}>
      <div className={styles.skillInfo}>
        <span>{name}</span>
        <span>{percent}%</span>
      </div>
      <div className={styles.progressBar}>
        <motion.div
          className={styles.progressFill}
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const qaSkills = [
    { name: 'Manual Testing', percent: 95 },
    { name: 'Automation Testing (Selenium)', percent: 80 },
    { name: 'API Testing (Postman)', percent: 85 },
    { name: 'Bug Tracking (Jira)', percent: 90 },
    { name: 'SQL for Testing', percent: 75 },
    { name: 'Performance Testing', percent: 70 },
  ];

  const webDevSkills = [
    { name: 'HTML5 & CSS3', percent: 95 },
    { name: 'JavaScript (ES6+)', percent: 90 },
    { name: 'React.js', percent: 85 },
    { name: 'Node.js', percent: 70 },
    { name: 'Python', percent: 65 },
    { name: 'UI/UX Design', percent: 75 },
  ];

  const processSkills = [
    { name: 'Business Process Analysis', percent: 85 },
    { name: 'Workflow Optimization', percent: 80 },
    { name: 'Data Management', percent: 75 },
    { name: 'Agile/Scrum', percent: 90 },
  ];

  return (
    <section className={`${styles.skills} container section-padding`}>
      <motion.div
        className="title-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">My <span className="highlight">Skills</span></h2>
        <p className="section-subtitle">Technical Expertise & Capabilities</p>
      </motion.div>

      <div className={styles.skillsGrid}>
        <motion.div
          className={styles.skillCategory}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3>QA & Testing</h3>
          <div className={styles.barList}>
            {qaSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} percent={skill.percent} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.skillCategory}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3>Web Development</h3>
          <div className={styles.barList}>
            {webDevSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} percent={skill.percent} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.skillCategory}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Process & Strategy</h3>
          <div className={styles.barList}>
            {processSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} percent={skill.percent} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
