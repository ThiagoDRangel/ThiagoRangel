import HeaderMenu from '../HeaderMenu';
import avatar from '../../assets/images/avatarFoto.png';
import './styles.css';

function Header() {
  return (
    <header className="header-container">
      <div className="avatar-container">
        <a href="https://www.linkedin.com/in/thiagodrangel" target="_blank" className="avatar-link">
          <img src={avatar} alt="profile" className="avatar" />
        </a>
        <span className="hover-message">Go LinkedIn</span>
      </div>
      <HeaderMenu />
    </header>
  );
}

export default Header;
