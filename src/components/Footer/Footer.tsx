import { Container } from "./styles";
import reactIcon from "../../assets/react-icon.svg";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import telegram from "../../assets/telegram.svg";
import instagramIcon from "../../assets/instagram.svg";

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://github.com/dhapajaydip" className="logo">
        <span>www.dhapa</span>
        <span> jaydip.in</span>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️🧿</span> */}
        </p>
      </div>
      <div className="social-media">
        <a
          href="linkedin.com/in/dhapa-jaydip-58373b347"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="linkedin.com/in/dhapa-jaydip-58373b347"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="linkedin.com/in/dhapa-jaydip-58373b347"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a href="linkedin.com/in/dhapa-jaydip-58373b347" target="_blank" rel="noreferrer">
          <img src={telegram} alt="telegram" />
        </a>
        <a
          href="linkedin.com/in/dhapa-jaydip-58373b347"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  );
}
