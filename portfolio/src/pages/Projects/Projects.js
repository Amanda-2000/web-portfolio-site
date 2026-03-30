import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import styles from './Projects.module.css';

const GithubIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const ProjectCard = ({ title, desc, tech, github, demo, image }) => {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.imageBox}>
        <div className={styles.overlay}>
          <div className={styles.links}>
            <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
            {demo && (
              <a href={demo} target="_blank" rel="noreferrer" aria-label="Live Demo">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        <img src={image} alt={title} className={styles.projectImg} />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className={styles.techStack}>
          {tech.map((item, index) => (
            <span key={index} className={styles.techTag}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'QA Automation Framework',
      desc: 'A comprehensive selenium-based automation framework for testing e-commerce web applications, featuring detailed reporting and cross-browser support.',
      tech: ['Selenium', 'Java', 'TestNG', 'Maven'],
      github: 'https://github.com/amandads',
      image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'E-commerce React Dashboard',
      desc: 'A modern, responsive admin dashboard for managing products, tracking sales, and visualizing data using Chart.js.',
      tech: ['React', 'CSS Modules', 'Chart.js', 'Firebase'],
      github: 'https://github.com/amandads',
      demo: 'https://demo.example.com',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'API Testing Collection',
      desc: 'An automated Postman collection for testing RESTful services, including environment variables, scripts, and comprehensive assertions.',
      tech: ['Postman', 'JavaScript', 'Newman'],
      github: 'https://github.com/amandads',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Portfolio Website',
      desc: 'A personal portfolio website designed with React and Framer Motion, focusing on performance and modern aesthetics.',
      tech: ['React', 'Framer Motion', 'Vanilla CSS'],
      github: 'https://github.com/amandads',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section className={`${styles.projects} container section-padding`}>
      <motion.div
        className="title-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">My <span className="highlight">Projects</span></h2>
        <p className="section-subtitle">A collection of my recent work</p>
      </motion.div>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
