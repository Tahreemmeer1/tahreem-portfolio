import { useState } from "react";
import "./App.css";

const projects = [
  {
    title: "React E-Commerce Catalog",
    description:
      "A responsive React product catalog with search, category filtering, product details, and add-product functionality.",
    tech: ["React", "JavaScript", "CSS"],
    live: "https://react-catalog-tahreem.netlify.app",
    github: "https://github.com/Tahreemmeer1/React-catalog",
  },
  {
    title: "React Auth App",
    description:
      "A React authentication interface with login, registration, and protected-style navigation screens.",
    tech: ["React", "JavaScript", "CSS"],
    live: "https://react-auth-app-tahreem.netlify.app",
   github: "https://github.com/Tahreemmeer1/React-auth-app",
  },
  {
    title: "Product Explorer",
    description:
      "A product browsing application using the DummyJSON API with search, categories, sorting, and pagination.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    live: "https://product-explorer-tahreem.netlify.app",
    github: "https://github.com/Tahreemmeer1/ProductExplorer",
  },
  {
    title: "WeatherWize",
    description:
      "A weather application that uses location search and weather forecast APIs to display current weather information.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    live: "https://weatherwize-tahreem.netlify.app",
    github: "https://github.com/Tahreemmeer1/WeatherWize",
  },
  {
    title: "Jadoo Travel Website",
    description:
      "A modern responsive travel landing page inspired by a Figma design with destinations, testimonials, and subscription sections.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://jadoo-travel-webs.netlify.app",
    github: "https://github.com/Tahreemmeer1/travel-website",
  },
];

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript ES6",
  "React",
  "Responsive Design",
  "API Integration",
  "Git & GitHub",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="app">
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo" onClick={closeMenu}>
            Tahreem<span>.</span>
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-container">
            <div className="hero-content">
              <p className="eyebrow">FRONTEND WEB DEVELOPER</p>

              <h1>
                Building clean & responsive
                <span> web experiences.</span>
              </h1>

              <p className="hero-text">
                Hi, I'm Tahreem — a BS Information Technology student and
                Frontend Web Developer from Pakistan. I build responsive,
                user-friendly websites using modern frontend technologies.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="primary-button">
                  View My Work
                </a>

                <a href="#contact" className="secondary-button">
                  Contact Me
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="code-window">
                <div className="window-top">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="code-content">
                  <p>
                    <span className="code-purple">const</span>{" "}
                    <span className="code-blue">developer</span> = {"{"}
                  </p>

                  <p className="indent">
                    <span className="code-blue">name</span>:{" "}
                    <span className="code-green">"Tahreem"</span>,
                  </p>

                  <p className="indent">
                    <span className="code-blue">role</span>:{" "}
                    <span className="code-green">
                      "Frontend Developer"
                    </span>
                    ,
                  </p>

                  <p className="indent">
                    <span className="code-blue">skills</span>: [
                  </p>

                  <p className="double-indent">
                    <span className="code-green">"React"</span>,
                  </p>

                  <p className="double-indent">
                    <span className="code-green">"JavaScript"</span>,
                  </p>

                  <p className="double-indent">
                    <span className="code-green">"CSS"</span>
                  </p>

                  <p className="indent">],</p>

                  <p className="indent">
                    <span className="code-blue">available</span>:{" "}
                    <span className="code-purple">true</span>
                  </p>

                  <p>{"}"}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="section-container">
            <p className="section-label">01 — ABOUT</p>

            <h2>Turning ideas into interfaces.</h2>

            <div className="about-grid">
              <div>
                <p className="large-text">
                  I'm a Frontend Web Developer who enjoys creating clean,
                  responsive, and easy-to-use web interfaces.
                </p>
              </div>

              <div>
                <p>
                  I'm currently studying BS Information Technology and
                  developing my practical skills through projects and
                  internship experience.
                </p>

                <p>
                  My focus is frontend development with HTML, CSS, JavaScript,
                  React, responsive design, and API integration.
                </p>

                <p>
                  I enjoy learning new technologies and turning designs and
                  ideas into functional websites.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="section-container">
            <p className="section-label">02 — SKILLS</p>

            <h2>Tools I work with.</h2>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill-card" key={skill}>
                  <span>0{index + 1}</span>
                  <h3>{skill}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <div className="section-container">
            <p className="section-label">03 — EXPERIENCE</p>

            <h2>Where I'm growing.</h2>

            <div className="experience-card">
              <div className="experience-date">2026 — PRESENT</div>

              <div className="experience-content">
                <h3>Frontend Web Development Intern</h3>
                <p className="company-name">DawoodTech NextGen</p>

                <p>
                  Working on frontend web development tasks and gaining
                  practical experience with HTML, CSS, JavaScript, React, and
                  professional development workflows.
                </p>

                <div className="experience-tags">
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>JavaScript</span>
                  <span>React</span>
                  <span>Responsive Design</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-container">
            <p className="section-label">04 — PROJECTS</p>

            <div className="projects-heading">
              <h2>Selected work.</h2>

              <p>
                A collection of frontend projects I've built while learning
                and developing my skills.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <article className="project-card" key={project.title}>
                  <div className={`project-number number-${index + 1}`}>
                    0{index + 1}
                  </div>

                  <div className="project-info">
                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="tech-list">
                      {project.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    <div className="project-links">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo ↗
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub ↗
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

       <section id="contact" className="section contact-section">
  <div className="section-container">
    <p className="section-label">05 — CONTACT</p>

    <div className="contact-content">
      <div>
        <h2>Let's build something together.</h2>

        <p>
          I'm open to frontend development opportunities, internships,
          freelance projects, and collaborations.
        </p>
      </div>

      <div className="contact-links">
        <a
          href="mailto:tahreemmeer7@gmail.com"
          className="contact-link"
        >
          Email ↗
        </a>

        <a
          href="https://github.com/Tahreemmeer1"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          GitHub ↗
        </a>

        <a
          href="https://www.linkedin.com/in/tahreem-meer-641072414/"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          LinkedIn ↗
        </a>
      </div>
    </div>
  </div>
</section>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <p>© 2026 Tahreem Meer. All rights reserved.</p>

          <p>Frontend Web Developer</p>
        </div>
      </footer>
    </div>
  );
}

export default App;