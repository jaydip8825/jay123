import { Container } from "../Experience/styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Education() {
  return (
    <Container id="educations">
      <h2>Education</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div
              className="body"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <h3> Bachelor of Engineering </h3>
            </div>
            <h4 style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              Shantilal Shah Engineering College, Bhavnagar
            </h4>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              2021 - 2025
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div
              className="body"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <h3> Higher Secondary School Certificate </h3>
            </div>
            <h4 style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              Sarthi Vidhya Sankul, Bhavnagar
            </h4>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              2019 - 2021
            </p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div
              className="body"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <h3> Secondary School Certificate </h3>
            </div>
            <h4 style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              Shree Maruti Vidhya Mandir, Bhavnagar{" "}
            </h4>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              2018 - 2019
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
