import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import styles from './Projects.module.css';

const GithubIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const ProjectCard = ({ title, role, desc, tech, responsibilities, github, demo, image }) => {
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
        <h4 className={styles.role}>{role}</h4>
        <p className={styles.desc}>{desc}</p>
        
        <div className={styles.responsibilities}>
          <h5>Key Responsibilities:</h5>
          <ul>
            {responsibilities.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>

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
      title: 'Research Agent',
      role: 'Frontend Developer & System Architect',
      desc: 'An AI-powered research assistant capable of generating detailed insights and summaries based on user queries.',
      tech: ['Python', 'LangChain', 'OpenAI', 'Pydantic', 'dotenv'],
      responsibilities: [
        'Implemented an interactive interface to display AI-generated research insights and summaries.',
        'Ensured a smooth user experience by structuring responses clearly for easy understanding.',
        'Designed the overall architecture for the AI powered research assistant system.'
      ],
      github: 'https://github.com/Buwanekafernando/Research-Assistant-Aiagent',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Cafe Miron Food Ordering System',
      role: 'Full Stack Developer',
      desc: 'A full-stack ordering platform featuring a responsive web interface and a Flutter mobile app.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Flutter', 'Firebase'],
      responsibilities: [
        'Handled end-to-end delivery from designing UI/UX to deployment.',
        'Integrated Firebase APIs for real-time data synchronization across platforms.',
        'Executed comprehensive functional and regression testing suites to ensure reliability.'
      ],
      github: 'https://github.com/Amanda-2000/WebProject',
      image: 'https://images.unsplash.com/photo-1550966842-2849a2233a7c?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'CSV Data Analyzer and Visualizer',
      role: 'Frontend Developer & System Architect',
      desc: 'A full-stack data tool designed to process and visualize CSV files via a REST API.',
      tech: ['React', 'Python', 'Flask', 'Pandas', 'Chart.js', 'Bootstrap'],
      responsibilities: [
        'Spearheaded the frontend design using React and Chart.js for dynamic visualization.',
        'Served as the lead QA, ensuring data integrity across complex datasets.',
        'Executed rigorous functional testing of the Python/Pandas backend processing logic.'
      ],
      github: 'https://github.com/Buwanekafernando/Cv-analyzes-Agent',
      image: 'https://images.unsplash.com/photo-1551288049-bbda4833effb?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'API Testing Collection',
      role: 'QA Engineer',
      desc: 'An automated Postman collection for testing RESTful services, including environment variables and assertions.',
      tech: ['Postman', 'JavaScript', 'Newman'],
      responsibilities: [
        'Created an automated Postman collection for efficient testing of RESTful services.',
        'Implemented comprehensive assertions to validate response data and status codes.',
        'Configured environment variables for seamless switching between test environments.'
      ],
      github: 'https://github.com/Amanda-2000',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Portfolio Website',
      role: 'Frontend Developer',
      desc: 'A personal portfolio website focused on performance and modern aesthetics.',
      tech: ['React', 'Framer Motion', 'Vanilla CSS'],
      responsibilities: [
        'Designed and developed the website using React and Framer Motion for smooth animations.',
        'Optimized for performance and responsive layout across all device sizes.',
        'Implemented modern aesthetics using Vanilla CSS for maximum flexibility.'
      ],
      github: 'https://github.com/Amanda-2000',
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
