import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faJs, faPython, faJava, faDocker, faGithub } from '@fortawesome/free-brands-svg-icons';
import './styles.css';

function Footer() {
  return (
    <footer>
      <div className="technologies-list">
        <ul className="icon-list">
          <li>
            <div className="icon-wrapper">
              <FontAwesomeIcon
                icon={faReact}
                size="4x"
                spin
                fixedWidth
                pull="left"
              />
            </div>
          </li>
          <li>
            <div className="icon-wrapper">
              <FontAwesomeIcon
                icon={faGithub}
                size="4x"
                fixedWidth
                pull="left"
              />
            </div>
          </li>
          <li>
            <div className="icon-wrapper">
              <FontAwesomeIcon
                icon={faJs}
                size="4x"
                fixedWidth
                pull="left"
              />
            </div>
          </li>
          <li>
            <div className="icon-wrapper">
              <FontAwesomeIcon
                icon={faJava}
                size="4x"
                fixedWidth
                pull="left"
              />
            </div>
          </li>
          <li>
            <div className="icon-wrapper">
              <FontAwesomeIcon
                icon={faHtml5}
                size="4x"
                fixedWidth
                pull="left"
                spinReverse
              />
            </div>
          </li>
          <li>
            <div className="icon-wrapper">
              <FontAwesomeIcon
                icon={faPython}
                size="4x"
                fixedWidth
                pull="left"
              />
            </div>
          </li>
          <li>
            <div className="icon-wrapper">
              <FontAwesomeIcon
                icon={faDocker}
                size="4x"
                fixedWidth
                pull="left"
              />
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

