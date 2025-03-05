import { Container } from "./styles";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>RMS (Rental Management System)</h3>
              <p>
                The Rental Management System is a comprehensive web application
                designed to streamline the process of managing rental
                properties, tenants, bills payments, leases, and ledger details.
                The system ensures efficient and organized management of rental
                operations.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>ReactJS</li>
                <li>ExpressJS</li>
                <li>NodeJS</li>
                <li>MongoDB</li>
                <li>Github</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>CMS (Complaint Management System)</h3>
              <p>
                The Complaint Management System (CMS) is a dynamic solution for
                efficiently handling and resolving reported complaints. The
                system empowers administrators to swiftly report machine faults,
                which are seamlessly transmitted to engineers for resolution.
                This collaborative approach ensures prompt issue resolution and
                enhances operational efficiency.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>ReactJS</li>
                <li>ExpressJS</li>
                <li>NodeJS</li>
                <li>MongoDB</li>
                <li>Github</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Bed Configurator</h3>
              <p>
                A dynamic web application allowing users to customize their
                ideal bed configurations. Admins can upload bed images with
                various layouts, including size, color, storage options, and
                headboards. Users can then interactively configure their beds
                based on these options. This project offers a seamless and
                engaging user experience for creating personalized beds.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>ReactJS</li>
                <li>ExpressJS</li>
                <li>NodeJS</li>
                <li>MongoDB</li>
                <li>Github</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
