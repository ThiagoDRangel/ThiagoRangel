import HeaderMenu from '../HeaderMenu';
import avatar from '../../assets/images/avatar.png';
import './styles.css';

function Header() {
  return (
    <header className="header-container">
      <a href="https://www.linkedin.com/in/thiagodrangel" target="_blank">
        <img src={avatar} alt="profile" />
      </a>
      <HeaderMenu />
    </header>
  );
}

export default Header;
