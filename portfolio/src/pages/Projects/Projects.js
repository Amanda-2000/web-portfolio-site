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
      title: 'Cafe Miron Food Ordering System',
      role: 'Quality Assurance Engineer & Web Developer',
      desc: 'A comprehensive food ordering and café management system featuring both a web-based platform and a mobile application for streamlined operations.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Flutter'],
      responsibilities: [
        'Designed and developed the front-end and backend components of the café management system, including API integration for billing and inventory.',
        'Implemented a responsive UI/UX and managed real-time data flow using Firebase for order tracking.',
        'Led the QA process by designing test cases and performing functional, usability, and regression testing to ensure system stability.',
        'Identified, documented, and tracked defects to maintain high software quality across web and mobile platforms.'
      ],
      github: 'https://github.com/Amanda-2000/WebProject',
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'CSV Data Analyzer and Visualizer',
      role: 'Quality Assurance Engineer & Frontend Designer',
      desc: 'A full-stack web application designed to process, analyze, and visualize CSV data through interactive charts and automated data handling.',
      tech: ['React.js', 'Python', 'Flask', 'Pandas', 'Chart.js', 'Bootstrap', 'REST API'],
      responsibilities: [
        'Designed and developed an interactive user interface using React.js and Bootstrap for seamless data exploration.',
        'Developed REST API endpoints using Flask to bridge the gap between frontend requests and Python-based data processing.',
        'Executed rigorous functional and usability testing to ensure the accuracy of data analysis and chart visualizations.',
        'Designed test cases for file upload mechanisms and identified defects in API responses and data handling workflows.'
      ],
      github: 'https://github.com/Buwanekafernando/Cv-analyzes-Agent', // Replace with your actual link if different
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Research Agent',
      role: 'Frontend Developer & System Architect',
      desc: 'An AI-powered research assistant designed to process complex queries and generate structured, actionable insights using large language models.',
      tech: ['Python', 'LangChain', 'OpenAI', 'Pydantic', 'dotenv'],
      responsibilities: [
        'Designed the overall system architecture to integrate AI-driven research capabilities with a robust backend.',
        'Implemented an interactive frontend interface to visualize AI-generated insights and summaries effectively.',
        'Structured complex AI responses into clear, digestible formats to enhance user experience and readability.',
        'Utilized Pydantic for data validation and LangChain for managing autonomous agent workflows.'
      ],
      github: 'https://github.com/Buwanekafernando/Research-Assistant-Aiagent',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Crowdsourced Tourist Guide for Anuradhapura',
      role: 'Mobile Application Developer',
      desc: 'A community-driven travel platform that empowers users to share real-time tips, discover hidden destinations, and navigate historic sites through crowdsourced data.',
      tech: ['Flutter', 'Firebase', 'Google Maps API'],
      responsibilities: [
        'Developed a cross-platform mobile application using Flutter, focusing on a high-performance and seamless UI/UX.',
        'Integrated Google Maps API to provide interactive, location-based travel recommendations and navigation.',
        'Implemented secure user authentication and scalable cloud data storage using the Firebase ecosystem.',
        'Developed personalized recommendation features that adapt content based on user feedback and travel preferences.'
      ],
      image: 'https://images.pexels.com/photos/7235804/pexels-photo-7235804.jpeg?cs=srgb&dl=pexels-n-voitkevich-7235804.jpg&fm=jpg',
    },
    {
      title: 'OrangeHRM Login Test Automation',
      role: 'Test Automation Engineer',
      desc: 'A robust automation suite designed to validate the authentication security and functional reliability of the OrangeHRM login module.',
      tech: ['Selenium WebDriver', 'Java', 'IntelliJ IDEA'],
      responsibilities: [
        'Developed and executed a suite of automated test cases covering valid/invalid credentials, empty fields, and authentication tokens.',
        'Leveraged Selenium WebDriver and Java to automate repetitive manual testing tasks, increasing test coverage and efficiency.',
        'Performed detailed defect documentation and reporting to ensure a seamless and secure user entry point.',
        'Configured the testing environment within IntelliJ to manage dependencies and streamline script execution.'
      ],
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=800&auto=format&fit=crop',
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
