import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faJs, faPython, faJava, faDocker, faGithub } from '@fortawesome/free-brands-svg-icons';
import './styles.css';

function Footer() {
  return (
    <footer className="container-footer">
      <div className="technologies-list">
        <ul className="icon-list">
          <li>
            <FontAwesomeIcon icon={faReact} size="10x" className="icon" />
          </li>
          <li>
            <FontAwesomeIcon icon={faGithub} size="6x" className="icon" />
          </li>
          <li>
            <FontAwesomeIcon icon={faJs} size="6x" className="icon" />
          </li>
          <li>
            <FontAwesomeIcon icon={faJava} size="6x" className="icon" />
          </li>
          <li>
            <FontAwesomeIcon icon={faHtml5} size="6x" className="icon" />
          </li>
          <li>
            <FontAwesomeIcon icon={faPython} size="6x" className="icon" />
          </li>
          <li>
            <FontAwesomeIcon icon={faDocker} size="6x" className="icon" />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
