import './styles.css';
import profileIcon from '../../assets/icon/profileIcon.svg';
import projectIcon from '../../assets/icon/projectIcon.svg';
import homeIcon from '../../assets/icon/homeIcon.svg';
import darkTheme from '../../assets/icon/darkTheme.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header-container">
        <Link to="/home">
          <img
            alt="Home Icon"
            className="profile-icon"
            src={homeIcon}
          />
        </Link>
      <div className="icons-container">
        <Link to="/home">
          <img
            alt="theme"
            className="profile-icon"
            src={darkTheme}
          />
        </Link>
        <Link to="/home/profile">
          <img
            alt="Profile Icon"
            className="profile-icon"
            src={profileIcon}
          />
        </Link>
        <Link to="/home/projects">
          <img
            alt="Project Icon"
            className="profile-icon"
            src={projectIcon}
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
