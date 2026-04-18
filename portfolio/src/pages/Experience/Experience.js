import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';
import styles from './Experience.module.css';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'QA Trainee',
      company: 'Bank of Ceylon',
      date: 'September 2025 - February 2026',
      desc: 'Tested web and mobile applications using automated and manual processes. Documented bugs and collaborated with developers to ensure code quality.',
      icon: <Briefcase size={18} />,
    },
    {
      type: 'university',
      title: 'BSc (Hons) in Information Technology',
      company: 'General Sir John Kotelawala Defence University',
      date: '2020 - 2026',
      desc: 'Completed several key projects in web dev and process analysis.',
      icon: <GraduationCap size={18} />,
    },
  ];

  const workExp = experiences.filter(exp => exp.type === 'work');
  const eduExp = experiences.filter(exp => exp.type !== 'work');

  const TimelineItem = ({ exp, index }) => (
    <motion.div
      key={index}
      className={styles.timelineItem}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={styles.timelineIcon}>
        {exp.icon}
      </div>
      <div className={styles.timelineContent}>
        <span className={exp.type === 'work' ? styles.workBadge : styles.eduBadge}>
          {exp.type.toUpperCase()}
        </span>
        <h4>{exp.title}</h4>
        <div className={styles.meta}>
          <h5>{exp.company}</h5>
          <p>{exp.date}</p>
        </div>
        {exp.desc && <p className={styles.desc}>{exp.desc}</p>}
      </div>
    </motion.div>
  );

  return (
    <section className={`${styles.experience} container`}>
      <motion.div
        className="title-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">My <span className="highlight">Journey</span></h2>
        <p className="section-subtitle">Academic and Professional Experience</p>
      </motion.div>

      <div className={styles.columns}>
        <div className={styles.column}>
          <h3><Briefcase className={styles.columnTitleIcon} /> Work Experience</h3>
          <div className={styles.timeline}>
            {workExp.map((exp, index) => (
              <TimelineItem key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>

        <div className={styles.column}>
          <h3><GraduationCap className={styles.columnTitleIcon} /> Education</h3>
          <div className={styles.timeline}>
            {eduExp.map((exp, index) => (
              <TimelineItem key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
