import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Experience() {
  return (
    <Container id="experience">
      <h2>Experience</h2>
      <div
        className="projects"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div
              className="body"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <h3>&#123; Full Stack Web Developer &#125;</h3>
            </div>
            <h4 style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              SPARROW SOFTTECH (Jan 2024 - Present)
            </h4>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              ReactJs, NodeJs, MongoDB
            </p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div
              className="body"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <h3>&#123; Full Stack Web Intern &#125;</h3>
            </div>
            <h4 style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              SPARROW SOFTTECH (Sept 2023 - Dec 2023)
            </h4>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              ReactJs, NodeJs, MongoDB
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
