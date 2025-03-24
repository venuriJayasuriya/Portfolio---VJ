import React from 'react';
const importLogo = (filename: string) => new URL(`./assets/${filename}`, import.meta.url).href;
import { Download, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Navigation = () => (
  <nav className="fixed top-4 right-4 z-50">
    <ul className="flex gap-4">
      {['home', 'about', 'projects', 'education', 'contact'].map((section) => (
        <li key={section}>
          <a
            href={`#${section}`}
            className="text-accent hover:text-white text-hover uppercase text-m tracking-wider"
          >
            {section}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

const projects = [
  {
    title: 'Brightkids - Kids learning app | Group Project',
    description: 'An interactive mobile/web application designed to teach children age 3+ good manners through engaging, AI-generated stories and quizzes.',
    tech: 'Python, Flask, Open AI Integration, Firebase, Flutter, Figma',
    logo: 'BK Logo.jpeg',
  },
  {
    title: 'A Real-time ticketing system | Individual Project',
    description: 'Developed a real-time event ticketing platform that enables users to browse events, reserve and purchase tickets with instant availability updates.',
    tech: 'Java, Spring Boot, React',
    logo: 'ticket.png',
  },
  {
    title: 'Reflekt - Mood analyzing journal - web application | Group Project - ONGOING',
    description: 'AI integrated responsive and interactive journaling application that uses sentiment analysis to visualize user moods and track emotional well-being over time.',
    tech: 'React, Node.js, PostgreSQL',
    logo: 'journal.png',
  },
  {
    title: 'Sudoku game - Web application | Individual Project',
    description: 'Developed a Sudoku puzzle game that generates random puzzles with varying difficulty levels, with real-time solution checking, and puzzle generation algorithm.',
    tech: 'React',
    logo: 'puzzle.png',
  },
  {
    title: 'Econest - High fidelity prototype for A community garden app | Individual Project',
    description: 'This project is an app designed to help urban residents connect with gardening communities.',
    tech: 'Figma',
    logo: 'econest.png',
  },
  {
    title: 'Beyond Books - Website that promotes Quality Education | Group Project',
    description: 'This project is a website that promotes Quality Education one of the seventeen United Nations Sustainable Development Goals (SDGs).',
    tech: 'HTML, CSS, JavaScript',
    logo: 'book.png',
  },
  {
    title: 'Plane seat management system | Individual Project',
    description: 'This project is a website that promotes Quality Education one of the seventeen United Nations Sustainable Development Goals (SDGs).',
    tech: 'Java',
    logo: 'plane.png',
  },
  {
    title: 'Progression System for University students | Individual Project',
    description: 'This project predicts progression outcomes of a University at the end of each academic year.',
    tech: 'Python',
    logo: 'student.png',
  },
];

const skills = [
  { name: 'Python', level: 'Advanced' },
  { name: 'Java', level: 'Advanced' },
  { name: 'HTML/CSS', level: 'Advanced' },
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'Spring Boot', level: 'Intermediate' },
  { name: 'React.js', level: 'Intermediate' }, 
  { name: 'SQL', level: 'Intermediate' },
  { name: 'Figma', level: 'Advanced' },
];

function App() {
  return (
    <div className="bg-primary text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="section bg-primary">
        <h1 className="font-display text-9xl md:text-10xl text-accent text-center mb-4 text-hover">
          VENURI<br />JAYASURIYA
        </h1>
        <p className="text-center text-m tracking-widest uppercase text-hover">
          SOFTWARE ENGINEER | FULL-STACK DEVELOPER | BACKEND DEVELOPER | FRONTEND DEVELOPER
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-sage">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-7xl mb-8 text-hover">Get to Know Venuri</h2>
          <p className="text-lg leading-relaxed text-hover">
            Dedicated and hardworking individual passionate about building intuitive, user-focused
            applications and solving real-world problems, looking for a challenging role to enhance
            skills and knowledge that will maximize the potential of becoming an exceptionally
            qualified professional in the field of Computer Science.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section bg-primary">
        <h2 className="font-display text-7xl mb-8 text-accent text-hover">PROJECTS</h2>
        <div className="projects-container overflow-x-auto">
          <div className="flex gap-8 pb-4 min-w-max">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card bg-gradient-to-br from-accent/20 to-accent/40 p-6 rounded-lg w-80"
              >
                <img
                  src={importLogo(project.logo)}
                  alt={`${project.title} Logo`}
                  className="w-12 h-12 object-contain mb-2 mx-auto"
                />
                <h3 className="font-display text-xl mb-3 text-center">{project.title}</h3>
                <p className="text-sm mb-4" >{project.description}</p>
                <p className="text-s text-accent">USED: {project.tech}</p>
              </div>
            ))}
          </div>
        </div>

        
          <h3 className="font-display text-3xl mb-8 text-accent">SKILLS</h3>
          <div className="projects-container overflow-x-auto">
            <div className="flex gap-6 pb-4 min-w-max">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="project-card bg-gradient-to-br from-accent/20 to-accent/40 p-6 rounded-lg w-48"
                >
                  <h3 className="font-display text-xl mb-2">{skill.name}</h3>
                  <p className="text-xs text-accent">{skill.level}</p>
                </div>
              ))}
            </div>
          </div>
       
      
      </section>


      {/* Education Section */}
      <section id="education" className="section bg-sage">
        <h2 className="font-display text-7xl mb-12 text-hover">EDUCATION</h2>
        <div className="max-w-2xl mx-auto">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="ml-4">
                <h3 className="font-display text-2xl text-accent">Studying BSc (Hons) in Computer Science</h3>
                <p className="text-m italic">University of Westminster</p>
                <p className="text-sm text-accent/80">2023 - 2027</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="ml-4 ">
                <h3 className="font-display text-2xl text-accent">Chartered Institute of Management Accountancy (CIMA)</h3>
                <p className="text-m italic">Wisdom Business Academy</p>
                <p className="text-sm text-accent/80">2023 - Present</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="ml-4">
                <h3 className="font-display text-2xl text-accent">At Musaens College</h3>
                <p className="text-sm text-accent/80">2009 - 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-primary">
        <h2 className="font-display text-7xl mb-12 text-accent text-hover">GET IN TOUCH</h2>
        <div className="max-w-xl mx-auto space-y-6">
          <div className="flex items-center gap-4 text-hover">
            <Phone className="text-accent" />
            <p>074 170 6826</p>
          </div>
          <div className="flex items-center gap-4 text-hover">
            <Mail className="text-accent" />
            <p>jayasuriyavenuri@gmail.com</p>
          </div>
          <div className="flex items-center gap-4 text-hover">
            <Linkedin className="text-accent" />
            <a href="https://www.linkedin.com/in/venuri-k-jayasuriya/" className="hover:text-accent">LinkedIn</a>
          </div>
          <div className="flex items-center gap-4 text-hover">
            <Github className="text-accent" />
            <a href="https://github.com/venuriJayasuriya" className="hover:text-accent">GitHub</a>
          </div>
          <div className="flex items-center gap-4 text-hover">
            <Download className="text-accent" />
            <a href="#" className="hover:text-accent">CV</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;