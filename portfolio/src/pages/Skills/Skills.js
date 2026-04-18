import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Globe, 
  Database, 
  Cpu, 
  Layers, 
  CheckCircle2,
  Terminal,
  Settings,
  Workflow
} from 'lucide-react';
import {
  JavaOriginal,
  PythonOriginal,
  JavascriptOriginal,
  CplusplusOriginal,
  COriginal,
  PhpOriginal,
  MongodbOriginal,
  ExpressOriginal,
  ReactOriginal,
  NodejsOriginal,
  Html5Original,
  Css3Original,
  TailwindcssOriginal,
  MysqlOriginal,
  FirebasePlain,
  VscodeOriginal,
  GithubOriginal,
  VisualstudioPlain,
  MicrosoftsqlserverPlain,
  FigmaOriginal,
  GooglecloudOriginal
} from 'devicons-react';
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

  const expertiseData = [
    {
      category: "Programming Languages",
      icon: <Terminal size={24} />,
      skills: [
        { name: "Java", icon: <JavaOriginal size={20} /> },
        { name: "Python", icon: <PythonOriginal size={20} /> },
        { name: "JavaScript", icon: <JavascriptOriginal size={20} /> },
        { name: "SQL", icon: <MysqlOriginal size={20} /> },
        { name: "C++", icon: <CplusplusOriginal size={20} /> },
        { name: "C", icon: <COriginal size={20} /> },
        { name: "PHP", icon: <PhpOriginal size={20} /> }
      ]
    },
    {
      category: "Web Development & Frameworks",
      icon: <Globe size={24} />,
      skills: [
        { name: "MERN Stack", icon: <MongodbOriginal size={20} /> },
        { name: "React.js", icon: <ReactOriginal size={20} /> },
        { name: "HTML5", icon: <Html5Original size={20} /> },
        { name: "CSS", icon: <Css3Original size={20} /> },
        { name: "Tailwind CSS", icon: <TailwindcssOriginal size={20} /> },
        { name: "Node.js", icon: <NodejsOriginal size={20} /> },
        { name: "Express.js", icon: <ExpressOriginal size={20} /> },
        { name: "FastAPI", icon: <Code2 size={20} /> },
        { name: "Restful APIs", icon: <Layers size={20} /> },
        { name: "OAuth 2.0", icon: <Settings size={20} /> },
        { name: "WebSockets", icon: <Cpu size={20} /> },
        { name: "Selenium", icon: <CheckCircle2 size={20} /> }
      ]
    },
    {
      category: "Databases",
      icon: <Database size={24} />,
      skills: [
        { name: "MySQL", icon: <MysqlOriginal size={20} /> },
        { name: "Firebase", icon: <FirebasePlain size={20} /> },
        { name: "SQL Server", icon: <MicrosoftsqlserverPlain size={20} /> }
      ]
    },
    {
      category: "Tools & Platforms",
      icon: <Settings size={24} />,
      skills: [
        { name: "VS Code", icon: <VscodeOriginal size={20} /> },
        { name: "GitHub", icon: <GithubOriginal size={20} /> },
        { name: "Visual Studio", icon: <VisualstudioPlain size={20} /> },
        { name: "Figma", icon: <FigmaOriginal size={20} /> },
        { name: "Postman", icon: <Code2 size={20} /> },
        { name: "Power BI", icon: <Database size={20} /> },
        { name: "Google Cloud", icon: <GooglecloudOriginal size={20} /> },
        { name: "MS Office", icon: <Settings size={20} /> }
      ]
    },
    {
      category: "Methodologies & Paradigms",
      icon: <Workflow size={24} />,
      skills: [
        { name: "Agile", icon: <CheckCircle2 size={20} /> },
        { name: "OOP", icon: <Cpu size={20} /> }
      ]
    }
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
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
          transition={{ duration: 0.6, delay: 0.1 }}
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
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Process & Strategy</h3>
          <div className={styles.barList}>
            {processSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} percent={skill.percent} />
            ))}
          </div>
        </motion.div>
      </div>

      <div className={styles.technicalExpertise}>
        <motion.div
          className={styles.expertiseTitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3>Technical <span className="highlight">Expertise</span></h3>
          <p>Proficiency in modern technologies and methodologies</p>
        </motion.div>

        <div className={styles.expertiseGrid}>
          {expertiseData.map((category, index) => (
            <motion.div
              key={index}
              className={styles.expertiseCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4>{category.icon} {category.category}</h4>
              <div className={styles.skillList}>
                {category.skills.map((skill, sIndex) => (
                  <div key={sIndex} className={styles.skillItem}>
                    <span className={styles.icon}>{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

