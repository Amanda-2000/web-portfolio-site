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
      title: 'AI for Begineers',
      issuer: 'HP',
      date: 'April 2025',
      category: 'AI',
    },
    {
      title: 'Effective Business Websites',
      issuer: 'HP',
      date: 'March 2025',
      category: 'Digital Marketing',
    },
    {
      title: 'Create Social Network & Community Website with Wordpress',
      issuer: 'Udemy',
      date: 'March 2025',
      category: 'Web Development',
    },
    {
      title: 'Certified Software Quality Assurance Tester',
      issuer: 'FSD Academy',
      date: 'March 2025',
      category: 'QA',
    },
    {
      title: 'Creative Design Free Workshop',
      issuer: 'Southern IRAA',
      date: 'March 2025',
      category: 'Design',
    },
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco',
      date: 'February 2024',
      category: 'Cybersecurity',
    },
    {
      title: 'Packet Tracer Know How 1: Packet Tracer 101',
      issuer: 'Cisco',
      date: 'February 2024',
      category: 'Networking',
    },
    {
      title: 'Introduction to IoT',
      issuer: 'Cisco',
      date: 'September 2022',
      category: 'IoT',
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
