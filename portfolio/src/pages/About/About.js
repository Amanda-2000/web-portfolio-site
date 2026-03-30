import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, Award, Heart } from 'lucide-react';
import styles from './About.module.css';

const About = () => {
  const infoCards = [
    {
      icon: <BookOpen className={styles.icon} />,
      title: 'Education',
      desc: 'BSc (Hons) in Information Technology from General Sir John Kotelawala Defence University',
    },
    {
      icon: <Briefcase className={styles.icon} />,
      title: 'Experience',
      desc: 'QA Internship at Bank of Ceylon and Web Development projects focused on modern tech stacks.',
    },
    {
      icon: <Award className={styles.icon} />,
      title: 'Certifications',
      desc: 'ISTQB Foundation (in progress)',
    },
    {
      icon: <Heart className={styles.icon} />,
      title: 'Interests',
      desc: 'Passionate about UI/UX, process automation, and learning new technologies.',
    },
  ];

  return (
    <section className={`${styles.about} container section-padding`}>
      <motion.div
        className="title-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">About <span className="highlight">Me</span></h2>
        <p className="section-subtitle">Professional Summary & Background</p>
      </motion.div>

      <div className={styles.container}>
        <motion.div
          className={styles.textSide}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Who is Amanda?</h3>
          <p>
            I am a recent IT Graduate with a strong foundation in software quality assurance,
            web development, and process analysis. My journey in technology started with a
            deep curiosity about how software is built and how it can be improved to
            provide a seamless user experience.
          </p>
          <p>
            With a background in Information Technology, I've developed a keen eye for
            detail and a structured approach to problem-solving. Whether it's finding
            bugs as a QA Engineer, crafting responsive interfaces as a Web Developer,
            or optimizing workflows as a Process Analyst, I am dedicated to delivering
            excellence in every project I undertake.
          </p>
          <p>
            I believe that the best applications are not just functional but also
            intuitive and reliable. My goal is to bridge the gap between technical
            complexity and user-centric design.
          </p>
        </motion.div>

        <motion.div
          className={styles.gridSide}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {infoCards.map((card, index) => (
            <div key={index} className={styles.aboutCard}>
              {card.icon}
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
