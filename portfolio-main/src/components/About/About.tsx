import { Container } from "./styles";
import yashjadeja from "../../assets/yashjadejabg.png";
import reactIcon from "../../assets/react-icon.svg";
import cIcon from "../../assets/c.svg";
import nodeIcon from "../../assets/node-icon.svg";
import mongodb from "../../assets/mongodb-icon-1.svg";
import mysql from "../../assets/mysql-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import github from "../../assets/github.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Welcome to my portfolio! I'm DHAPA JAYDIP, a passionate full
            stack web developer specializing in React and Node.js. With a
            fervent enthusiasm for problem-solving and an eye for UI/UX design,
            I am dedicated to crafting innovative solutions that elevate the
            digital experience.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            In my journey as a developer, I embrace versatility and continuous
            learning. From building dynamic web applications to optimizing
            backend functionality, I thrive on tackling diverse challenges and
            pushing the boundaries of technology.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            Equipped with expertise in C, React, Node.js, MongoDB, MySQL, HTML,
            CSS, and more, I am committed to delivering solutions that not only
            meet but exceed expectations. My passion for programming extends
            beyond proficiency; it's a driving force that fuels my desire to
            make a meaningful impact in the digital landscape.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={cIcon} alt="C" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={mongodb} alt="mongodb" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={mysql} alt="mysql" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={github} alt="github" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <img src={yashjadeja} alt="Yashrajsinh Jadeja" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
