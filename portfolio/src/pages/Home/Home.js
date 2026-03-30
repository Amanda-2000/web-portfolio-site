import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import profileImg from '../../assets/Amanda_Dissanayaka.jpeg';
import cvFile from '../../assets/CV of Amanda Dissanayaka.pdf';

const Home = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.heroContainer} container`}>
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badge}>Welcome to my portfolio</span>
            <h1 className={styles.name}>
              Hi, I'm <span className="highlight">Amanda Yohani</span>
            </h1>
            <h2 className={styles.role}>
              IT Graduate | QA Engineer | Web Developer | Process Analyst
            </h2>
            <p className={styles.degree}>
              BSc (Hons) in Information Technology | Northshore International Campus
            </p>
            <p className={styles.bio}>
              Passionate about building user-friendly applications and ensuring
              software quality through rigorous testing and process optimization.
            </p>
            
            <div className={styles.cta}>
              <a href={cvFile} download className={styles.primaryBtn}>
                Download CV <Download size={18} />
              </a>
              <Link to="/projects" className={styles.secondaryBtn}>
                View Projects <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={styles.imageOverlay}></div>
          <img
            src={profileImg}
            alt="Amanda Yohani Dissanayaka"
            className={styles.profileImg}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
