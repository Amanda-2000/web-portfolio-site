import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';
import styles from './Experience.module.css';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'QA  Trainee',
      company: 'Bank of Ceylon',
      date: 'September 2025 - February 2026',
      desc: 'Tested web and mobile applications using automated and manual processes. Documented bugs and collaborated with developers to ensure code quality.',
      icon: <Briefcase size={20} />,
    },
    {
      type: 'university',
      title: 'BSc (Hons) in Information Technology',
      company: 'General Sir John Kotelawala Defence University',
      date: '2020 - 2026',
      desc: 'Completed several key projects in web dev and process analysis.',
      icon: <GraduationCap size={20} />,
    },
    {
      type: 'school',
      title: 'G.C.E Advanced Level',
      company: 'Eppawala Central College,Eppawala',
      date: '2020',
      desc: '',
      icon: <GraduationCap size={20} />,
    },
  ];

  return (
    <section className={`${styles.experience} container section-padding`}>
      <motion.div
        className="title-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">My <span className="highlight">Experience</span></h2>
        <p className="section-subtitle">Academic and Professional Journey</p>
      </motion.div>

      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={styles.timelineItem}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
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
              <h3>{exp.title}</h3>
              <div className={styles.meta}>
                <h4>{exp.company}</h4>
                <p>{exp.date}</p>
              </div>
              <p className={styles.desc}>{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
