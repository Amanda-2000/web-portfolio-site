import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';
import styles from './Certificates.module.css';

const CertificateCard = ({ title, issuer, date, category }) => {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.iconBox}>
        <Award size={30} className={styles.icon} />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.category}>{category}</span>
          <span className={styles.date}>{date}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.issuer}>{issuer}</p>
        <div className={styles.status}>
          <CheckCircle size={16} /> Completed
        </div>
      </div>
    </motion.div>
  );
};

const Certificates = () => {
  const certificates = [
    {
      title: 'Advanced QA Automation with Selenium',
      issuer: 'Udemy',
      date: '2024',
      category: 'QA',
    },
    {
      title: 'Full Stack Web Development Professional',
      issuer: 'Cousera',
      date: '2023',
      category: 'IT',
    },
    {
      title: 'Business Process Optimization & Strategy',
      issuer: 'LinkedIn Learning',
      date: '2024',
      category: 'Process',
    },
    {
      title: 'ISTQB Foundation Level (Self-Study)',
      issuer: 'ISTQB',
      date: 'In Progress',
      category: 'QA',
    },
    {
      title: 'Responsive Web Design Certification',
      issuer: 'FreeCodeCamp',
      date: '2022',
      category: 'IT',
    },
    {
      title: 'Agile Project Management',
      issuer: 'Google',
      date: '2023',
      category: 'Management',
    },
  ];

  return (
    <section className={`${styles.certificates} container section-padding`}>
      <motion.div
        className="title-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Certificates & <span className="highlight">Courses</span></h2>
        <p className="section-subtitle">A history of continuous learning</p>
      </motion.div>

      <div className={styles.grid}>
        {certificates.map((cert, index) => (
          <CertificateCard key={index} {...cert} />
        ))}
      </div>
    </section>
  );
};

export default Certificates;
