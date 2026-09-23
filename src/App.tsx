import React from 'react';
import {
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
} from 'lucide-react';

const importLogo = (filename: string) =>
  new URL(`./assets/${filename}`, import.meta.url).href;

const Navigation = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-black px-4 py-2">
    <ul className="flex justify-center gap-4 overflow-x-auto whitespace-nowrap text-sm uppercase tracking-wide text-accent">
      {['home', 'about', 'projects', 'education', 'contact'].map((section) => (
        <li key={section}>
          <a
            href={`#${section}`}
            className="transition-colors duration-200 hover:text-white"
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
    title: 'BrightKids - Kids Learning App | Group Project',
    description:
      'An interactive mobile application designed to teach children aged 3+ good manners through engaging AI-generated stories and quizzes.',
    tech: 'Python, Flask, OpenAI API, Firebase, Flutter, Figma',
    logo: 'BK Logo.jpeg',
  },
  {
    title: 'Real-Time Ticketing System | Individual Project',
    description:
      'Developed a real-time event ticketing platform that enables users to browse events, reserve tickets, and purchase tickets with instant availability updates.',
    tech: 'Java, Spring Boot, React',
    logo: 'ticket.png',
  },
  {
    title: 'Reflekt - Mood Analysis Journal | Group Project - Ongoing',
    description:
      'An AI-integrated responsive journaling application that uses sentiment analysis to visualize user moods and track emotional well-being over time.',
    tech: 'React, Node.js, PostgreSQL',
    logo: 'journal.png',
  },
  {
    title: 'Sudoku Game | Individual Project',
    description:
      'Developed a Sudoku puzzle game that generates random puzzles with varying difficulty levels, real-time solution checking, and a puzzle generation algorithm.',
    tech: 'React',
    logo: 'puzzle.png',
  },
  {
    title: 'EcoNest - Community Garden App Prototype | Individual Project',
    description:
      'Designed a high-fidelity prototype for an application that helps urban residents connect with local gardening communities.',
    tech: 'Figma',
    logo: 'econest.png',
  },
  {
    title: 'Beyond Books - Quality Education Website | Group Project',
    description:
      'Developed a website promoting Quality Education, one of the seventeen United Nations Sustainable Development Goals (SDGs).',
    tech: 'HTML, CSS, JavaScript',
    logo: 'book.png',
  },
  {
    title: 'Plane Seat Management System | Individual Project',
    description:
      'Developed a Java-based plane seat management system that allows users to purchase and cancel seats, view seating availability, and manage passenger information.',
    tech: 'Java',
    logo: 'plane.png',
  },
  {
    title: 'University Progression System | Individual Project',
    description:
      'Developed a system that evaluates student academic results and determines university progression outcomes at the end of an academic year.',
    tech: 'Python',
    logo: 'student.png',
  },
];

const skills = [
  { name: 'Python', level: 'Advanced' },
  { name: 'Java', level: 'Advanced' },
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'HTML/CSS', level: 'Advanced' },
  { name: 'React', level: 'Intermediate' },
  { name: 'Next.js', level: 'Intermediate' },
  { name: 'Tailwind CSS', level: 'Intermediate' },
  { name: 'Spring Boot', level: 'Intermediate' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'Flask', level: 'Intermediate' },
  { name: 'PostgreSQL', level: 'Intermediate' },
  { name: 'Firebase', level: 'Intermediate' },
  { name: 'WordPress', level: 'Intermediate' },
  { name: 'Figma', level: 'Advanced' },
  { name: 'Git', level: 'Intermediate' },
];

function App() {
  return (
    <div className="bg-primary text-white">
      <Navigation />

      {/* Home Section */}
      <section
        id="home"
        className="section relative w-full overflow-hidden bg-primary px-4 py-8 pt-20 md:px-8 md:py-28"
      >
        <div className="relative z-10 text-center">
          <h1 className="mb-4 text-center font-display text-5xl text-accent text-hover md:text-9xl lg:text-10xl">
            VENURI
            <br />
            JAYASURIYA
          </h1>

          <p className="text-center text-base uppercase tracking-widest text-hover">
            Computer Science Undergraduate
          </p>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="section w-full bg-sage px-4 py-8 md:px-8 md:py-16"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 font-display text-6xl text-hover">
            Get to Know Venuri
          </h2>

          <p className="text-lg leading-relaxed">
            Computer Science undergraduate at the University of Westminster
            with industry experience as a Software Development Intern at Dawn
            360. Passionate about developing responsive, user-focused digital
            experiences and solving real-world problems through software.
            Experienced in frontend and backend development, UI/UX design,
            databases, and modern web technologies.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="section w-full bg-primary px-4 py-8 md:px-8 md:py-16"
      >
        <h2 className="mb-8 font-display text-6xl text-accent text-hover">
          PROJECTS
        </h2>

        <div className="overflow-x-auto">
          <div className="flex min-w-max gap-6 pb-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-72 shrink-0 rounded-lg bg-gradient-to-br from-accent/20 to-accent/40 p-6 sm:w-80"
              >
                <img
                  src={importLogo(project.logo)}
                  alt={`${project.title} Logo`}
                  className="mx-auto mb-3 h-12 w-12 object-contain"
                />

                <h3 className="mb-3 text-center font-display text-xl">
                  {project.title}
                </h3>

                <p className="mb-4 text-justify text-sm leading-relaxed">
                  {project.description}
                </p>

                <p className="text-sm text-accent">
                  USED: {project.tech}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <h3 className="mb-8 mt-12 font-display text-3xl text-accent">
          SKILLS
        </h3>

        <div className="overflow-x-auto">
          <div className="flex min-w-max gap-6 pb-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="w-48 rounded-lg bg-gradient-to-br from-accent/20 to-accent/40 p-6"
              >
                <h3 className="mb-2 font-display text-xl">
                  {skill.name}
                </h3>

                <p className="text-xs text-accent">
                  {skill.level}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section
        id="education"
        className="section w-full bg-sage px-4 py-8 md:px-8 md:py-16"
      >
        {/* Experience */}
        <h2 className="mx-auto mb-12 w-full max-w-4xl overflow-hidden font-display text-5xl text-accent text-hover">
          EXPERIENCE
        </h2>

        <div className="mx-auto mb-16 flex max-w-2xl flex-col gap-6 md:gap-10">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="ml-4">
                <h3 className="font-display text-2xl text-accent">
                  Software Development Intern
                </h3>

                <p className="text-base italic">
                  Dawn 360
                </p>

                <p className="text-sm text-accent/80">
                  2025 - 2026
                </p>

                <p className="mt-2 text-sm leading-relaxed">
                  Contributed to the development and maintenance of responsive
                  websites and e-commerce platforms using technologies including
                  Next.js, React, WordPress, Shopify, and Tailwind CSS. Worked
                  on frontend implementation, responsive UI development,
                  website enhancements, debugging, and client requirements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <h2 className="mx-auto mb-12 w-full max-w-4xl overflow-hidden font-display text-5xl text-accent text-hover">
          EDUCATION
        </h2>

        <div className="mx-auto flex max-w-2xl flex-col gap-6 md:gap-10">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="ml-4">
                <h3 className="font-display text-2xl text-accent">
                  BSc (Hons) Computer Science
                </h3>

                <p className="text-base italic">
                  University of Westminster
                </p>

                <p className="text-sm text-accent/80">
                  2023 - 2027
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="ml-4">
                <h3 className="font-display text-2xl text-accent">
                  Chartered Institute of Management Accountants (CIMA)
                </h3>

                <p className="text-base italic">
                  Wisdom Business Academy
                </p>

                <p className="text-sm text-accent/80">
                  2023 - Present
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="ml-4">
                <h3 className="font-display text-2xl text-accent">
                  Musaeus College
                </h3>

                <p className="text-sm text-accent/80">
                  2009 - 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="section w-full bg-primary px-4 py-8 md:px-8 md:py-16"
      >
        <h2 className="mb-12 font-display text-6xl text-accent text-hover">
          GET IN TOUCH
        </h2>

        <div className="mx-auto max-w-xl space-y-6">
          <div className="flex items-center gap-4 text-hover">
            <Phone className="text-accent" />

            <a
              href="tel:+447716772076"
              className="hover:text-accent"
            >
              +44 7716 772076
            </a>
          </div>

          <div className="flex items-center gap-4 text-hover">
            <Mail className="text-accent" />

            <a
              href="mailto:jayasuriyavenuri@gmail.com"
              className="hover:text-accent"
            >
              jayasuriyavenuri@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4 text-hover">
            <Linkedin className="text-accent" />

            <a
              href="https://www.linkedin.com/in/venuri-k-jayasuriya/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              LinkedIn
            </a>
          </div>

          <div className="flex items-center gap-4 text-hover">
            <Github className="text-accent" />

            <a
              href="https://github.com/venuriJayasuriya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              GitHub
            </a>
          </div>

          <div className="flex items-center gap-4 text-hover">
            <Download className="text-accent" />

            <a
              href="/Venuri Jayasuriya - CV.pdf"
              download
              className="hover:text-accent"
            >
              Download my CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;